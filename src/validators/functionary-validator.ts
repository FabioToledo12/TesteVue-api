import { z } from "zod";

export const functionarySchema = z.object({
	cpf: z
		.string()
		.length(14, "CPF deve ter 14 caracteres no formato xxx.xxx.xxx-xx"),
	name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
	email: z.string().email("Email inválido"),
	shirtSize: z.enum(["PP", "P", "M", "G", "GG", "XG"], {
		errorMap: () => ({ message: "Tamanho de camiseta inválido" }),
	}),
	shoeSize: z
		.number()
		.int()
		.min(34, "O tamanho do calçado deve ser no mínimo 34")
		.max(48, "O tamanho do calçado deve ser no máximo 48"),
});
