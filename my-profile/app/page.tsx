// /* eslint-disable @next/next/no-img-element */
// "use client";

// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { motion } from "framer-motion";
// import {
//   Mail,
//   Github,
//   Linkedin,
//   Phone,
//   MessageCircle,
//   DollarSign,
// } from "lucide-react";

// export default function FancyProfilePage() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [zoomed, setZoomed] = useState<string | null>(null);
//   const certificates = [
//     "/certs/cert1.jpg",
//     "/certs/cert2.jpg",
//     "/certs/cert3.jpg",
//   ];

//   const prev = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? certificates.length - 1 : prev - 1
//     );
//   };

//   const next = () => {
//     setCurrentIndex((prev) => (prev + 1) % certificates.length);
//   };

//   return (
//     <main className="bg-gradient-to-b from-blue-200 via-pink-200 to-purple-100 text-gray-800">
//       {/* Hero */}
//       <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
//         <motion.img
//           src="/my-photo.jpg"
//           alt="ม่อน"
//           className="w-36 h-36 rounded-full shadow-lg border-4 border-white mb-4"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         />
//         <motion.h1
//           className="text-4xl font-bold mb-2"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//         >
//           สวัสดี เราชื่อม่อน
//         </motion.h1>
//         <motion.p
//           className="max-w-md text-lg"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.7 }}
//         >
//           Full Stack Developer ผู้ชื่นชอบการสร้างเกม แอพ และใช้ของฟรีอย่างถูกกฎหมาย
//         </motion.p>
//       </section>

//    {/* Language Proficiency */}
//       <section className="px-6 py-10 text-center backdrop-blur-sm">
//         <h2 className="text-3xl font-bold mb-8">ภาษา</h2>
//         <div className="flex justify-center gap-10 text-xl font-medium">
//           <span className="bg-green-100 px-6 py-2 rounded-full shadow">ไทย (ระดับเจ้าของภาษา)</span>
//           <span className="bg-yellow-100 px-6 py-2 rounded-full shadow">อังกฤษ (สื่อสาร/ทำงานได้)</span>
//         </div>
//       </section>

// {/* Programming Languages */}
// {/* Programming Languages */}
// <section className="px-6 py-10 text-center">
//   <h2 className="text-3xl font-bold mb-8">ภาษาและเครื่องมือที่ม่อนใช้</h2>
//   <div className="max-w-5xl mx-auto space-y-10">
//     {/* Frontend */}
//     <div>
//       <h3 className="text-2xl font-semibold mb-4">Frontend</h3>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//         {[
//           { name: "JavaScript", icon: "🟨" },
//           { name: "TypeScript", icon: "🔷" },
//           { name: "React", icon: "⚛️" },
//           { name: "Next.js", icon: "🚀" },
//           { name: "TailwindCSS", icon: "🎨" },
//           { name: "HTML", icon: "📄" },
//           { name: "CSS", icon: "🎀" },
//         ].map((item, i) => (
//           <motion.div
//             key={item.name}
//             className="bg-blue-100 rounded-xl py-5 px-4 shadow hover:scale-105 transition-transform flex flex-col items-center"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: i * 0.06 }}
//           >
//             <div className="text-3xl mb-2">{item.icon}</div>
//             <p className="text-lg font-medium">{item.name}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>

//     {/* Backend */}
//     <div>
//       <h3 className="text-2xl font-semibold mb-4">Backend</h3>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//         {[
//           { name: "Node.js", icon: "🟩" },
//           { name: "Express", icon: "🚂" },
//           { name: "Prisma", icon: "📦" },
//           { name: "Python", icon: "🐍" },
//           { name: "C#", icon: "♯" },
//           { name: "REST API", icon: "🌐" },
//         ].map((item, i) => (
//           <motion.div
//             key={item.name}
//             className="bg-purple-100 rounded-xl py-5 px-4 shadow hover:scale-105 transition-transform flex flex-col items-center"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: i * 0.06 }}
//           >
//             <div className="text-3xl mb-2">{item.icon}</div>
//             <p className="text-lg font-medium">{item.name}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>

