import { Tab } from "@headlessui/react"
import {FC} from "react";

import Image from "next/image";
import GalleryTab from "@/components/gallery/GalleryTab";
import {Images} from "@/types/types";

interface GalleryProps {
    images: Images[]
}

const Gallery: FC<GalleryProps> = ({images}) => {
    return (
        <Tab.Group as="div" className="flex flex-col-reverse">
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6">
                    {images.map((image) => (
                        <GalleryTab key={image.id} image={image}/>
                    ))}
                </Tab.List>
            </div>
            <Tab.Panels className="w-full">
                {images.map((image) => (
                    <Tab.Panel key={image.id}>
                        <div className="aspect-video relative w-full sm:rounded-lg overflow-hidden ">
                            <Image src={image.url} alt="Image" fill className="object-contain"/>
                        </div>
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    );
};

export default Gallery;