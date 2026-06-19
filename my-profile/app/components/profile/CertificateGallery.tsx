"use client";

import React, { useEffect, useMemo, useState } from "react";

export type CertificateGalleryItem = {
    readonly id: string;
    readonly title: string;
    readonly category: string;
    readonly folder: string;
    readonly fileName: string;
    readonly url: string;
    readonly extension: string;
    readonly sizeBytes: number;
};

type CertificateGalleryProps = {
    items: ReadonlyArray<CertificateGalleryItem>;
    compact?: boolean;
    showHeader?: boolean;
};

function formatFileSize(sizeBytes: number): string {
    if (!Number.isFinite(sizeBytes) || sizeBytes <= 0) return "-";

    const kb = sizeBytes / 1024;
    const mb = kb / 1024;

    if (mb >= 1) return `${mb.toFixed(2)} MB`;

    return `${kb.toFixed(0)} KB`;
}

function normalizeText(value: string): string {
    return String(value || "").toLowerCase().trim();
}

export default function CertificateGallery({
    items,
    compact = false,
    showHeader = true,
}: CertificateGalleryProps) {
    const [search, setSearch] = useState<string>("");
    const [category, setCategory] = useState<string>("all");
    const [page, setPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(compact ? 6 : 12);
    const [activeItem, setActiveItem] = useState<CertificateGalleryItem | null>(
        items[0] ?? null
    );

    const categories = useMemo<string[]>(() => {
        const set = new Set<string>();

        items.forEach((item) => {
            if (item.category) {
                set.add(item.category);
            }
        });

        return Array.from(set).sort((a, b) => a.localeCompare(b, "th"));
    }, [items]);

    const filteredItems = useMemo<CertificateGalleryItem[]>(() => {
        const q = normalizeText(search);

        return items.filter((item) => {
            const matchCategory = category === "all" || item.category === category;

            const searchable = normalizeText(
                [
                    item.title,
                    item.category,
                    item.folder,
                    item.fileName,
                    item.extension,
                ].join(" ")
            );

            const matchSearch = !q || searchable.includes(q);

            return matchCategory && matchSearch;
        });
    }, [items, search, category]);

    const totalPages = useMemo<number>(() => {
        return Math.max(1, Math.ceil(filteredItems.length / pageSize));
    }, [filteredItems.length, pageSize]);

    const safePage = Math.min(page, totalPages);

    const pagedItems = useMemo<CertificateGalleryItem[]>(() => {
        const start = (safePage - 1) * pageSize;
        return filteredItems.slice(start, start + pageSize);
    }, [filteredItems, safePage, pageSize]);

    useEffect(() => {
        setPage(1);
    }, [search, category, pageSize]);

    useEffect(() => {
        if (filteredItems.length === 0) {
            setActiveItem(null);
            return;
        }

        if (!activeItem) {
            setActiveItem(filteredItems[0]);
            return;
        }

        const stillExists = filteredItems.some((item) => item.id === activeItem.id);

        if (!stillExists) {
            setActiveItem(filteredItems[0]);
        }
    }, [activeItem, filteredItems]);

    const goPrev = (): void => {
        setPage((prev) => Math.max(1, prev - 1));
    };

    const goNext = (): void => {
        setPage((prev) => Math.min(totalPages, prev + 1));
    };

    if (items.length === 0) {
        return (
            <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white/70 p-6 text-center shadow-sm backdrop-blur">
                <h3 className="text-xl font-black text-slate-800">
                    ยังไม่มีไฟล์เกียรติบัตร
                </h3>

                <p className="mt-2 text-sm font-semibold leading-6 text-slate-500">
                    ให้วางไฟล์ PDF ไว้ที่ public/certificates แล้วรัน npm run dev ใหม่
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-5">
            {showHeader ? (
                <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/55 p-5 shadow-xl shadow-slate-900/10 backdrop-blur-xl">
                    <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <div className="mb-2 inline-flex rounded-full bg-slate-950 px-3 py-1 text-xs font-black uppercase tracking-[0.22em] text-white">
                                Certificate Library
                            </div>

                            <h3 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                                คลังเกียรติบัตรทั้งหมด
                            </h3>

                            <p className="mt-2 max-w-3xl text-sm font-semibold leading-6 text-slate-600">
                                รวมไฟล์ PDF จำนวนมาก แยกตามหมวดหมู่ ค้นหาได้ และเปิดดูตัวอย่างได้ทันที
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-2 sm:min-w-[420px]">
                            <div className="rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-blue-800">
                                <p className="text-xs font-black uppercase tracking-[0.18em] opacity-70">
                                    ทั้งหมด
                                </p>
                                <p className="mt-1 text-2xl font-black">{items.length}</p>
                            </div>

                            <div className="rounded-2xl border border-pink-100 bg-pink-50 px-4 py-3 text-pink-800">
                                <p className="text-xs font-black uppercase tracking-[0.18em] opacity-70">
                                    หมวดหมู่
                                </p>
                                <p className="mt-1 text-2xl font-black">{categories.length}</p>
                            </div>

                            <div className="rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-emerald-800">
                                <p className="text-xs font-black uppercase tracking-[0.18em] opacity-70">
                                    ที่พบ
                                </p>
                                <p className="mt-1 text-2xl font-black">
                                    {filteredItems.length}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}

            <div className="grid grid-cols-1 gap-5 xl:grid-cols-[420px_1fr]">
                <div className="space-y-4">
                    <div className="rounded-[2rem] border border-white/70 bg-white/60 p-4 shadow-xl shadow-slate-900/10 backdrop-blur-xl">
                        <label className="block text-sm font-black text-slate-700">
                            ค้นหาเกียรติบัตร
                        </label>

                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="ค้นหาชื่อไฟล์ / หมวดหมู่ / โฟลเดอร์"
                            className="mt-2 w-full rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-sm font-semibold outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                        />

                        <label className="mt-4 block text-sm font-black text-slate-700">
                            หมวดหมู่
                        </label>

                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="mt-2 w-full rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-sm font-semibold outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                        >
                            <option value="all">ทั้งหมด</option>
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>

                        <label className="mt-4 block text-sm font-black text-slate-700">
                            จำนวนต่อหน้า
                        </label>

                        <select
                            value={pageSize}
                            onChange={(e) => setPageSize(Number(e.target.value))}
                            className="mt-2 w-full rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-sm font-semibold outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                        >
                            <option value={6}>6 รายการ</option>
                            <option value={8}>8 รายการ</option>
                            <option value={12}>12 รายการ</option>
                            <option value={24}>24 รายการ</option>
                            <option value={48}>48 รายการ</option>
                            <option value={96}>96 รายการ</option>
                        </select>
                    </div>

                    <div className="rounded-[2rem] border border-white/70 bg-white/60 p-4 shadow-xl shadow-slate-900/10 backdrop-blur-xl">
                        <div className="mb-3 flex items-center justify-between gap-3">
                            <h4 className="text-base font-black text-slate-900">
                                รายการเกียรติบัตร
                            </h4>

                            <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-black text-white">
                                {filteredItems.length}
                            </span>
                        </div>

                        <div className="max-h-[520px] space-y-2 overflow-y-auto pr-1">
                            {pagedItems.length === 0 ? (
                                <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-8 text-center text-sm font-bold text-slate-500">
                                    ไม่พบเกียรติบัตรตามเงื่อนไขที่ค้นหา
                                </div>
                            ) : (
                                pagedItems.map((item) => {
                                    const active = activeItem?.id === item.id;

                                    return (
                                        <button
                                            key={item.id}
                                            type="button"
                                            onClick={() => setActiveItem(item)}
                                            className={[
                                                "w-full rounded-2xl border p-3 text-left transition",
                                                active
                                                    ? "border-blue-300 bg-blue-50 shadow-lg shadow-blue-100"
                                                    : "border-white bg-white hover:border-slate-200 hover:bg-slate-50",
                                            ].join(" ")}
                                        >
                                            <div className="flex items-start gap-3">
                                                <div
                                                    className={[
                                                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-xs font-black",
                                                        active
                                                            ? "bg-blue-600 text-white"
                                                            : "bg-red-50 text-red-700",
                                                    ].join(" ")}
                                                >
                                                    PDF
                                                </div>

                                                <div className="min-w-0 flex-1">
                                                    <p className="max-h-10 overflow-hidden text-sm font-black text-slate-900">
                                                        {item.title}
                                                    </p>

                                                    <p className="mt-1 truncate text-xs font-semibold text-slate-500">
                                                        {item.folder}
                                                    </p>

                                                    <p className="mt-1 text-xs font-semibold text-slate-400">
                                                        {formatFileSize(item.sizeBytes)}
                                                    </p>
                                                </div>
                                            </div>
                                        </button>
                                    );
                                })
                            )}
                        </div>

                        <div className="mt-4 flex items-center justify-between gap-3">
                            <button
                                type="button"
                                onClick={goPrev}
                                disabled={safePage <= 1}
                                className="rounded-2xl bg-slate-200 px-4 py-2 text-sm font-black text-slate-700 transition hover:bg-slate-300 disabled:cursor-not-allowed disabled:opacity-40"
                            >
                                ก่อนหน้า
                            </button>

                            <p className="text-sm font-black text-slate-600">
                                หน้า {safePage} / {totalPages}
                            </p>

                            <button
                                type="button"
                                onClick={goNext}
                                disabled={safePage >= totalPages}
                                className="rounded-2xl bg-slate-200 px-4 py-2 text-sm font-black text-slate-700 transition hover:bg-slate-300 disabled:cursor-not-allowed disabled:opacity-40"
                            >
                                ถัดไป
                            </button>
                        </div>
                    </div>
                </div>

                <div className="rounded-[2rem] border border-white/70 bg-white/60 p-4 shadow-xl shadow-slate-900/10 backdrop-blur-xl">
                    {activeItem ? (
                        <div className="space-y-4">
                            <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                                <div>
                                    <div className="mb-2 inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-red-700">
                                        PDF Preview
                                    </div>

                                    <h4 className="text-xl font-black text-slate-900 sm:text-2xl">
                                        {activeItem.title}
                                    </h4>

                                    <p className="mt-1 text-sm font-semibold text-slate-500">
                                        {activeItem.folder}
                                    </p>

                                    <p className="mt-1 text-xs font-bold text-slate-400">
                                        {activeItem.fileName} • {formatFileSize(activeItem.sizeBytes)}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    <a
                                        href={activeItem.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-2xl bg-slate-950 px-4 py-2 text-sm font-black text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5"
                                    >
                                        เปิดไฟล์
                                    </a>

                                    <a
                                        href={activeItem.url}
                                        download
                                        className="rounded-2xl bg-blue-600 px-4 py-2 text-sm font-black text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5"
                                    >
                                        ดาวน์โหลด
                                    </a>
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-100">
                                <iframe
                                    title={activeItem.title}
                                    src={`${activeItem.url}#toolbar=1&navpanes=0&scrollbar=1`}
                                    className="h-[620px] w-full bg-white"
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="flex min-h-[520px] items-center justify-center rounded-[1.5rem] border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
                            <div>
                                <h4 className="text-xl font-black text-slate-800">
                                    ยังไม่ได้เลือกไฟล์
                                </h4>

                                <p className="mt-2 text-sm font-semibold text-slate-500">
                                    เลือกเกียรติบัตรจากรายการด้านซ้ายเพื่อดูตัวอย่าง
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}