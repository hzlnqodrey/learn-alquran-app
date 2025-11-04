'use client';

import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes";
import { Sun, Moon, Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import '@/styles/globals.css'; // TODO: move to layout.tsx

export default function HomePage() {
    const router = useRouter()
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }
    

    return (
        <div className="min-h-screen bg-background">
            {/* HEADER */}
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center justify-between">
                    {/* HEADER LEFT */}
                    <div className="flex items-center space-x-4">
                        <h1 className="text-2xl font-bold text-primary font-arabic">
                            القرآن الكريم
                        </h1>
                        <span className="text-sm text-muted-foreground hidden sm:inline">
                            The Noble Al-Qur'an
                        </span>
                    </div>

                    {/* HEADER RIGHT */}
                    <div className="flex items-center space-x-2">
                        {/* Button: Dark Mode */}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ?  <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                        </Button>

                        {/* Button: Login */}
                        <Button
                            variant="ghost"
                            size="sm"
                            // TODO: AUTH and Login
                            // onClick={() => router.push('/auth/login')} 
                        >
                            Sign In
                        </Button>

                        {/* Button: Settings */}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => router.push('/settings')}
                            aria-label="Settings"
                        >
                            {/* Settings */}
                            <Settings className="h-4 w-4" />
                        </Button>
                    </div>

                </div>
                <p>This is header</p>
            </header>

            {/* MAIN */}
            <main className="container py-8 space-y-12">
                <p className="bg-blue-500">This is main</p>
                {/* HERO SECTIONS */}
                <section className="text-center space-y-6 py-8">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            Read, Listen, & Learn
                        </h2>
                        <p className="">
                            Experience the Holy Quran with beautiful Arabic text, translations, and recitations
                        </p>
                    </div>
                </section>
                {/* SEARCH BAR */}
                {/* QUICK ACCESS -- AUTH USER */}
                {/* QUICK ACTION */}
                {/* RECENTLY READ -- AUTH USER */}
                {/* POPULAR SURAH */}
                {/* FEATURE SECTION */}
            </main>

            {/* FOOTER */}
            <footer>
                <p>This is footer</p>
            </footer>
        
        </div>
    )
}