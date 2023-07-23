import {Projects} from "@/types/types";

export const proyectos: Projects[] = [
    {
        title: "Store Ecommerce",
        tags: ["#typescript", "headlessui", "#react", "#tailwindcss", "#nextjs"],
        img: [
            {id: "/ecommerce-store/ecommerce-store.png", url: "/ecommerce-store/ecommerce-store.png"},
            {id: "/ecommerce-store/ecommerce-store-cart.png", url: "/ecommerce-store/ecommerce-store-cart.png"},
            {id: "/ecommerce-store/ecommerce-store-categories.png", url: "/ecommerce-store/ecommerce-store-categories.png"},
            {id: "/ecommerce-store/ecommerce-store-paid.png", url: "/ecommerce-store/ecommerce-store-paid.png"},
            {id: "/ecommerce-store/ecommerce-store-payment.png", url: "/ecommerce-store/ecommerce-store-payment.png"},
        ],
        link: "https://ecommerce-store-brown.vercel.app/",
        gitLink: "https://github.com/crkos/ecommerce-store"
    },
    {
        title: "Store Admin",
        tags: ["#typescript", "#shadcn", "#react", "#tailwindcss", "#stripe", "#clerk", "#nextjs"],
        img: [
            {id: "/ecommerce-admin/ecommerce-admin.png", url: "/ecommerce-admin/ecommerce-admin.png"},
            {id: "/ecommerce-admin/ecommerce-admin-darkmode.png", url: "/ecommerce-admin/ecommerce-admin-darkmode.png"},
            {id: "/ecommerce-admin/ecommerce-admin-orders.png", url: "/ecommerce-admin/ecommerce-admin-orders.png"},
            {id: "/ecommerce-admin/ecommerce-admin-product-create.png", url: "/ecommerce-admin/ecommerce-admin-product-create.png"},
            {id: "/ecommerce-admin/ecommerce-admin-products.png", url: "/ecommerce-admin/ecommerce-admin-products.png"},
        ],
        link: "https://ecommerce-admin-indol-six.vercel.app/",
        gitLink: "https://github.com/crkos/ecommerce-admin"
    },
    {
        title: "Breadit",
        tags: ["#typescript", "#shadcn", "#nextauth", "react", "#nextjs"],
        img: [
            {id: "/breadit/breadit.png", url: "/breadit/breadit.png"},
            {id: "/breadit/breadit-post.png", url: "/breadit/breadit-post.png"},
            {id: "/breadit/bredit_community.png", url: "/breadit/breadit-community.png"},
            {id: "/breadit/breadit-create-post.png", url: "/breadit/breadit-create-post.png"},
        ],
        link: "https://breaddit-roan.vercel.app/",
        gitLink: "https://github.com/crkos/breaddit"
    },
    {
        title: "Realtor Clone",
        tags: ["#javascript", "#firebase", "#tailwindcss", "#react"],
        img: [
            {id: "/realtor/realtor.png", url: "/realtor/realtor.png"},
            {id: "/realtor/realtor-create.png", url: "/realtor/realtor-create.png"},
            {id: "/realtor/realtor-offers.png", url: "/realtor/realtor-offers.png"},
            {id: "/realtor/realtor-profile.png", url: "/realtor/realtor-profile.png"},
        ],
        link: "https://realtor-livid.vercel.app/",
        gitLink: "https://github.com/crkos/realtor"
    }
]