"use client"
import React from 'react';
import {
    NavigationMenu, NavigationMenuContent,
    NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger, navigationMenuTriggerStyle
} from "@/components/ui/NavigationMenu";
import Link from "next/link";
import {cn} from "@/lib/utils";


interface ComponentProps {
    title: string,
    href: string,
    description: string
}

const pagesAbout: ComponentProps[] = [
    {
        title: "About",
        href: "/#about",
        description: "Acerca de mi"
    },
    {
        title: "Proyectos",
        href: "/#projects",
        description: "Proyectos realizados"
    },
    {
        title: "Contact",
        href: "/#contact",
        description: "Contactame"
    }
];

const NavContent = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem className="sm:hidden">
                    <NavigationMenuTrigger>About</NavigationMenuTrigger>
                    <NavigationMenuContent className="sm:hidden">
                        <ul className="grid w-[200px] gap-2 p-2">
                            {pagesAbout.map((page) => (
                                <ListItem key={page.title} title={page.title} href={page.href}>
                                    {page.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem className="hidden sm:block">
                    <Link href="/#about" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <p className="text-zinc-700 sm:text-lg">About</p>
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="hidden sm:block">
                    <Link href="/#projects" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <p className="text-zinc-700 sm:text-lg">Projects</p>
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="hidden sm:block">
                    <Link href="/#contact" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <p className="text-zinc-700 sm:text-lg">Contact</p>
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
};

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

export default NavContent;