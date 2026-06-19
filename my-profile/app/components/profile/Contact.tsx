"use client";

import React from "react";
import { Github, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";

type ContactItem = {
    label: string;
    href: string;
    kind: "email" | "github" | "linkedin" | "line" | "tel";
};

const kindStyle: Record<ContactItem["kind"], { bg: string; icon: React.ReactNode }> = {
    email: { bg: "bg-gray-800 hover:bg-gray-700", icon: <Mail size={18} /> },
    github: { bg: "bg-gray-800 hover:bg-gray-700", icon: <Github size={18} /> },
    linkedin: { bg: "bg-blue-700 hover:bg-blue-600", icon: <Linkedin size={18} /> },
    line: { bg: "bg-green-600 hover:bg-green-700", icon: <MessageCircle size={18} /> },
    tel: { bg: "bg-yellow-600 hover:bg-yellow-700", icon: <Phone size={18} /> },
};

export function Contact({ items }: { items: ContactItem[] }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-3xl mx-auto">
            {items.map((c, idx) => (
                <a
                    key={`${c.kind}-${idx}`}
                    href={c.href}
                    target={c.kind === "email" || c.kind === "tel" ? "_self" : "_blank"}
                    rel="noreferrer"
                    className={`flex items-center gap-2 justify-center text-white px-5 py-3 rounded transition-colors border border-white/40 ${kindStyle[c.kind].bg}`}
                >
                    {kindStyle[c.kind].icon}
                    {c.label}
                </a>
            ))}
        </div>
    );
}
