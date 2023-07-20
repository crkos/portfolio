import React from 'react';
import Container from "@/components/Container";
import Link from "next/link";
import {ChevronRightSquare} from "lucide-react";
import NavContent from "@/components/NavContent";

const NavBar = () => {
    return (
        <div className="border-b w-full">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
                    <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2 items-center hover:scale-105 transition ease-in-out duration-150">
                        <ChevronRightSquare size={36}/>
                        <p className="font-bold text-gray-900 text-base bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 sm:text-xl md:text-2xl">Jordan</p>
                    </Link>
                    <NavContent />

                </div>
            </Container>
        </div>
    );
};

export default NavBar;