//     {/* Mobile App */}
//     <div>
//       <h3 className="text-2xl font-semibold mb-4">Mobile App</h3>
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//         {[
//           { name: "Flutter", icon: "🖌️" },
//           { name: "Dart", icon: "🎯" },
//           { name: "Android (Java)", icon: "🤖" },
//           { name: "Unity", icon: "🎮" },
//         ].map((item, i) => (
//           <motion.div
//             key={item.name}
//             className="bg-green-100 rounded-xl py-5 px-4 shadow hover:scale-105 transition-transform flex flex-col items-center"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: i * 0.06 }}
//           >
//             <div className="text-3xl mb-2">{item.icon}</div>
//             <p className="text-lg font-medium">{item.name}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>

//     {/* Database */}
//     <div>
//       <h3 className="text-2xl font-semibold mb-4">Database</h3>
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//         {[
//           { name: "PostgreSQL", icon: "🐘" },
//           { name: "MySQL", icon: "🐬" },
//           { name: "SQLite", icon: "🗃️" },
//           { name: "MongoDB", icon: "🍃" },
//           { name: "SQL", icon: "📊" },
//         ].map((item, i) => (
//           <motion.div
//             key={item.name}
//             className="bg-yellow-100 rounded-xl py-5 px-4 shadow hover:scale-105 transition-transform flex flex-col items-center"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: i * 0.06 }}
//           >
//             <div className="text-3xl mb-2">{item.icon}</div>
//             <p className="text-lg font-medium">{item.name}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>

//     {/* Dev Tools / Infra */}
//     <div>
//       <h3 className="text-2xl font-semibold mb-4">Dev Tools & Infra</h3>
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//         {[
//           { name: "Docker", icon: "🐳" },
//           { name: "Git", icon: "🔧" },
//           { name: "GitHub", icon: "🐱" },
//           { name: "Vercel", icon: "☁️" },
//           { name: "Firebase", icon: "🔥" },
//           { name: "Postman", icon: "📮" },
//         ].map((item, i) => (
//           <motion.div
//             key={item.name}
//             className="bg-red-100 rounded-xl py-5 px-4 shadow hover:scale-105 transition-transform flex flex-col items-center"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: i * 0.06 }}
//           >
//             <div className="text-3xl mb-2">{item.icon}</div>
//             <p className="text-lg font-medium">{item.name}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>

//     {/* อื่น ๆ */}
//     <div>
//       <h3 className="text-2xl font-semibold mb-4">อื่น ๆ</h3>
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//         {[
//           { name: "Figma", icon: "🎨" },
//           { name: "Notion", icon: "📝" },
//           { name: "Excel", icon: "📈" },
//           { name: "Trello", icon: "📋" },
//           { name: "Slack", icon: "💬" },
//         ].map((item, i) => (
//           <motion.div
//             key={item.name}
//             className="bg-pink-100 rounded-xl py-5 px-4 shadow hover:scale-105 transition-transform flex flex-col items-center"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: i * 0.06 }}
//           >
//             <div className="text-3xl mb-2">{item.icon}</div>
//             <p className="text-lg font-medium">{item.name}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   </div>
// </section>


