"use client"
import React from 'react';
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/Form";
import {Input} from "@/components/ui/Input";
import {Textarea} from "@/components/ui/Textarea";
import {Button} from "@/components/ui/Button";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {contactFormSchema, contactFormValues} from "@/lib/validators/contactForm";
import {useMutation} from "@tanstack/react-query";
import axios, {AxiosError} from "axios";
import {toast} from "@/components/ui/use-toast";

const ContactForm = () => {

    const form = useForm<contactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            message: ""
        }
    });

    const {mutate: sendEmail, isLoading} = useMutation({
       mutationFn: async ({name, message, email}: contactFormValues) => {
           const payload: contactFormValues = {
               name,
               message,
               email
           };
           const {data} = await axios.post("/api/email", payload);

           return data;
       },
        onError: (error) => {
           if(error instanceof AxiosError) {
               if(error.response?.status === 422) {
                   return toast({
                       title: "Falta información.",
                       description: "Introduce los datos correctos en la forma.",
                       variant: "destructive"
                   });
               }
           }
           toast({
               title: "Hubo un error.",
               description: "Hubo algun error al enviar el mensaje",
               variant: "destructive"
           });
        },
        onSuccess: () => {
           toast({
               description: "Se ha enviado el mensaje."
           })
        }
    });

    const {handleSubmit, control, register} = form;

    return (
        <div className="flex items-center justify-center py-24">
            <div className="flex flex-col justify-center items-center lg:flex-row lg:space-x-24 ">
                <div className="flex flex-col justify-center items-center mb-10 lg:w-1/2 px-6">
                    <h2 className="text-3xl mb-6 font-mono md:text-4xl lg:text-5xl">Contactame</h2>
                    <p className="text-lg text-center">¿Quieres contactarme? Me gustartia saber, porfavor llena la forma y respondere lo mas pronto posible</p>
                </div>
                <div className="flex space-y-6 lg:space-y-0 lg:w-1/2 w-full px-6">
                    <Form {...form} >
                        <form onSubmit={handleSubmit((e) => sendEmail(e))} className="w-full space-y-6">
                            <FormField control={control} name="name" render={({field}) => (
                                <FormItem>
                                    <FormControl>
                                        <Input {...field} placeholder="Nombre..." className="w-full" {...register("name")}/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <FormField name="email" control={control} render={({field}) => (
                                <FormItem>
                                    <FormControl>
                                        <Input {...field} placeholder="Email..." className="w-full" {...register("email")}/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <FormField name="message" control={control} render={({field}) => (
                                <FormItem>
                                    <Textarea {...field} placeholder="Mensaje" className="w-full" {...register("message")}/>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <Button type="submit" variant="outline" className="w-full" disabled={isLoading}>Enviar mensaje</Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;