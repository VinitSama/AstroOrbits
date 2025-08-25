import { TZodiacSign } from "../types/tzodiac-sign";

export interface IZodiacHoroscope {
    brief: string;
    // remedy: string;
    luckyInformation: ILuckyInformation;
    stars: number[];
    particularBrief: string[];
}

interface ILuckyInformation {
    luckyNumber: number[];
    // mood: string;
    // positivity: number;
    luckyColor: string;
}