// {/* Skills */}
// <section className="px-6 py-10 text-center">
//   <h2 className="text-3xl font-bold mb-8">ทักษะของม่อน</h2>
//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
//     {[
//       {
//         name: "JavaScript",
//         desc: "ภาษาแม่ของเว็บยุคใหม่",
//       },
//       {
//         name: "TypeScript",
//         desc: "JS ที่ปลอดภัยและตรวจสอบได้",
//       },
//       {
//         name: "React",
//         desc: "เฟรมเวิร์กสำหรับสร้าง UI แบบ Component",
//       },
//       {
//         name: "Next.js",
//         desc: "React ที่เพิ่มพลัง SEO และ Server-side",
//       },
//       {
//         name: "Node.js",
//         desc: "รัน JavaScript ฝั่ง Backend",
//       },
//       {
//         name: "Prisma",
//         desc: "ORM ที่เขียนง่ายและปลอดภัย",
//       },
//       {
//         name: "Flutter",
//         desc: "UI Kit สร้างแอพข้ามแพลตฟอร์มด้วย Dart",
//       },
//       {
//         name: "Docker",
//         desc: "ทำให้โปรเจกต์รันได้เหมือนกันทุกเครื่อง",
//       },
//       {
//         name: "TailwindCSS",
//         desc: "CSS utility class ที่เร็วและยืดหยุ่น",
//       },
//     ].map((item, i) => (
//       <motion.div
//         key={item.name}
//         className="bg-white/60 backdrop-blur rounded-xl p-6 shadow-md hover:scale-[1.03] transition-transform"
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ delay: i * 0.1 }}
//       >
//         <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
//         <p className="text-gray-700 text-sm">{item.desc}</p>
//       </motion.div>
//     ))}
//   </div>
// </section>

//       {/* Experience */}
//       <section className="px-6 py-10 text-center">
//         <h2 className="text-3xl font-bold mb-8">ประวัติการทำงาน</h2>
//         <div className="max-w-3xl mx-auto space-y-6">
//           <div className="bg-white/80 rounded-xl shadow p-6 text-left backdrop-blur">
//             <h3 className="text-xl font-bold">บริษัท A</h3>
//             <p className="text-gray-600">Full Stack Developer (2022 - ปัจจุบัน)</p>
//             <p className="mt-2">พัฒนาเว็บแอพสำหรับจัดการระบบโรงพยาบาลด้วย React, Node.js, Prisma</p>
//           </div>
//           <div className="bg-white/80 rounded-xl shadow p-6 text-left backdrop-blur">
//             <h3 className="text-xl font-bold">บริษัท B</h3>
//             <p className="text-gray-600">Intern Game Developer (2021)</p>
//             <p className="mt-2">ร่วมพัฒนาเกม 2D ด้วย Unity + C# สำหรับมือถือ</p>
//           </div>
//         </div>
//       </section>

//       {/* Certificates */}
//       <section className="px-6 py-10 text-center  backdrop-blur">
//         <h2 className="text-3xl font-bold mb-8">เกียรติบัตร</h2>
//         <div className="relative max-w-xl mx-auto overflow-hidden rounded-xl shadow-lg">
//           <img
//             src={certificates[currentIndex]}
//             alt={`เกียรติบัตร ${currentIndex + 1}`}
//             className="w-full object-contain max-h-[500px] cursor-pointer"
//             onClick={() => setZoomed(certificates[currentIndex])}
//           />
//           <button
//             onClick={prev}
//             className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
//           >
//             <ChevronLeft />
//           </button>
//           <button
//             onClick={next}
//             className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
//           >
//             <ChevronRight />
//           </button>
//           <div className="absolute bottom-2 right-2 bg-white/80 px-2 py-1 rounded text-sm">
//             {currentIndex + 1}/{certificates.length}
//           </div>
//         </div>

//         {zoomed && (
//           <div
//             onClick={() => setZoomed(null)}
//             className="fixed inset-0 bg-black/80 backdrop-blur flex items-center justify-center z-50 cursor-zoom-out"
//           >
//             <div className="relative">
//               <img
//                 src={zoomed}
//                 alt="ขยาย"
//                 className="max-w-[90%] max-h-[90%] rounded shadow-2xl"
//               />
//               <button
//                 onClick={() => setZoomed(null)}
//                 className="absolute top-2 right-2 bg-white/80 hover:bg-white p-1 rounded-full"
//               >
//                 <ChevronLeft className="text-black w-6 h-6" />
//               </button>
//             </div>
//           </div>
//         )}
//       </section>

