"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {
    id?: string;
    title: string;
    subtitle?: string;
    children: React.ReactNode;
    className?: string;
};

export function Section({ id, title, subtitle, children, className }: Props) {
    return (
        <section id={id} className={`px-6 py-12 ${className || ""}`}>
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-3"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    {title}
                </motion.h2>
                {subtitle ? (
                    <motion.p
                        className="text-gray-700 max-w-2xl mx-auto mb-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                    >
                        {subtitle}
                    </motion.p>
                ) : null}
                {children}
            </div>
        </section>
    );
}
