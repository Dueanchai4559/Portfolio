"use client";

import React from "react";

type Lang = { label: string; tone: "green" | "yellow" };

const toneClass: Record<Lang["tone"], string> = {
    green: "bg-green-100",
    yellow: "bg-yellow-100",
};

export function LanguageBadges({ items }: { items: Lang[] }) {
    return (
        <div className="flex justify-center gap-4 md:gap-8 flex-wrap text-base md:text-lg font-medium">
            {items.map((l, idx) => (
                <span
                    key={`${l.label}-${idx}`}
                    className={`${toneClass[l.tone]} px-6 py-2 rounded-full shadow border border-white/60`}
                >
                    {l.label}
                </span>
            ))}
        </div>
    );
}