//          {/* work*/}
//       <section className="px-6 py-10 text-center  backdrop-blur">
//         <h2 className="text-3xl font-bold mb-8">ผลงาน</h2>
//         <div className="relative max-w-xl mx-auto overflow-hidden rounded-xl shadow-lg">
//           <img
//             src={certificates[currentIndex]}
//             alt={`เกียรติบัตร ${currentIndex + 1}`}
//             className="w-full object-contain max-h-[500px] cursor-pointer"
//             onClick={() => setZoomed(certificates[currentIndex])}
//           />
//           <button
//             onClick={prev}
//             className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
//           >
//             <ChevronLeft />
//           </button>
//           <button
//             onClick={next}
//             className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
//           >
//             <ChevronRight />
//           </button>
//           <div className="absolute bottom-2 right-2 bg-white/80 px-2 py-1 rounded text-sm">
//             {currentIndex + 1}/{certificates.length}
//           </div>
//         </div>

//         {zoomed && (
//           <div
//             onClick={() => setZoomed(null)}
//             className="fixed inset-0 bg-black/80 backdrop-blur flex items-center justify-center z-50 cursor-zoom-out"
//           >
//             <div className="relative">
//               <img
//                 src={zoomed}
//                 alt="ขยาย"
//                 className="max-w-[90%] max-h-[90%] rounded shadow-2xl"
//               />
//               <button
//                 onClick={() => setZoomed(null)}
//                 className="absolute top-2 right-2 bg-white/80 hover:bg-white p-1 rounded-full"
//               >
//                 <ChevronLeft className="text-black w-6 h-6" />
//               </button>
//             </div>
//           </div>
//         )}
//       </section>

//       {/* Expected Salary */}
//       <section className="min-h-[40vh] flex flex-col items-center justify-center text-center px-6  backdrop-blur-sm">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="max-w-2xl p-6 rounded-xl border border-white/20 shadow-lg bg-gradient-to-br from-purple-900/60 to-indigo-800/60"
//         >
//           <div className="flex items-center justify-center gap-2 mb-4">
//             <DollarSign className="text-white" size={28} />
//             <h2 className="text-3xl font-bold text-white">รายได้ที่ต้องการ</h2>
//           </div>
//           <p className="text-xl text-white/90">
//             ประมาณ <span className="text-white font-semibold">50,000 - 80,000</span> บาท/เดือน<br />
//             หรือแล้วแต่ความเหมาะสมกับลักษณะงานและความรับผิดชอบ
//           </p>
//         </motion.div>
//       </section>

//       {/* Contact */}
//       <section className="px-6 py-10 text-center">
//         <h2 className="text-3xl font-bold mb-4">ติดต่อเรา</h2>
//         <p className="mb-4">อยากร่วมงานหรือคุยเล่นก็ติดต่อมาได้เลย</p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-3xl mx-auto">
//           <a href="mailto:your@email.com" className="flex items-center gap-2 justify-center bg-gray-800 text-white px-5 py-3 rounded hover:bg-gray-700">
//             <Mail size={18} /> Email
//           </a>
//           <a href="https://github.com/yourusername" target="_blank" className="flex items-center gap-2 justify-center bg-gray-800 text-white px-5 py-3 rounded hover:bg-gray-700">
//             <Github size={18} /> GitHub
//           </a>
//           <a href="https://www.linkedin.com/in/yourprofile" target="_blank" className="flex items-center gap-2 justify-center bg-blue-700 text-white px-5 py-3 rounded hover:bg-blue-600">
//             <Linkedin size={18} /> LinkedIn
//           </a>
//           <a href="https://line.me/ti/p/yourlineid" target="_blank" className="flex items-center gap-2 justify-center bg-green-500 text-white px-5 py-3 rounded hover:bg-green-600">
//             <MessageCircle size={18} /> LINE
//           </a>
//           <a href="tel:+66812345678" className="flex items-center gap-2 justify-center bg-yellow-500 text-white px-5 py-3 rounded hover:bg-yellow-600">
//             <Phone size={18} /> โทรหาเรา
//           </a>
//         </div>
//       </section>

