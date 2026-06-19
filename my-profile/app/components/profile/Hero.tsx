"use client";

import React from "react";
import { motion } from "framer-motion";

type HeroData = {
    name: string;
    title: string;
    description: string;
    avatarSrc: string;
};

export function Hero({ data }: { data: HeroData }) {
    return (
        <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
            <motion.img
                src={data.avatarSrc}
                alt={data.name}
                className="w-36 h-36 rounded-full shadow-lg border-4 border-white mb-4 object-cover"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            />
            <motion.h1
                className="text-4xl md:text-5xl font-bold mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                {data.title}
            </motion.h1>
            <motion.p
                className="max-w-2xl text-lg md:text-xl text-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
            >
                {data.description}
            </motion.p>
        </section>
    );
}
