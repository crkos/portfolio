import {Projects} from "@/types/types";

export const proyectos: Projects[] = [
    {
        title: "Store Ecommerce",
        tags: ["#typescript", "headlessui", "#react", "#tailwindcss"],
        img: [
            {id: "/ecommerce-store/ecommerce-store.png", url: "/ecommerce-store/ecommerce-store.png"},
            {id: "/ecommerce-store/ecommerce-store-cart.png", url: "/ecommerce-store/ecommerce-store-cart.png"},
            {id: "/ecommerce-store/ecommerce-store-categories.png", url: "/ecommerce-store/ecommerce-store-categories.png"},
            {id: "/ecommerce-store/ecommerce-store-paid.png", url: "/ecommerce-store/ecommerce-store-paid.png"},
            {id: "/ecommerce-store/ecommerce-store-payment.png", url: "/ecommerce-store/ecommerce-store-payment.png"},
        ]
    },
    {
        title: "Store Admin",
        tags: ["typescript", "shadcn", "#react", "tailwindcss", "stripe", "clerk"],
        img: [
            {id: "/ecommerce-admin/ecommerce-admin.png", url: "/ecommerce-admin/ecommerce-admin.png"},
            {id: "/ecommerce-admin/ecommerce-admin-darkmode.png", url: "/ecommerce-admin/ecommerce-admin-darkmode.png"},
            {id: "/ecommerce-admin/ecommerce-admin-orders.png", url: "/ecommerce-admin/ecommerce-admin-orders.png"},
            {id: "/ecommerce-admin/ecommerce-admin-product-create.png", url: "/ecommerce-admin/ecommerce-admin-product-create.png"},
            {id: "/ecommerce-admin/ecommerce-admin-products.png", url: "/ecommerce-admin/ecommerce-admin-products.png"},
        ]
    }
]