//       <footer className="text-center text-sm text-white/60 py-4">
//         © 2025 ม่อน. All rights reserved.
//       </footer>
//     </main>
//   );
// }


// "use client";

// import React from "react";
// import { Hero } from "@/app/components/profile/Hero";
// import { Section } from "@/app/components/ui/Section";
// import { LanguageBadges } from "@/app/components/profile/LanguageBadges";
// import { TechStacks } from "@/app/components/profile/TechStacks";
// import { Skills } from "@/app/components/profile/Skills";
// import { Experience } from "@/app/components/profile/Experience";
// import { MediaCarousel } from "@/app/components/profile/MediaCarousel";
// import ExpectedSalary from "@/app/components/profile/ExpectedSalary";
// import { Contact } from "@/app/components/profile/Contact";
// import StickyProfileTabs from "@/app/components/profile/StickyProfileTabs";
// import {
//   CERTIFICATES,
//   WORKS,
//   HERO,
//   LANGUAGES,
//   STACKS,
//   SKILLS,
//   EXPERIENCES,
//   CONTACTS,
//   SALARY,
//   PROFILE_NAV_ITEMS,
// } from "@/app/lib/profileData";

// export default function FancyProfilePage() {
//   return (
//     <main className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-blue-200 via-pink-200 to-purple-100 text-gray-800">
//       <StickyProfileTabs items={PROFILE_NAV_ITEMS} />

//       <div className="mx-auto flex w-full max-w-7xl flex-col px-4 pb-8 sm:px-6 lg:px-8 xl:px-10">
//         <section
//           id="hero"
//           className="scroll-mt-11"
//         >
//           <Hero data={HERO} />
//         </section>

//         <Section
//           id="languages"
//           title="ภาษา"
//           subtitle="ทำงานได้จริงทั้งไทยและอังกฤษ"
//         >
//           <LanguageBadges items={LANGUAGES} />
//         </Section>

//         <Section
//           id="stacks"
//           title="ภาษาและเครื่องมือที่ม่อนใช้"
//           subtitle="จัดกลุ่ม Frontend / Backend / Mobile / Database / DevTools"
//         >
//           <TechStacks stacks={STACKS} />
//         </Section>

//         <Section
//           id="skills"
//           title="ทักษะของม่อน"
//           subtitle="เน้นลงมือทำ ใช้งานจริงในโปรเจกต์"
//         >
//           <Skills items={SKILLS} />
//         </Section>

//         <Section
//           id="experience"
//           title="ประวัติการทำงาน"
//           subtitle="ประสบการณ์ที่จับต้องได้"
//         >
//           <Experience items={EXPERIENCES} />
//         </Section>

//         <Section
//           id="certs"
//           title="เกียรติบัตร"
//           subtitle="สิ่งที่สะสมจากการเรียนรู้"
//         >
//           <MediaCarousel
//             items={CERTIFICATES}
//             aspectClass="max-h-[500px]"
//             itemAltPrefix="เกียรติบัตร"
//           />
//         </Section>

//         <Section
//           id="works"
//           title="ผลงาน"
//           subtitle="ตัวอย่างงานที่เคยทำ/ทดลอง"
//         >
//           <MediaCarousel
//             items={WORKS}
//             aspectClass="max-h-[500px]"
//             itemAltPrefix="ผลงาน"
//           />
//         </Section>

//         <section
//           id="salary"
//           className="scroll-mt-31 py-6 sm:py-8 lg:py-10"
//         >
//           <ExpectedSalary data={SALARY} />
//         </section>

//         <Section
//           id="contact"
//           title="ติดต่อเรา"
//           subtitle="อยากร่วมงานหรือคุยงานทักมาได้เลย"
//         >
//           <Contact items={CONTACTS} />
//         </Section>

