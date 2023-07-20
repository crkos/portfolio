import Container from "@/components/Container";
import Image from "next/image";
import {ArrowDown, Github} from "lucide-react";

// TODO: Agregar un modal para abrir la imagen en mas grande

export default function Home() {
    return (
        <main>
            <Container>
                <section>
                    <div className="px-4 ml-4 sm:px-6 lg:px-8 lg:ml-0 relative">
                        <div className="flex h-screen flex-col-reverse items-center justify-center text-center lg:flex-row">
                            <div className="flex md:w-1/2 items-ceter justify-center w-full">
                                <div className="flex flex-col items-center justify-center">
                                    <p className="font-mono leading-10 text-3xl  lg:text-5xl">
                                        {/*Se agregan espacios de js para asegurar en varios navegadores los espacios*/}
                                        Hola! Mi nombre es{" "}
                                        <span className="font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                                        Jordan Higuera
                                        </span>{" "}
                                        y soy un desarrollador de software de Baja California Sur
                                    </p>
                                    <a href="https://github.com/crkos" target="_blank" rel="noopener"><Github size={36} className="mt-10" aria-label="Enlace a github"/></a>
                                </div>
                            </div>
                            <div className="mb-10 w-full md:w-1/2">
                                <Image
                                    src="/LandingPageImage.svg"
                                    alt="Landing image"
                                    width={600}
                                    height={600}
                                    loading="eager"
                                    decoding="async"
                                    priority
                                    className="w-auto h-auto"
                                />
                            </div>
                        </div>
                        <div className="absolute bottom-5 left-0 right-0 flex justify-center pb-10 px-4 animate-bounce">
                            <div className="w-10">
                                <ArrowDown size={32} />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mb-10 flex flex-col items-center justify-center lg:mb-0 lg:h-screen lg:flex-row">
                    <div className="mb-10 flex w-full flex-col items-center justify-center lg:mb-0 lg:w-1/2">
                        <h2 className="font-semibold font-mono text-purple-500 text-2xl lg:text-4xl">Acerca de mi</h2>
                        <span className="w-20 h-1 bg-gradient-to-r from-pink-500 to-violet-500 lg:w-1/4"></span>
                    </div>
                    <div className="w-full px-4 text-justify lg:w-1/2">
                        <p className="mb-2 font-mono lg:text-2xl">
                            Desarrollador de aplicaciones y sitios web, y gran interes por otras tecnologias. Experiencia en front-end y backend para el desarrollo de aplicaciones fullstack, de La Paz, Baja California Sur, México.
                        </p>
                    </div>
                </section>
                <section className="mb-10 flex flex-col items-center justify-center md:mb-0 md:h-screen">
                    <div className="mb-10 flex w-full flex-col items-center justify-center lg:mb-0 pb-12">
                        <h2 className="font-semibold font-mono text-purple-500 text-2xl lg:text-4xl">Proyectos</h2>
                        <span className="w-20 h-1 bg-gradient-to-r from-pink-500 to-violet-500 lg:w-1/12"></span>
                    </div>
                    <div className="mb-10 grid grid-cols-1 content-center items-center sm:grid-cols-2 lg:grid-cols-3 px-4 gap-x-2">
                        <section className="p-1">
                            <article className="rounded-xl bg-white p-3 shadow-lg duration-150 hover:scale-105 hover:transform hover:shadow-xl dark:text-black">
                                <div className="relative flex items-end overflow-hidden rounded-xl">
                                    <Image src="/ecommerce-store.png" alt="Ecommerce store" decoding="async" loading="lazy" width={500} height={500}/>
                                </div>
                                <div className="mt-1 p-2">
                                    <h3 className="text-xl text-purple-500 lg:text-2xl">Store Ecommerce</h3>
                                    <div className="flex mt-2 flex-wrap justify-between w-2/3">
                                        <span className="py-2 lg:py-4 text-xs sm:text-base">#typescript</span>
                                        <span className="py-2 lg:py-4 text-xs sm:text-base">#headlessui</span>
                                        <span className="py-2 lg:py-4 text-xs sm:text-base">#react</span>
                                        <span className="py-2 lg:py-4 text-xs sm:text-base">#tailwindcss</span>
                                    </div>
                                </div>
                            </article>
                        </section>
                        <section className="p-1">
                            <article className="rounded-xl bg-white p-3 shadow-lg duration-150 hover:scale-105 hover:transform hover:shadow-xl dark:text-black">
                                <div className="relative flex items-end overflow-hidden rounded-xl">
                                    <Image src="/ecommerce-admin.png" alt="Ecommerce store" decoding="async" loading="lazy" width={500} height={500}/>
                                </div>
                                <div className="mt-1 p-2">
                                    <h3 className="text-xl text-purple-500 lg:text-2xl">Store Admin</h3>
                                    <div className="flex mt-2 flex-wrap justify-between w-2/3">
                                        <span className="py-2 lg:py-4 text-xs sm:text-base">#typescript</span>
                                        <span className="py-2 lg:py-4 text-xs sm:text-base">#shadcn</span>
                                        <span className="py-2 lg:py-4 text-xs sm:text-base">#react</span>
                                        <span className="py-2 lg:py-4 text-xs sm:text-base">#tailwindcss</span>
                                        <span className="py-2 lg:py-4 text-xs sm:text-base">#stripe</span>
                                        <span className="py-2 lg:py-4 text-xs sm:text-base">#clerk</span>
                                    </div>
                                </div>
                            </article>
                        </section>
                    </div>
                </section>
            </Container>
        </main>
    );
}
