import {Github, Linkedin, Twitter} from "lucide-react";

const Footer = () => {
    return (
        <footer className="border-t">
            <div className="mx-auto py-10 flex-col flex items-center justify-center gap-y-2">
                <p className="text-center text-xs">&copy; 2023 Jordan Higuera Higuera. All rights reserved</p>
                <div className="flex gap-x-6 flex-1">
                    <a href="https://github.com/crkos" target="_blank" rel="noopener" className="hover:scale-105 transition duration-150 ease-in-out"><Github size={30} className="mt-1 md:mt-8" aria-label="Enlace a github"/></a>
                    <a href="https://twitter.com/HigueraJordan" target="_blank" rel="noopener" className="hover:scale-105 transition duration-150 ease-in-out"><Twitter size={30} className="mt-1 md:mt-8" aria-label="Enlace a twitter"/></a>
                    <a href="https://www.linkedin.com/in/jordan-higuera-higuera-0a3585237" target="_blank" rel="noopener" className="hover:scale-105 transition duration-150 ease-in-out"><Linkedin size={30} className="mt-1 md:mt-8" aria-label="Enlace a linkedin"/></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;