//         <footer className="py-6 text-center text-sm text-white/80">
//           © 2025 ม่อน. All rights reserved.
//         </footer>
//       </div>
//     </main>
//   );
// }
"use client";

import React from "react";
import type { ReactNode } from "react";
import Link from "next/link";

import { Hero } from "@/app/components/profile/Hero";
import { LanguageBadges } from "@/app/components/profile/LanguageBadges";
import { TechStacks } from "@/app/components/profile/TechStacks";
import { Skills } from "@/app/components/profile/Skills";
import { Experience } from "@/app/components/profile/Experience";
import { MediaCarousel } from "@/app/components/profile/MediaCarousel";
import ExpectedSalary from "@/app/components/profile/ExpectedSalary";
import { Contact } from "@/app/components/profile/Contact";
import StickyProfileTabs from "@/app/components/profile/StickyProfileTabs";
import CertificateGallery from "@/app/components/profile/CertificateGallery";
import { CERTIFICATE_FILES } from "@/app/lib/generatedCertificates";

import {
  WORKS,
  HERO,
  LANGUAGES,
  STACKS,
  SKILLS,
  EXPERIENCES,
  CONTACTS,
  SALARY,
  PROFILE_NAV_ITEMS,
} from "@/app/lib/profileData";

type ProfileStageProps = {
  id: string;
  no: string;
  title: string;
  subtitle: string;
  badge?: string;
  children: ReactNode;
};

function BackgroundAurora() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-pink-100 to-violet-200" />

      <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(to_right,rgba(255,255,255,0.65)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.65)_1px,transparent_1px)] [background-size:54px_54px]" />

      <div className="absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-blue-400/40 blur-3xl" />
      <div className="absolute -right-44 top-52 h-[520px] w-[520px] rounded-full bg-pink-400/40 blur-3xl" />
      <div className="absolute bottom-10 left-[20%] h-[480px] w-[480px] rounded-full bg-purple-400/35 blur-3xl" />
      <div className="absolute bottom-[-220px] right-[8%] h-[560px] w-[560px] rounded-full bg-cyan-300/35 blur-3xl" />

      <div className="absolute left-1/2 top-0 h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-white/45 blur-3xl" />
    </div>
  );
}

function FloatingIntroCards() {
  return (
    <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-3">
      <div className="group overflow-hidden rounded-3xl border border-white/70 bg-white/45 p-4 shadow-xl shadow-blue-500/10 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/60">
        <div className="mb-3 h-1.5 w-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
        <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-700">
          Full Stack
        </p>
        <p className="mt-1 text-sm font-bold text-slate-700">
          Frontend / Backend / Database
        </p>
      </div>

      <div className="group overflow-hidden rounded-3xl border border-white/70 bg-white/45 p-4 shadow-xl shadow-pink-500/10 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/60">
        <div className="mb-3 h-1.5 w-16 rounded-full bg-gradient-to-r from-pink-500 to-rose-400" />
        <p className="text-xs font-black uppercase tracking-[0.25em] text-pink-700">
          Real Project
        </p>
        <p className="mt-1 text-sm font-bold text-slate-700">
          ทำงานจริง แก้ปัญหาจริง
        </p>
      </div>

      <div className="group overflow-hidden rounded-3xl border border-white/70 bg-white/45 p-4 shadow-xl shadow-purple-500/10 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/60">
        <div className="mb-3 h-1.5 w-16 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-400" />
        <p className="text-xs font-black uppercase tracking-[0.25em] text-purple-700">
          Creative Builder
        </p>
        <p className="mt-1 text-sm font-bold text-slate-700">
          เว็บ แอป เกม และระบบใช้เอง
        </p>
      </div>
    </div>
  );
}

