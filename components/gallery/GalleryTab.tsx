
import {FC} from "react";
import Image from "next/image"
import { Tab } from "@headlessui/react"
import { cn } from "@/lib/utils"
import {Images} from "@/types/types";

interface GalleryTabProps {
    image: Images
}

const GalleryTab: FC<GalleryTabProps> = ({image}) => {
    return (
        <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
            {({selected}) => (
                <div>
                    <span className="absolute h-full w-full aspect-video inset-0 overflow-hidden rounded-md">
                        <Image src={image.url} alt="Proyecto imagen" fill className="object-cover object-center"/>
                    </span>
                    <span className={cn("absolute inset-0 rounded-md ring-2 ring-offset-2", selected ? "ring-black" : "ring-transparent")}/>
                </div>
            )}
        </Tab>
    );
};

export default GalleryTab;