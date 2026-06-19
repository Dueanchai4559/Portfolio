"use client";

import React from "react";
import { motion } from "framer-motion";
import { DollarSign, Briefcase, Globe2, CalendarClock, ReceiptText } from "lucide-react";

export type Currency = "THB" | "USD";

export type SalaryData = {
    min: number;                 // ค่าต่ำสุดต่อเดือน
    max: number;                 // ค่าสูงสุดต่อเดือน
    currency?: Currency;         // ค่าเงิน (default THB)
    note?: string;               // บันทึก/เงื่อนไขเพิ่มเติม
    availability?: string;       // พร้อมเริ่มงานเมื่อไหร่ เช่น "ภายใน 30 วัน"
    engagement?: string[];       // รูปแบบการจ้าง เช่น ["Full-time", "Contract", "Project-based"]
    workMode?: "On-site" | "Hybrid" | "Remote"; // รูปแบบการทำงาน
    invoiceReady?: boolean;      // ออกใบกำกับภาษี/ใบแจ้งหนี้ได้หรือไม่
};

function formatCurrency(n: number, currency: Currency = "THB") {
    const locales = currency === "USD" ? "en-US" : "th-TH";
    return new Intl.NumberFormat(locales, {
        style: "currency",
        currency,
        maximumFractionDigits: 0,
    }).format(n);
}

export function ExpectedSalaryBusiness({ data }: { data: SalaryData }) {
    const {
        min,
        max,
        currency = "THB",
        note,
        availability = "พร้อมเริ่มงานทันที",
        engagement = ["Full-time", "Contract", "Project-based"],
        workMode = "Hybrid",
        invoiceReady = true,
    } = data;

    const rangeText = `${formatCurrency(min, currency)} – ${formatCurrency(max, currency)}/เดือน`;

    return (
        <section className="px-6 py-14 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                    {/* บัตรช่วงรายได้ */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="lg:col-span-2 rounded-2xl border bg-white shadow-sm"
                    >
                        <div className="p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600" aria-hidden>
                                    <DollarSign />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
                                    รายได้ที่ต้องการ
                                </h2>
                            </div>

                            <div className="mt-2">
                                <p className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                                    {rangeText}
                                </p>
                                {note ? (
                                    <p className="mt-3 text-slate-600 leading-relaxed">
                                        {note}
                                    </p>
                                ) : null}
                            </div>

                            <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                                <li className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                                    ช่วงค่าแรงต่อเดือน ปรับตามขอบเขตงานและความรับผิดชอบ
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                                    เปิดรับโครงสร้างค่าตอบแทนที่สอดคล้องกับ KPI/OKR
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* บัตรสรุปเงื่อนไขการจ้างงาน */}
                    <motion.aside
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: 0.05 }}
                        className="rounded-2xl border bg-white shadow-sm"
                    >
                        <div className="p-6 md:p-7 space-y-5">
                            <h3 className="text-lg font-semibold text-slate-900">สรุปเงื่อนไข</h3>

                            <div className="flex items-start gap-3">
                                <div className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-50 text-slate-700" aria-hidden>
                                    <CalendarClock size={18} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">ความพร้อมเริ่มงาน</p>
                                    <p className="font-medium text-slate-900">{availability}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-50 text-slate-700" aria-hidden>
                                    <Briefcase size={18} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">รูปแบบการจ้าง</p>
                                    <p className="font-medium text-slate-900">
                                        {engagement.join(" • ")}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-50 text-slate-700" aria-hidden>
                                    <Globe2 size={18} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">การทำงาน</p>
                                    <p className="font-medium text-slate-900">{workMode}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-50 text-slate-700" aria-hidden>
                                    <ReceiptText size={18} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">เอกสารทางการเงิน</p>
                                    <p className="font-medium text-slate-900">
                                        {invoiceReady ? "ออกใบแจ้งหนี้/กำกับภาษีได้" : "ไม่ออกเอกสารภาษี"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.aside>
                </div>
            </div>
        </section>
    );
}

/** ให้ใช้งานได้ทั้ง named และ default import */
export const ExpectedSalary = ExpectedSalaryBusiness;
export default ExpectedSalaryBusiness;