function ProfileStage({
  id,
  no,
  title,
  subtitle,
  badge = "PROFILE SECTION",
  children,
}: ProfileStageProps) {
  return (
    <section id={id} className="scroll-mt-24 py-6 sm:py-8 lg:py-10">
      <div className="group relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/45 shadow-2xl shadow-slate-900/10 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/60 hover:shadow-purple-500/20">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500" />

        <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-blue-400/20 blur-3xl transition group-hover:bg-blue-400/30" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-pink-400/20 blur-3xl transition group-hover:bg-pink-400/30" />

        <div className="relative p-4 sm:p-6 lg:p-8">
          <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/55 px-3 py-1.5 text-xs font-black text-slate-600 shadow-sm backdrop-blur">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-950 text-[11px] text-white">
                  {no}
                </span>
                <span>{badge}</span>
              </div>

              <h2 className="bg-gradient-to-r from-slate-950 via-purple-800 to-pink-700 bg-clip-text text-2xl font-black tracking-tight text-transparent sm:text-3xl lg:text-4xl">
                {title}
              </h2>

              <p className="mt-2 max-w-3xl text-sm font-semibold leading-6 text-slate-600 sm:text-base">
                {subtitle}
              </p>
            </div>

            <div className="hidden rounded-full border border-white/70 bg-white/45 px-4 py-2 text-xs font-black text-slate-500 shadow-sm backdrop-blur lg:block">
              Scroll to explore
            </div>
          </div>

          <div className="relative">{children}</div>
        </div>
      </div>
    </section>
  );
}

function HeroStage() {
  return (
    <section id="hero" className="scroll-mt-24 pt-6 sm:pt-8 lg:pt-10">
      <div className="relative overflow-hidden rounded-[2.4rem] border border-white/75 bg-white/35 shadow-2xl shadow-blue-900/10 backdrop-blur-xl">
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500" />

        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-400/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-pink-400/25 blur-3xl" />
        <div className="pointer-events-none absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-white/25 blur-3xl" />

        <div className="relative p-3 sm:p-5 lg:p-7">
          <div className="mb-4 inline-flex rounded-full border border-white/70 bg-white/45 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-slate-600 shadow-sm backdrop-blur">
            Portfolio Showcase
          </div>

          <Hero data={HERO} />

          <FloatingIntroCards />
        </div>
      </div>
    </section>
  );
}

function CertificateStage() {
  return (
    <ProfileStage
      id="certs"
      no="05"
      title="เกียรติบัตร"
      subtitle="แยกคลังเกียรติบัตร PDF ไว้อีกหน้า เพราะมีจำนวนมาก โหลดเร็วกว่า ค้นหาง่ายกว่า และไม่ทำให้หน้าแรกหนักเกินไป"
    >
      <div className="space-y-4">
        <div className="rounded-[2rem] border border-white/70 bg-white/45 p-5 shadow-xl shadow-slate-900/10 backdrop-blur-xl">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="mb-2 inline-flex rounded-full bg-slate-950 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-white">
                Certificate Archive
              </div>

              <h3 className="text-xl font-black text-slate-900">
                คลังเกียรติบัตร PDF
              </h3>

              <p className="mt-1 text-sm font-semibold leading-6 text-slate-600">
                ตอนนี้มีไฟล์เกียรติบัตรทั้งหมด{" "}
                <span className="font-black text-slate-950">
                  {CERTIFICATE_FILES.length}
                </span>{" "}
                ไฟล์ ระบบจะอ่านจากโฟลเดอร์ public/certificates อัตโนมัติ
              </p>
            </div>

            <Link
              href="/certificates"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              ดูเกียรติบัตรทั้งหมด
            </Link>
          </div>
        </div>

        <CertificateGallery
          items={CERTIFICATE_FILES}
          compact
          showHeader={false}
        />
      </div>
    </ProfileStage>
  );
}

