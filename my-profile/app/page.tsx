/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Phone,
  MessageCircle,
  DollarSign,
} from "lucide-react";

export default function FancyProfilePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomed, setZoomed] = useState<string | null>(null);
  const certificates = [
    "/certs/cert1.jpg",
    "/certs/cert2.jpg",
    "/certs/cert3.jpg",
  ];

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1
    );
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  return (
    <main className="bg-gradient-to-b from-blue-200 via-pink-200 to-purple-100 text-gray-800">
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <motion.img
          src="/my-photo.jpg"
          alt="ม่อน"
          className="w-36 h-36 rounded-full shadow-lg border-4 border-white mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          className="text-4xl font-bold mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          สวัสดี เราชื่อม่อน
        </motion.h1>
        <motion.p
          className="max-w-md text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Full Stack Developer ผู้ชื่นชอบการสร้างเกม แอพ และใช้ของฟรีอย่างถูกกฎหมาย
        </motion.p>
      </section>

   {/* Language Proficiency */}
      <section className="px-6 py-10 text-center backdrop-blur-sm">
        <h2 className="text-3xl font-bold mb-8">ภาษา</h2>
        <div className="flex justify-center gap-10 text-xl font-medium">
          <span className="bg-green-100 px-6 py-2 rounded-full shadow">ไทย (ระดับเจ้าของภาษา)</span>
          <span className="bg-yellow-100 px-6 py-2 rounded-full shadow">อังกฤษ (สื่อสาร/ทำงานได้)</span>
        </div>
      </section>

{/* Programming Languages */}
{/* Programming Languages */}
<section className="px-6 py-10 text-center">
  <h2 className="text-3xl font-bold mb-8">ภาษาและเครื่องมือที่ม่อนใช้</h2>
  <div className="max-w-5xl mx-auto space-y-10">
    {/* Frontend */}
    <div>
      <h3 className="text-2xl font-semibold mb-4">Frontend</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { name: "JavaScript", icon: "🟨" },
          { name: "TypeScript", icon: "🔷" },
          { name: "React", icon: "⚛️" },
          { name: "Next.js", icon: "🚀" },
          { name: "TailwindCSS", icon: "🎨" },
          { name: "HTML", icon: "📄" },
          { name: "CSS", icon: "🎀" },
        ].map((item, i) => (
          <motion.div
            key={item.name}
            className="bg-blue-100 rounded-xl py-5 px-4 shadow hover:scale-105 transition-transform flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
          >
            <div className="text-3xl mb-2">{item.icon}</div>
            <p className="text-lg font-medium">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Backend */}
    <div>
      <h3 className="text-2xl font-semibold mb-4">Backend</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { name: "Node.js", icon: "🟩" },
          { name: "Express", icon: "🚂" },
          { name: "Prisma", icon: "📦" },
          { name: "Python", icon: "🐍" },
          { name: "C#", icon: "♯" },
          { name: "REST API", icon: "🌐" },
        ].map((item, i) => (
          <motion.div
            key={item.name}
            className="bg-purple-100 rounded-xl py-5 px-4 shadow hover:scale-105 transition-transform flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
          >
            <div className="text-3xl mb-2">{item.icon}</div>
            <p className="text-lg font-medium">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Mobile App */}
    <div>
      <h3 className="text-2xl font-semibold mb-4">Mobile App</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {[
          { name: "Flutter", icon: "🖌️" },
          { name: "Dart", icon: "🎯" },
          { name: "Android (Java)", icon: "🤖" },
          { name: "Unity", icon: "🎮" },
        ].map((item, i) => (
          <motion.div
            key={item.name}
            className="bg-green-100 rounded-xl py-5 px-4 shadow hover:scale-105 transition-transform flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
          >
            <div className="text-3xl mb-2">{item.icon}</div>
            <p className="text-lg font-medium">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Database */}
    <div>
      <h3 className="text-2xl font-semibold mb-4">Database</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {[
          { name: "PostgreSQL", icon: "🐘" },
          { name: "MySQL", icon: "🐬" },
          { name: "SQLite", icon: "🗃️" },
          { name: "MongoDB", icon: "🍃" },
          { name: "SQL", icon: "📊" },
        ].map((item, i) => (
          <motion.div
            key={item.name}
            className="bg-yellow-100 rounded-xl py-5 px-4 shadow hover:scale-105 transition-transform flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
          >
            <div className="text-3xl mb-2">{item.icon}</div>
            <p className="text-lg font-medium">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Dev Tools / Infra */}
    <div>
      <h3 className="text-2xl font-semibold mb-4">Dev Tools & Infra</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {[
          { name: "Docker", icon: "🐳" },
          { name: "Git", icon: "🔧" },
          { name: "GitHub", icon: "🐱" },
          { name: "Vercel", icon: "☁️" },
          { name: "Firebase", icon: "🔥" },
          { name: "Postman", icon: "📮" },
        ].map((item, i) => (
          <motion.div
            key={item.name}
            className="bg-red-100 rounded-xl py-5 px-4 shadow hover:scale-105 transition-transform flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
          >
            <div className="text-3xl mb-2">{item.icon}</div>
            <p className="text-lg font-medium">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* อื่น ๆ */}
    <div>
      <h3 className="text-2xl font-semibold mb-4">อื่น ๆ</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {[
          { name: "Figma", icon: "🎨" },
          { name: "Notion", icon: "📝" },
          { name: "Excel", icon: "📈" },
          { name: "Trello", icon: "📋" },
          { name: "Slack", icon: "💬" },
        ].map((item, i) => (
          <motion.div
            key={item.name}
            className="bg-pink-100 rounded-xl py-5 px-4 shadow hover:scale-105 transition-transform flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
          >
            <div className="text-3xl mb-2">{item.icon}</div>
            <p className="text-lg font-medium">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>


{/* Skills */}
<section className="px-6 py-10 text-center">
  <h2 className="text-3xl font-bold mb-8">ทักษะของม่อน</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
    {[
      {
        name: "JavaScript",
        desc: "ภาษาแม่ของเว็บยุคใหม่",
      },
      {
        name: "TypeScript",
        desc: "JS ที่ปลอดภัยและตรวจสอบได้",
      },
      {
        name: "React",
        desc: "เฟรมเวิร์กสำหรับสร้าง UI แบบ Component",
      },
      {
        name: "Next.js",
        desc: "React ที่เพิ่มพลัง SEO และ Server-side",
      },
      {
        name: "Node.js",
        desc: "รัน JavaScript ฝั่ง Backend",
      },
      {
        name: "Prisma",
        desc: "ORM ที่เขียนง่ายและปลอดภัย",
      },
      {
        name: "Flutter",
        desc: "UI Kit สร้างแอพข้ามแพลตฟอร์มด้วย Dart",
      },
      {
        name: "Docker",
        desc: "ทำให้โปรเจกต์รันได้เหมือนกันทุกเครื่อง",
      },
      {
        name: "TailwindCSS",
        desc: "CSS utility class ที่เร็วและยืดหยุ่น",
      },
    ].map((item, i) => (
      <motion.div
        key={item.name}
        className="bg-white/60 backdrop-blur rounded-xl p-6 shadow-md hover:scale-[1.03] transition-transform"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1 }}
      >
        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
        <p className="text-gray-700 text-sm">{item.desc}</p>
      </motion.div>
    ))}
  </div>
</section>

      {/* Experience */}
      <section className="px-6 py-10 text-center">
        <h2 className="text-3xl font-bold mb-8">ประวัติการทำงาน</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white/80 rounded-xl shadow p-6 text-left backdrop-blur">
            <h3 className="text-xl font-bold">บริษัท A</h3>
            <p className="text-gray-600">Full Stack Developer (2022 - ปัจจุบัน)</p>
            <p className="mt-2">พัฒนาเว็บแอพสำหรับจัดการระบบโรงพยาบาลด้วย React, Node.js, Prisma</p>
          </div>
          <div className="bg-white/80 rounded-xl shadow p-6 text-left backdrop-blur">
            <h3 className="text-xl font-bold">บริษัท B</h3>
            <p className="text-gray-600">Intern Game Developer (2021)</p>
            <p className="mt-2">ร่วมพัฒนาเกม 2D ด้วย Unity + C# สำหรับมือถือ</p>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="px-6 py-10 text-center  backdrop-blur">
        <h2 className="text-3xl font-bold mb-8">เกียรติบัตร</h2>
        <div className="relative max-w-xl mx-auto overflow-hidden rounded-xl shadow-lg">
          <img
            src={certificates[currentIndex]}
            alt={`เกียรติบัตร ${currentIndex + 1}`}
            className="w-full object-contain max-h-[500px] cursor-pointer"
            onClick={() => setZoomed(certificates[currentIndex])}
          />
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
          >
            <ChevronRight />
          </button>
          <div className="absolute bottom-2 right-2 bg-white/80 px-2 py-1 rounded text-sm">
            {currentIndex + 1}/{certificates.length}
          </div>
        </div>

        {zoomed && (
          <div
            onClick={() => setZoomed(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur flex items-center justify-center z-50 cursor-zoom-out"
          >
            <div className="relative">
              <img
                src={zoomed}
                alt="ขยาย"
                className="max-w-[90%] max-h-[90%] rounded shadow-2xl"
              />
              <button
                onClick={() => setZoomed(null)}
                className="absolute top-2 right-2 bg-white/80 hover:bg-white p-1 rounded-full"
              >
                <ChevronLeft className="text-black w-6 h-6" />
              </button>
            </div>
          </div>
        )}
      </section>

         {/* work*/}
      <section className="px-6 py-10 text-center  backdrop-blur">
        <h2 className="text-3xl font-bold mb-8">ผลงาน</h2>
        <div className="relative max-w-xl mx-auto overflow-hidden rounded-xl shadow-lg">
          <img
            src={certificates[currentIndex]}
            alt={`เกียรติบัตร ${currentIndex + 1}`}
            className="w-full object-contain max-h-[500px] cursor-pointer"
            onClick={() => setZoomed(certificates[currentIndex])}
          />
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
          >
            <ChevronRight />
          </button>
          <div className="absolute bottom-2 right-2 bg-white/80 px-2 py-1 rounded text-sm">
            {currentIndex + 1}/{certificates.length}
          </div>
        </div>

        {zoomed && (
          <div
            onClick={() => setZoomed(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur flex items-center justify-center z-50 cursor-zoom-out"
          >
            <div className="relative">
              <img
                src={zoomed}
                alt="ขยาย"
                className="max-w-[90%] max-h-[90%] rounded shadow-2xl"
              />
              <button
                onClick={() => setZoomed(null)}
                className="absolute top-2 right-2 bg-white/80 hover:bg-white p-1 rounded-full"
              >
                <ChevronLeft className="text-black w-6 h-6" />
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Expected Salary */}
      <section className="min-h-[40vh] flex flex-col items-center justify-center text-center px-6  backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl p-6 rounded-xl border border-white/20 shadow-lg bg-gradient-to-br from-purple-900/60 to-indigo-800/60"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <DollarSign className="text-white" size={28} />
            <h2 className="text-3xl font-bold text-white">รายได้ที่ต้องการ</h2>
          </div>
          <p className="text-xl text-white/90">
            ประมาณ <span className="text-white font-semibold">50,000 - 80,000</span> บาท/เดือน<br />
            หรือแล้วแต่ความเหมาะสมกับลักษณะงานและความรับผิดชอบ
          </p>
        </motion.div>
      </section>

      {/* Contact */}
      <section className="px-6 py-10 text-center">
        <h2 className="text-3xl font-bold mb-4">ติดต่อเรา</h2>
        <p className="mb-4">อยากร่วมงานหรือคุยเล่นก็ติดต่อมาได้เลย</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-3xl mx-auto">
          <a href="mailto:your@email.com" className="flex items-center gap-2 justify-center bg-gray-800 text-white px-5 py-3 rounded hover:bg-gray-700">
            <Mail size={18} /> Email
          </a>
          <a href="https://github.com/yourusername" target="_blank" className="flex items-center gap-2 justify-center bg-gray-800 text-white px-5 py-3 rounded hover:bg-gray-700">
            <Github size={18} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" className="flex items-center gap-2 justify-center bg-blue-700 text-white px-5 py-3 rounded hover:bg-blue-600">
            <Linkedin size={18} /> LinkedIn
          </a>
          <a href="https://line.me/ti/p/yourlineid" target="_blank" className="flex items-center gap-2 justify-center bg-green-500 text-white px-5 py-3 rounded hover:bg-green-600">
            <MessageCircle size={18} /> LINE
          </a>
          <a href="tel:+66812345678" className="flex items-center gap-2 justify-center bg-yellow-500 text-white px-5 py-3 rounded hover:bg-yellow-600">
            <Phone size={18} /> โทรหาเรา
          </a>
        </div>
      </section>

      <footer className="text-center text-sm text-white/60 py-4">
        © 2025 ม่อน. All rights reserved.
      </footer>
    </main>
  );
}
