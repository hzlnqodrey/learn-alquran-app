// Quran Types
/**
 * // TODO: explain params here
 */
export interface Surah {
    id: number;
    name: SurahName;
    revelation: SurahRevelation;
    number_of_ayah: number;
    sequence: number;
    ayahs: Ayah[];
    pre_bismillah?: PreBismillah;
    audio: Record<string, any>;
    tafsir: Record<string, any>;
    is_bookmarked: boolean;
    last_read_position: number;
}

export interface SurahName {
    short: string;
    long: string;
    translation: string;
}

export interface SurahRevelation {
    arab: string;
    en: string;
    id: string;
}

export interface Ayah {
    number: AyahNumber;
    text: AyahText;
    translation: Record<string, Translation>;
    audio: AyahAudio;
    surah_id?: number;
    is_bookmarked: boolean;
}

export interface AyahNumber {
    in_quran: number;
    in_surah: number;
}

export interface AyahText {
    arab: string;
    uthmani: string;
}

export interface AyahAudio {
    primary: string;
    secondary: Record<string, string>
}

export interface PreBismillah {
    text: AyahText;
    audio: AyahAudio
}

export interface Translation {
    text: string;
    name: string;
}

