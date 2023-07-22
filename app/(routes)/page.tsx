import Container from "@/components/Container";
import InitialLanding from "@/components/InitialLanding";
import About from "@/components/About";
import ProjectList from "@/components/ProjectList";

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
            </Container>
        </main>
    );
}
