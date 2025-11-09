import { z } from "zod";

export const registerSchema = z.object({
  nama: z.string().min(3, "Nama harus minimal 3 karakter"),
  email: z.string().email("Format email tidak valid"),
  password: z.string().min(6, "Password minimal 6 karakter"),
  Password2: z
    .string()
    .min(6, "Konfirmasi password minimal 6 karakter"),
}).refine((data) => data.password === data.Password2, {
  message: "Password dan konfirmasi tidak sama",
  path: ["konfirmasiPassword"],
});
