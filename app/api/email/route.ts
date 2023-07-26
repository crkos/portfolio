import {z} from "zod";
import {contactFormSchema} from "@/lib/validators/contactForm";
import * as SibApiV3Sdk from "@sendinblue/client";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

        apiInstance.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY!);

        let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

        const { name, message, email } = contactFormSchema.parse(body);

        sendSmtpEmail.subject = "Contacto Portafolio";
        sendSmtpEmail.htmlContent = `<html><body><h1>${name}</h1><h2>${email}</h2><p>${message}</p></body></html>`;
        sendSmtpEmail.sender = {
            name: "Jordan Higuera Higuera",
            email: "noreply@jordanh.live"
        };
        sendSmtpEmail.to = [{
            email: "jordan_higuera@hotmail.com",
            name: "Jordan Higuera Higuera"
        }];

        await apiInstance.sendTransacEmail(sendSmtpEmail);


        return new Response("OK");

    } catch (err){
        if(err instanceof z.ZodError) {
            return new Response("Datos enviados invalidos", {status: 422});
        }
        return new Response("No se ah podido enviar el email, trata mas tarde", {status: 500});
    }
}