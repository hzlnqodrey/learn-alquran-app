"use client";

import * as React from "react";
// TODO: add comoponent CARD
import { Surah as APISurah } from "@/types";
import { Card, CardContent, CardHeader, CardTitle  } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Surah {
    id: number;
    name: string;
    transliteration: string;
    translation: string;
    type: string;
    total_verses: number;
}

interface SurahCardProps {
    surah: Surah | APISurah; 
    onClick?: () => void;
}

function normalizeSurah(surah: Surah | APISurah): Surah {
    if ('transliteration' in surah && typeof surah.transliteration === 'string') {
        return surah as Surah;
    }

    // Convert API Surah to Component Surah
    const apiSurah = surah as APISurah;

    return {
        id: apiSurah.id,
        name: typeof apiSurah.name === 'object' ? apiSurah.name.short : String(apiSurah.name),
        transliteration: typeof apiSurah.name === 'object' ? apiSurah.name.long : String(apiSurah.name),
        translation: typeof apiSurah.name === 'object' ? apiSurah.name.long : String(apiSurah.name),
        type: typeof apiSurah.revelation === 'object' ? apiSurah.revelation.id : '',
        total_verses: apiSurah.number_of_ayah,
    }
}

export function SurahCard({ surah, onClick }: SurahCardProps) {
    
    const normalizedSurah = normalizeSurah(surah);

    return (
        <Card
            className={cn(
                "cursor-pointer transition-all hover:shadow-md hover:scale-[1.02]",
                "border-1-4 border-1-primary"
            )}
            onClick={onClick}
        >
            <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                    <div className="flex-1">
                        <CardTitle className="text-lg">{normalizedSurah.transliteration}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                            {normalizedSurah.transliteration}
                        </p>
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="flex h-10">
                            {/* TODO: Find Workaround */}
                            {/* {normalizedSurah.id} */}
                        </div>
                    </div>
                </div>

            </CardHeader>
            <CardContent>

            </CardContent>
        </Card>
    )
}