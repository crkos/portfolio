import {ArrowDown, Github, Linkedin, Twitter} from "lucide-react";
import Image from "next/image";
import Arrow from "@/components/Arrow";

const InitialLanding = () => {
    return (

            <div className="px-4 sm:px-6 lg:px-8 lg:ml-0 relative pb-6">
                <div className="flex min-h-screen flex-col-reverse items-center justify-center text-center md:flex-row">
                    <div className="flex md:w-1/2 items-ceter justify-center w-full">
                        <div className="flex flex-col items-center justify-center">
                            <p className="font-mono leading-10 text-xl  sm:text-2xl md:text-3xl lg:text-5xl">
                                {/*Se agregan espacios de js para asegurar en varios navegadores los espacios*/}
                                Hola! Mi nombre es{" "}
                                <span className="font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                                            Jordan Higuera
                                            </span>{" "}
                                y soy un desarrollador de software de Baja California Sur
                            </p>
                            <div className="flex gap-x-6 flex-1">
                                <a href="https://github.com/crkos" target="_blank" rel="noopener" className="hover:scale-105 transition duration-150 ease-in-out"><Github size={30} className="mt-1 md:mt-8" aria-label="Enlace a github"/></a>
                                <a href="https://twitter.com/HigueraJordan" target="_blank" rel="noopener" className="hover:scale-105 transition duration-150 ease-in-out"><Twitter size={30} className="mt-1 md:mt-8" aria-label="Enlace a twitter"/></a>
                                <a href="https://www.linkedin.com/in/jordan-higuera-higuera-0a3585237" target="_blank" rel="noopener" className="hover:scale-105 transition duration-150 ease-in-out"><Linkedin size={30} className="mt-1 md:mt-8" aria-label="Enlace a linkedin"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4 md:mb-10 w-full md:w-1/2">
                        <Image
                            src="/LandingPageImage.svg"
                            alt="Landing image"
                            width={600}
                            height={600}
                            loading="eager"
                            decoding="sync"
                            priority
                            className="w-auto h-auto"
                        />
                    </div>
                </div>
                <Arrow />
            </div>

    );
};

export default InitialLanding;