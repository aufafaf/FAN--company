/**
 * Contact Form Validation Schema
 * CV Mandiri Multi Usaha
 */

import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Nama harus minimal 2 karakter" })
    .max(100, { message: "Nama maksimal 100 karakter" }),

  email: z.string().email({ message: "Format email tidak valid" }).toLowerCase(),

  phone: z
    .string()
    .min(10, { message: "Nomor telepon harus minimal 10 digit" })
    .max(15, { message: "Nomor telepon maksimal 15 digit" })
    .regex(/^[0-9+\-\s()]+$/, { message: "Format nomor telepon tidak valid" }),

  subject: z
    .string()
    .min(5, { message: "Subjek harus minimal 5 karakter" })
    .max(200, { message: "Subjek maksimal 200 karakter" }),

  message: z
    .string()
    .min(10, { message: "Pesan harus minimal 10 karakter" })
    .max(2000, { message: "Pesan maksimal 2000 karakter" }),

  service: z.string().optional(),
});

export type ContactFormSchema = z.infer<typeof contactSchema>;
