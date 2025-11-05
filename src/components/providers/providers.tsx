// Putting the Providers wrapper in layout.tsx
/**
 * Why? because those libraries (React Query, theme, auth, settings, toast) all rely on client-side React context & hooks — you need a client-side provider component near the root so every page/component can consume those contexts. Putting the Providers wrapper in layout.tsx is the correct, minimal way to give the whole app those contexts without turning your entire layout into a client component.
 */

/**
 * Why put them in layout.tsx (and the right way)
layout.tsx (App Router) is a server component by default. That’s good — server components are smaller and faster to SSR.
You should not add "use client" to layout.tsx (that would force the whole layout to client-side). Instead create a separate client component (like your providers.tsx with "use client") and render it inside the server RootLayout. That’s exactly what you did — correct approach.
The server layout can render a client component as a child. That client component can use hooks and provide contexts to everything inside it.
 */

"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
// Import another providers

import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
    const [ queryClient ] = useState(() => new QueryClient ({
        defaultOptions: {
            queries: {
                staleTime: 1000 * 60 * 5, // 5 minutes
                gcTime: 1000 * 60 * 30, // 30 minutes of garbage collectors cache to prevent memory leak
                retry: (failureCount, error: any) => {
                    // TODO: Don't retry on 4xx errors except 408, 429
                    if (error?.status >= 400 && error?.status < 500) {
                        return false
                    }
                    return failureCount < 3;
                },
            },
        },
    }));

    return (
        <QueryClientProvider client={ queryClient }>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange // disable css when changing theme
            >
                {/* TODO: Auth | Setting | Toast Providers */}
                {children}
            </ThemeProvider>
        </QueryClientProvider>
    )
}