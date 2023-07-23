import {proyectos} from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import {ArrowRight} from "lucide-react";


const ProjectList = () => {
    return (
        <div  className="mb-10 flex flex-col items-center justify-center md:mb-0 md:h-screen ">
            <div className="mb-10 flex w-full flex-col items-center justify-center lg:mb-0 pb-2 lg:pb-8">
                <h2 className="font-semibold font-mono text-purple-500 text-2xl lg:text-4xl">Proyectos</h2>
                <span className="w-20 h-1 bg-gradient-to-r from-pink-500 to-violet-500 lg:w-1/12"></span>
            </div>
            <div className="mb-10 grid grid-cols-1 content-center items-center sm:grid-cols-2 lg:grid-cols-3 px-4 gap-x-2 gap-y-4 gap-x-4">
                {proyectos.map((proyecto) => (
                    <ProjectCard key={proyecto.title} title={proyecto.title} tags={proyecto.tags} img={proyecto.img} link={proyecto.link} gitLink={proyecto.gitLink}/>
                ))}
            </div>
            <div className="flex items-center justify-center text-xl gap-x-2 md:text-2xl">
                <a href="https://github.com/crkos" target="_blank" rel="noopener">Ver otros proyectos</a>
                <ArrowRight />
            </div>
            <hr className="text-2xl"/>

        </div>
    );
};

export default ProjectList;