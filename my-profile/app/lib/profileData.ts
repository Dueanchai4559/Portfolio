import { Icons } from "@/app/components/profile/TechStacks";
import type { Currency } from "../components/profile/ExpectedSalary";

/** HERO */
export const HERO = {
    name: "ม่อน",
    title: "สวัสดี เราชื่อม่อน",
    description:
        "Full Stack Developer ที่ชอบสร้างเกม แอพ เว็บ และใช้ของฟรีอย่างถูกกฎหมาย พร้อมลุยตั้งแต่ออกแบบจนโปรดักชัน",
    avatarSrc: "/my-photo.jpg",
};

/** LANGUAGES */
export const LANGUAGES = [
    { label: "ไทย (ระดับเจ้าของภาษา)", tone: "green" as const },
    { label: "อังกฤษ (สื่อสาร/ทำงานได้)", tone: "yellow" as const },
];

/** STACKS: ใช้ไอคอนจาก lucide-react แทนอิโมจิ */
export const STACKS = [
    {
        title: "Frontend",
        tone: "blue" as const,
        items: [
            { name: "JavaScript", icon: Icons.Braces },
            { name: "TypeScript", icon: Icons.FileCode },
            { name: "React", icon: Icons.Layers },
            { name: "Next.js", icon: Icons.Rocket },
            { name: "TailwindCSS", icon: Icons.Palette },
            { name: "HTML", icon: Icons.Globe },
            { name: "CSS", icon: Icons.BookOpen },
        ],
    },
    {
        title: "Backend",
        tone: "purple" as const,
        items: [
            { name: "Node.js", icon: Icons.Cpu },
            { name: "Express", icon: Icons.GitBranch },
            { name: "Prisma", icon: Icons.Boxes },
            { name: "Python", icon: Icons.Code2 },
            { name: "C#", icon: Icons.Braces },
            { name: "REST API", icon: Icons.Mail },
        ],
    },
    {
        title: "Mobile App",
        tone: "green" as const,
        items: [
            { name: "Flutter", icon: Icons.Palette },
            { name: "Dart", icon: Icons.FileCode },
            { name: "Android (Java)", icon: Icons.Smartphone },
            { name: "Unity", icon: Icons.Layers },
        ],
    },
    {
        title: "Database",
        tone: "yellow" as const,
        items: [
            { name: "PostgreSQL", icon: Icons.Database },
            { name: "MySQL", icon: Icons.Database },
            { name: "SQLite", icon: Icons.Database },
            { name: "MongoDB", icon: Icons.Box },
            { name: "SQL", icon: Icons.Binary },
        ],
    },
    {
        title: "Dev Tools & Infra",
        tone: "red" as const,
        items: [
            { name: "Docker", icon: Icons.Box },
            { name: "Git", icon: Icons.GitBranch },
            { name: "GitHub", icon: Icons.GitBranch },
            { name: "Vercel", icon: Icons.Cloud },
            { name: "Firebase", icon: Icons.Flame },
            { name: "Postman", icon: Icons.Mail },
        ],
    },
];

/** SKILLS */
export const SKILLS = [
    {
        name: "JavaScript",
        desc: "ภาษาแม่ของเว็บยุคใหม่ เขียนได้ทั้งฝั่ง client และ server",
    },
    {
        name: "TypeScript",
        desc: "เสริมความปลอดภัยของโค้ดด้วย static typing อ่านง่าย รีแฟกเตอร์สบาย",
    },
    {
        name: "React",
        desc: "ออกแบบ UI แบบ component-based เน้น state management ที่เข้าใจง่าย",
    },
    {
        name: "Next.js",
        desc: "ได้ทั้ง SSR/SSG/ISR ทำ SEO ดี และจัดการ routing ง่าย",
    },
    {
        name: "Node.js",
        desc: "งาน backend ที่ต้องการความเร็วและ scalable ทำ REST/GraphQL ได้",
    },
    {
        name: "Prisma",
        desc: "ORM ที่ปลอดภัยจาก type error และ migration เป็นระบบ",
    },
    {
        name: "Flutter",
        desc: "ทำ cross-platform app UI สวยเร็วด้วย Dart",
    },
    {
        name: "Docker",
        desc: "แพ็กทุกอย่างให้รันเหมือนกันทุกเครื่อง ลดคำว่า 'บนเครื่องผมรันได้'",
    },
    {
        name: "TailwindCSS",
        desc: "utility-first ทำให้ขึ้น UI เร็ว สะอาด และคุมดีไซน์ง่าย",
    },
];

/** EXPERIENCES */
export const EXPERIENCES = [
    {
        company: "บริษัท A",
        role: "Full Stack Developer",
        period: "2022 - ปัจจุบัน",
        details: "พัฒนาเว็บแอพบริหารจัดการโรงพยาบาลด้วย React, Next.js, Node.js, Prisma",
    },
    {
        company: "บริษัท B",
        role: "Intern Game Developer",
        period: "2021",
        details: "ร่วมพัฒนาเกม 2D ด้วย Unity + C# สำหรับมือถือ",
    },
];

/** MEDIA */
export const CERTIFICATES = [
    "/certs/cert1.jpg",
    "/certs/cert2.jpg",
    "/certs/cert3.jpg",
];

export const WORKS = [
    "/works/work1.jpg",
    "/works/work2.jpg",
    "/works/work3.jpg",
];

/** SALARY */
export type SalaryInfo = {
    min: number;
    max: number;
    currency?: Currency;
    note?: string;
    availability?: string;
    engagement?: string[];
    workMode?: "On-site" | "Hybrid" | "Remote";
    invoiceReady?: boolean;
};

export const SALARY: SalaryInfo = {
    min: 30000,
    max: 50000,
    currency: "THB" as Currency,
    note: "สามารถพูดคุยได้ตามขอบเขตงาน รูปแบบการทำงาน และความรับผิดชอบ",
    availability: "พร้อมเริ่มงานตามตกลง",
    engagement: ["Full-time", "Contract", "Freelance"],
    workMode: "Hybrid",
    invoiceReady: true,
};

/** CONTACTS */
export const CONTACTS = [
    {
        label: "Email",
        href: "mailto:your@email.com",
        kind: "email" as const,
    },
    {
        label: "GitHub",
        href: "https://github.com/yourusername",
        kind: "github" as const,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/yourprofile",
        kind: "linkedin" as const,
    },
    {
        label: "LINE",
        href: "https://line.me/ti/p/yourlineid",
        kind: "line" as const,
    },
    {
        label: "โทรหาเรา",
        href: "tel:+66812345678",
        kind: "tel" as const,
    },
];
/** TOP NAV */
export type ProfileSectionId =
    | "hero"
    | "languages"
    | "stacks"
    | "skills"
    | "experience"
    | "certs"
    | "works"
    | "salary"
    | "contact";

export type ProfileNavItem = {
    id: ProfileSectionId;
    label: string;
};

export const PROFILE_NAV_ITEMS: ReadonlyArray<ProfileNavItem> = [
    { id: "hero", label: "หน้าหลัก" },
    { id: "languages", label: "ภาษา" },
    { id: "stacks", label: "เครื่องมือ" },
    { id: "skills", label: "ทักษะ" },
    { id: "experience", label: "ประสบการณ์" },
    { id: "certs", label: "เกียรติบัตร" },
    { id: "works", label: "ผลงาน" },
    { id: "salary", label: "เงินเดือน" },
    { id: "contact", label: "ติดต่อ" },
];