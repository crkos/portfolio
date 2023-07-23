import {z} from "zod";

export const contactFormSchema = z.object({
    name: z.string().min(3, "El nombre debe tener al menos 3 caracteres").max(50, "El nombre no debe de tener mas de 50 caracteres"),
    email: z.string().email("Email invalido"),
    message: z.string().min(3, "El mensaje debe tener al menos 3 caracteres")
});


export type contactFormValues = z.infer<typeof contactFormSchema>