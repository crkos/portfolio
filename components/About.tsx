const About = () => {
    return (
        <div className="mb-10 flex flex-col items-center justify-center lg:mb-0 lg:h-screen lg:flex-row">
            <div className="mb-10 flex w-full flex-col items-center justify-center lg:mb-0 lg:w-1/2">
                <h2 className="font-semibold font-mono text-purple-500 text-2xl lg:text-4xl">Acerca de mi</h2>
                <span className="w-20 h-1 bg-gradient-to-r from-pink-500 to-violet-500 lg:w-1/4"></span>
            </div>
            <div className="w-full px-4 text-justify lg:w-1/2">
                <p className="mb-2 font-mono text-justify text-base sm:text-xl md:text-2xl lg:text-3xl">
                    Desarrollador de aplicaciones y sitios web, y con un gran interes por otras tecnologias. Experiencia en front-end y backend para el desarrollo de aplicaciones fullstack, de La Paz, Baja California Sur, México.
                </p>
            </div>
        </div>
    );
};

export default About;