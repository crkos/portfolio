"use client"
import React, {FC, MouseEventHandler} from 'react';
import Image from "next/image";
import {Projects} from "@/types/types";
import {Expand, Github} from "lucide-react";
import IconButton from "@/components/ui/IconButton";
import usePreviewModal from "@/hooks/UsePreviewModal";


const ProjectCard: FC<Projects> = ({title, tags, img, link, gitLink}) => {
    const previewModal = usePreviewModal();

    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        previewModal.onOpen(img)
    }


    return (
        <section className="p-1 group cursor-pointer rounded-xl shadow-md h-full ">
            <article className="rounded-xl bg-white p-3 duration-150 hover:scale-105 hover:transform hover:shadow-xl dark:text-black relative h-full">
                <div className="relative flex items-end overflow-hidden rounded-xl aspect-video">
                    <a href={link} target="_blank" rel="noopener"><Image src={img[0].url} alt="Ecommerce store" decoding="async" loading="lazy" height={600} width={600} quality={75} fetchPriority="low"/></a>
                    <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-2">
                        <div className="flex gap-x-6 justify-end">
                            <IconButton icon={<Expand size={20} className="text-gray-600" aria-label="Abrir galeria"/>} onClick={onPreview} />
                            <a href={gitLink}  target="_blank" rel="noopener"><IconButton icon={<Github size={20} className="text-gray-600" aria-label="Abrir galeria"/>}/></a>
                        </div>
                    </div>
                </div>
                <div className="mt-1 p-2">
                    <h3 className="text-xl text-purple-500 lg:text-2xl">{title}</h3>
                    <div className="flex mt-2 flex-wrap justify-between w-full">
                        {tags.map((tag) => (
                            <span key={tag} className="py-2 lg:py-2 text-xs sm:text-base">{tag}</span>
                        ))}
                    </div>
                </div>
            </article>
        </section>
    );
};

export default ProjectCard;