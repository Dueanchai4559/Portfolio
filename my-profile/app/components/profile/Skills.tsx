"use client";

import React from "react";
import { motion } from "framer-motion";

type Skill = { name: string; desc: string };

export function Skills({ items }: { items: Skill[] }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {items.map((item, i) => (
                <motion.div
                    key={item.name}
                    className="bg-white/70 backdrop-blur rounded-xl p-6 shadow-md hover:scale-[1.02] transition-transform border border-white/60"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                >
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.name}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
            ))}
        </div>
    );
}
