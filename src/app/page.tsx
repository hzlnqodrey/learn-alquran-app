'use client';

import { useTheme } from "next-themes";
import { Sun, Moon, Settings, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

// Components
import { Button } from "@/components/ui/button"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { ErrorMessage } from "@/components/ui/error-message"

export default function HomePage() {
    const router = useRouter()
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    // TanStack Query
    const { data:  surahData, isLoading, error } = useQuery({
        queryKey: ['surahs'],
        // queryFn: quranAPI.getSurahs, // TODO
        staleTime: 1000 * 60 * 60 // 100 hours
    })
    

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
                {/* <p>This is header</p> */}
            </header>

            {/* MAIN */}
            <main className="container py-8 space-y-12">
                {/* <p className="bg-blue-500">This is main</p> */}
                {/* HERO SECTIONS */}
                <section className="text-center space-y-6 py-8">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            Read, Listen & Learn
                        </h2>
                        <p className="text-xl text-muted-foreground mx-auto max-w-2xl">
                            Experience the Holy Quran with beautiful Arabic text, translations, and recitations
                        </p>
                    </div>
                </section>
                {/* SEARCH BAR */}

                {/* QUICK ACCESS -- AUTH USER */}
                {/* QUICK ACCESS */}
                <section className="space-y-4">
                    <h3 className="text-3xl font-bold tracking-tight sm:text-2xl md:text-3xl">
                        Quick Access
                    </h3>
                </section>
                {/* RECENTLY READ -- AUTH USER */}
                {/* POPULAR SURAH */}
                <section className="space-y-4">
                    {/* top bar section */}
                    <div className="flex items-center justify-between">
                        <h3 className="text-3xl font-bold tracking-tight sm:text-2xl md:text-3xl">
                            Surahs
                        </h3>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => router.push('/surahs')}
                        >
                            View All 114 Surahs    
                            <ChevronRight/>
                        </Button>
                    </div>

                    {/* loading spinner prop - component/ui/loading-spinner */}
                    {isLoading && (
                        <div className="flex justify-center py-12">
                            <LoadingSpinner
                                size="md"
                            />
                        </div>
                    )}

                    {/* TODO: add error prop - component/ui/error-message */}
                    <ErrorMessage />
                    {/* TODO: fetch Surahs data API */}

                </section>
                {/* FEATURE SECTION */}
            </main>

            {/* FOOTER */}
            <footer className="border-t py-8 mt-12">
                {/* <p>This is footer</p> */}
                <div className="container">
                    {/* up footer */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {/* Navigate */}
                        <div>
                            <h4 className="font-semibold mb-3">Navigate</h4>
                            <div className="space-y-2 text-sm">
                                <button onClick={() => router.push('/')} className="block text-muted-foreground hover:text-foreground">Home</button>
                                <button onClick={() => router.push('/surahs')} className="block text-muted-foreground hover:text-foreground">All Surahs</button>
                                <button onClick={() => router.push('/bookmarks')} className="block text-muted-foreground hover:text-foreground">Bookmarks</button>
                                <button onClick={() => router.push('/islam-resources')} className="block text-muted-foreground hover:text-foreground">Islam Resources</button>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-3">Popular Surahs</h4>
                            <div className="space-y-2 text-sm">
                                <button onClick={() => router.push("/surah/1")} className="block text-muted-foreground hover:text-muted-foreground">Al-Fatihah</button>
                                <button onClick={() => router.push("/surah/114")} className="block text-muted-foreground hover:text-muted-foreground">Al-Ikhlas</button>
                                <button onClick={() => router.push("/surah/36")} className="block text-muted-foreground hover:text-muted-foreground">Yasin</button>
                                <button onClick={() => router.push("/surah/16s")} className="block text-muted-foreground hover:text-muted-foreground">Al-Kahf</button>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-3">Resources</h4>
                            <div className="space-y-2 text-sm">
                                <button onClick={() => router.push("/settings")} className="block text-muted-foreground hover:text-muted-foreground">Settings</button>
                                <a href="https://quran.com" target="_blank" rel="noopener noreferer" className="block text-muted-foreground hover:text-muted-foreground">Quran.com</a>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-3">About</h4>
                            <div className="space-y-2 text-sm">
                                <p className="block text-muted-foreground">InsyaAllah this is a platform to read, listen, and learn the Holy Quran with Arabic text, translations, listen, and tafsir. Barakallah!</p>
                            </div>
                        </div>
                    </div>

                    {/* down footer */}
                    {/* TradeMark */}
                    <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
                        <p>© {new Date().getFullYear()} Al-Qur'an Apps. Built with love for the Muslim Community</p>
                    </div>
                </div>
            </footer>
        
        </div>
    )
}