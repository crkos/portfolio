import {z} from "zod";
import {contactFormSchema} from "@/lib/validators/contactForm";
const nodemailer = require("nodemailer")

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const { name, message, email } = contactFormSchema.parse(body);

        const transport = nodemailer.createTransport({
            host: "live.smtp.mailtrap.io",
            port: 25,
            auth: {
                user: "api",
                pass: "25246877d37ad6db565d7b2e9f903a71"
            }
        });

        const sendMail = async () => {
            const mail = await transport.sendMail({
                from: '"Fred Foo 👻" <jordan@jordan.live>',
                to: "jordan_higuera@hotmail.com",
                subject: "Contacto Portfolio",
                text: `${message}`
            })
        }

        await sendMail();

        return new Response("OK");

    } catch (err){
        if(err instanceof z.ZodError) {
            return new Response("Datos enviados invalidos", {status: 422});
        }
        return new Response("No se ah podido enviar el email, trata mas tarde", {status: 500});
    }
}