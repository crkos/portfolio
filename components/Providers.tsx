"use client"
import {QueryClient} from "@tanstack/query-core";
import {QueryClientProvider} from "@tanstack/react-query";
import {ThemeProvider} from "@/providers/ThemeProvider";
import ModalProvider from "@/providers/ModalProvider";

const Providers = ({children}: {children: React.ReactNode}) => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                <ModalProvider />
                {children}
            </ThemeProvider>
        </QueryClientProvider>
    );
};

export default Providers;