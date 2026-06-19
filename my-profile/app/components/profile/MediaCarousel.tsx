/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Props = {
    items: string[];               // path รูป
    aspectClass?: string;          // class กำหนดความสูง/อัตราส่วน
    itemAltPrefix?: string;        // คำ alt base
};

export function MediaCarousel({ items, aspectClass = "max-h-[500px]", itemAltPrefix = "สื่อ" }: Props) {
    const [current, setCurrent] = useState(0);
    const [zoomed, setZoomed] = useState<string | null>(null);

    const prev = () => setCurrent((p) => (p === 0 ? items.length - 1 : p - 1));
    const next = () => setCurrent((p) => (p + 1) % items.length);

    const onKey = useCallback((e: KeyboardEvent) => {
        if (e.key === "Escape") setZoomed(null);
        if (!zoomed) {
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        }
    }, [zoomed]);

    useEffect(() => {
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [onKey]);

    return (
        <>
            <div className="relative max-w-3xl mx-auto overflow-hidden rounded-xl shadow-lg bg-white/60 border border-white/70">
                <img
                    src={items[current]}
                    alt={`${itemAltPrefix} ${current + 1}`}
                    className={`w-full object-contain ${aspectClass} cursor-zoom-in`}
                    onClick={() => setZoomed(items[current])}
                />
                <button
                    onClick={prev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full"
                    aria-label="ก่อนหน้า"
                >
                    <ChevronLeft />
                </button>
                <button
                    onClick={next}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full"
                    aria-label="ถัดไป"
                >
                    <ChevronRight />
                </button>
                <div className="absolute bottom-2 right-2 bg-white/90 px-2 py-1 rounded text-sm">
                    {current + 1}/{items.length}
                </div>
            </div>

            {zoomed && (
                <div
                    onClick={() => setZoomed(null)}
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 cursor-zoom-out"
                >
                    <div className="relative">
                        <img
                            src={zoomed}
                            alt="ภาพขยาย"
                            className="max-w-[92vw] max-h-[92vh] rounded shadow-2xl border border-white/30"
                        />
                        <button
                            onClick={() => setZoomed(null)}
                            className="absolute top-2 right-2 bg-white/90 hover:bg-white p-1 rounded-full"
                            aria-label="ปิด"
                        >
                            <X className="text-black w-6 h-6" />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
