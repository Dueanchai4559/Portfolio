import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, "..");
const publicDir = path.join(projectRoot, "public");
const certificatesRoot = path.join(publicDir, "certificates");
const outputDir = path.join(projectRoot, "app", "lib");
const outputFile = path.join(outputDir, "generatedCertificates.ts");

const allowedExtensions = new Set([".pdf"]);

function ensureDir(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
}

function cleanTitle(fileName) {
    const parsed = path.parse(fileName);

    return parsed.name
        .replace(/[_-]+/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function toWebUrl(absFilePath) {
    const relativeFromPublic = path.relative(publicDir, absFilePath);

    const parts = relativeFromPublic
        .split(path.sep)
        .filter(Boolean)
        .map((part) => encodeURIComponent(part));

    return `/${parts.join("/")}`;
}

function getRelativePartsFromCertificateRoot(absFilePath) {
    return path
        .relative(certificatesRoot, absFilePath)
        .split(path.sep)
        .filter(Boolean);
}

function getCategory(absFilePath) {
    const parts = getRelativePartsFromCertificateRoot(absFilePath);

    if (parts.length <= 1) return "ทั่วไป";

    return parts[0];
}

function getFolder(absFilePath) {
    const parts = getRelativePartsFromCertificateRoot(absFilePath);

    if (parts.length <= 1) return "ทั่วไป";

    return parts.slice(0, -1).join(" / ");
}

function walk(dirPath) {
    if (!fs.existsSync(dirPath)) return [];

    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    const files = [];

    for (const entry of entries) {
        const absPath = path.join(dirPath, entry.name);

        if (entry.isDirectory()) {
            files.push(...walk(absPath));
            continue;
        }

        if (!entry.isFile()) continue;

        const extension = path.extname(entry.name).toLowerCase();

        if (!allowedExtensions.has(extension)) continue;

        const stat = fs.statSync(absPath);

        files.push({
            absPath,
            fileName: entry.name,
            title: cleanTitle(entry.name),
            category: getCategory(absPath),
            folder: getFolder(absPath),
            url: toWebUrl(absPath),
            extension: extension.replace(".", ""),
            sizeBytes: stat.size,
        });
    }

    return files;
}

function createStableId(item, index) {
    const base = `${item.folder}-${item.fileName}-${index + 1}`;

    return base
        .toLowerCase()
        .replace(/[^\p{L}\p{N}]+/gu, "-")
        .replace(/^-+|-+$/g, "");
}

function main() {
    ensureDir(publicDir);
    ensureDir(certificatesRoot);
    ensureDir(outputDir);

    const files = walk(certificatesRoot)
        .sort((a, b) => {
            const categoryCompare = a.category.localeCompare(b.category, "th");
            if (categoryCompare !== 0) return categoryCompare;

            const folderCompare = a.folder.localeCompare(b.folder, "th");
            if (folderCompare !== 0) return folderCompare;

            return a.title.localeCompare(b.title, "th");
        })
        .map((item, index) => ({
            id: createStableId(item, index),
            title: item.title,
            category: item.category,
            folder: item.folder,
            fileName: item.fileName,
            url: item.url,
            extension: item.extension,
            sizeBytes: item.sizeBytes,
        }));

    const content = `/* eslint-disable */
/*
  ไฟล์นี้ถูกสร้างอัตโนมัติจาก scripts/generate-certificates.mjs
  ถ้าจะเพิ่มเกียรติบัตร ให้ใส่ PDF ใน public/certificates แล้วรัน npm run dev ใหม่
*/

export const CERTIFICATE_FILES = ${JSON.stringify(files, null, 2)} as const;

export type GeneratedCertificateFile = (typeof CERTIFICATE_FILES)[number];
`;

    fs.writeFileSync(outputFile, content, "utf8");

    console.log(`Generated ${files.length} certificate file(s).`);
    console.log(`Output: ${path.relative(projectRoot, outputFile)}`);
}

main();