"use client";

import * as React from "react";
// TODO: add comoponent CARD
import { Surah as APISurah } from "@/types";
import {  } from "@/components/ui/card";
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
}