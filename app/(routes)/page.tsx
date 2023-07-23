import Container from "@/components/Container";
import InitialLanding from "@/components/InitialLanding";
import About from "@/components/About";
import ProjectList from "@/components/ProjectList";
import ContactForm from "@/components/ContactForm";

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
                <hr />
                <section id="contact">
                    <ContactForm />
                </section>
            </Container>
        </main>
    );
}