function SalaryStage() {
  return (
    <section id="salary" className="scroll-mt-24 py-6 sm:py-8 lg:py-10">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-gradient-to-br from-slate-950 via-purple-950 to-pink-950 p-1 shadow-2xl shadow-purple-900/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.45),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.45),transparent_38%)]" />

        <div className="relative overflow-hidden rounded-[1.8rem] bg-white/10 p-4 backdrop-blur-xl sm:p-6 lg:p-8">
          <div className="mb-6">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-black text-white/80">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[11px] text-slate-950">
                08
              </span>
              <span>EXPECTED VALUE</span>
            </div>

            <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
              เงินเดือนที่คาดหวัง
            </h2>

            <p className="mt-2 max-w-3xl text-sm font-semibold leading-6 text-white/70 sm:text-base">
              ส่วนนี้ทำให้ข้อเสนอของม่อนดูจริงจังขึ้น ไม่ใช่แค่ตัวเลขลอย ๆ
            </p>
          </div>

          <ExpectedSalary data={SALARY} />
        </div>
      </div>
    </section>
  );
}

export default function FancyProfilePage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden text-slate-800">
      <BackgroundAurora />

      <StickyProfileTabs items={PROFILE_NAV_ITEMS} />

      <div className="mx-auto flex w-full max-w-7xl flex-col px-4 pb-8 sm:px-6 lg:px-8 xl:px-10">
        <HeroStage />

        <ProfileStage
          id="languages"
          no="01"
          title="ภาษา"
          subtitle="ทำงานได้จริงทั้งไทยและอังกฤษ พร้อมใช้สื่อสาร อ่านเอกสาร และต่อยอดงานโปรเจกต์"
        >
          <LanguageBadges items={LANGUAGES} />
        </ProfileStage>

        <ProfileStage
          id="stacks"
          no="02"
          title="ภาษาและเครื่องมือที่ม่อนใช้"
          subtitle="จัดกลุ่ม Frontend / Backend / Mobile / Database / DevTools ให้ดูเหมือนแผงอาวุธของนักพัฒนา"
        >
          <TechStacks stacks={STACKS} />
        </ProfileStage>

        <ProfileStage
          id="skills"
          no="03"
          title="ทักษะของม่อน"
          subtitle="เน้นลงมือทำ ใช้งานจริงในโปรเจกต์จริง ไม่ใช่แค่เขียนใส่ให้ดูเท่แล้วปล่อยฝุ่นจับ"
        >
          <Skills items={SKILLS} />
        </ProfileStage>

        <ProfileStage
          id="experience"
          no="04"
          title="ประวัติการทำงาน"
          subtitle="เล่าเส้นทางการทำงานให้ดูเป็นมืออาชีพ และช่วยให้คนอ่านจับภาพความสามารถได้เร็ว"
        >
          <Experience items={EXPERIENCES} />
        </ProfileStage>

        <CertificateStage />

        <ProfileStage
          id="works"
          no="06"
          title="ผลงาน"
          subtitle="รวมตัวอย่างงานที่เคยทำ ทดลอง และพัฒนา เพื่อให้คนดูเห็นของจริงทันที"
        >
          <MediaCarousel
            items={WORKS}
            aspectClass="max-h-[500px]"
            itemAltPrefix="ผลงาน"
          />
        </ProfileStage>

        <SalaryStage />

        <ProfileStage
          id="contact"
          no="09"
          title="ติดต่อเรา"
          subtitle="อยากร่วมงาน คุยงาน หรือดูโปรเจกต์เพิ่มเติม ทักมาได้เลย"
          badge="LET'S WORK TOGETHER"
        >
          <Contact items={CONTACTS} />
        </ProfileStage>

        <footer className="py-8 text-center">
          <div className="mx-auto inline-flex rounded-full border border-white/70 bg-white/35 px-5 py-3 text-sm font-bold text-slate-600 shadow-lg backdrop-blur-xl">
            © 2025 ม่อน. All rights reserved.
          </div>
        </footer>
      </div>
    </main>
  );
}