"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Braces,
    FileCode,
    Globe,
    Rocket,
    Palette,
    Boxes,
    Server,
    Cpu,
    Code2,
    Database,
    Binary,
    Box,
    Smartphone,
    Layers,
    BookOpen,
    GitBranch,
    Cloud,
    Flame,
    Mail,
} from "lucide-react";

type StackItem = { name: string; icon: React.ReactNode };
type StackGroup = { title: string; items: StackItem[]; tone: "blue" | "purple" | "green" | "yellow" | "red" };

const toneToBg: Record<StackGroup["tone"], string> = {
    blue: "bg-blue-100",
    purple: "bg-purple-100",
    green: "bg-green-100",
    yellow: "bg-yellow-100",
    red: "bg-red-100",
};

export function TechStacks({ stacks }: { stacks: StackGroup[] }) {
    return (
        <div className="max-w-6xl mx-auto space-y-12">
            {stacks.map((group, gi) => (
                <div key={group.title}>
                    <h3 className="text-2xl font-semibold mb-4">{group.title}</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {group.items.map((item, i) => (
                            <motion.div
                                key={item.name}
                                className={`${toneToBg[group.tone]} rounded-xl py-5 px-4 shadow hover:scale-105 transition-transform flex flex-col items-center border border-white/70`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (gi * 0.04) + i * 0.06 }}
                            >
                                <div className="mb-2">{item.icon}</div>
                                <p className="text-lg font-medium text-gray-900">{item.name}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

/** ไอคอนที่ใช้สร้าง items แบบไม่มีอิโมจิ */
export const Icons = {
    Braces: <Braces size={28} />,
    FileCode: <FileCode size={28} />,
    Globe: <Globe size={28} />,
    Rocket: <Rocket size={28} />,
    Palette: <Palette size={28} />,
    Boxes: <Boxes size={28} />,
    Server: <Server size={28} />,
    Cpu: <Cpu size={28} />,
    Code2: <Code2 size={28} />,
    Database: <Database size={28} />,
    Binary: <Binary size={28} />,
    Box: <Box size={28} />,
    Smartphone: <Smartphone size={28} />,
    Layers: <Layers size={28} />,
    BookOpen: <BookOpen size={28} />,
    GitBranch: <GitBranch size={28} />,
    Cloud: <Cloud size={28} />,
    Flame: <Flame size={28} />,
    Mail: <Mail size={28} />,
};
