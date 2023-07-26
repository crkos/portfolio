"use client"
import {ArrowDown} from "lucide-react";
import {useEffect, useState} from "react";

const Arrow = () => {
    const [showArrow, setShowArrow] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            const viewPortHeight = window.innerHeight;
            setShowArrow(viewPortHeight > 600);
        };

        window.addEventListener("resize", handleResize);

        handleResize();

    }, []);

    return (
        <div className="absolute bottom-0 pb-20 left-0 right-0 flex justify-center px-4 animate-bounce hide-arrow-height ">
            <div className="w-10">
                <ArrowDown size={32} />
            </div>
        </div>
    );
};

export default Arrow;