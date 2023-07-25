import {z} from "zod";
import {contactFormSchema} from "@/lib/validators/contactForm";
import { MailtrapClient } from "mailtrap";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const SENDER_EMAIL: string = "noreply@jordan.live";
        const RECIPIENT_EMAIL: string = "jordan_higuera@gmail.com";

        const { name, message, email } = contactFormSchema.parse(body);

        const client = new MailtrapClient({token: process.env.NODEMAILER_API_TOKEN!});

        const sender = { name: "Mailtrap Test", email: SENDER_EMAIL };

        await client.send({
            from: sender,
            to: [{email: RECIPIENT_EMAIL}],
            subject: `Portfolio Contact - ${name}`,
            text: `${message} - Email: ${email}`
        });

        return new Response("OK");

    } catch (err){
        if(err instanceof z.ZodError) {
            return new Response("Datos enviados invalidos", {status: 422});
        }
        return new Response("No se ah podido enviar el email, trata mas tarde", {status: 500});
    }
}