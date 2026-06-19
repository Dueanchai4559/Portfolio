/* eslint-disable */
/*
  ไฟล์นี้ถูกสร้างอัตโนมัติจาก scripts/generate-certificates.mjs
  ถ้าจะเพิ่มเกียรติบัตร ให้ใส่ PDF ใน public/certificates แล้วรัน npm run dev ใหม่
*/

export const CERTIFICATE_FILES = [
  {
    "id": "ท-วไป-receipt-p910032476206-69008844148-pdf-1",
    "title": "RECEIPT P910032476206 69008844148",
    "category": "ทั่วไป",
    "folder": "ทั่วไป",
    "fileName": "RECEIPT_P910032476206_69008844148.pdf",
    "url": "/certificates/RECEIPT_P910032476206_69008844148.pdf",
    "extension": "pdf",
    "sizeBytes": 165596
  }
] as const;

export type GeneratedCertificateFile = (typeof CERTIFICATE_FILES)[number];
