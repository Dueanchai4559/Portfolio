"use client";

import React from "react";
import { motion } from "framer-motion";

type Exp = {
    company: string;
    role: string;
    period: string;
    details: string;
};

export function Experience({ items }: { items: Exp[] }) {
    return (
        <div className="max-w-3xl mx-auto space-y-6">
            {items.map((e, i) => (
                <motion.div
                    key={`${e.company}-${i}`}
                    className="bg-white/80 rounded-xl shadow p-6 text-left backdrop-blur border border-white/70"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                >
                    <h3 className="text-xl font-bold text-gray-900">{e.company}</h3>
                    <p className="text-gray-700">{e.role} ({e.period})</p>
                    <p className="mt-2 text-gray-800">{e.details}</p>
                </motion.div>
            ))}
        </div>
    );
}
