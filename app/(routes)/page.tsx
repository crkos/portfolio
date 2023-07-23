import Container from "@/components/Container";
import InitialLanding from "@/components/InitialLanding";
import About from "@/components/About";
import ProjectList from "@/components/ProjectList";

// TODO Añadir la forma de contacto abajo y conectarlo con algun sistema de correo

export default function Home() {

    return (
        <main>
            <Container>
                <section id="initial">
                    <InitialLanding />
                </section>
                <section id="about">
                    <About />
                </section>
                <section id="projects" >
                    <ProjectList />
                </section>
                <hr className="mb-10"/>
                <section id="contact" className="w-full flex justify-center">
                    <h2 className="text-3xl">Contactame</h2>
                </section>
            </Container>
        </main>
    );
}
