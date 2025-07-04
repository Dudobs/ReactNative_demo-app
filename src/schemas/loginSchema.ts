import { z } from "zod";

export const loginSchema = z.object({
	email: z.string().min(1, "O e-mail é obrigatório").email("E-mail inválido"),
	senha: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
