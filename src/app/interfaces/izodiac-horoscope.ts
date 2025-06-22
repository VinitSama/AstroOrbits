import { TZodiacSign } from "../types/tzodiac-sign";

export interface IZodiacHoroscope {
    brief: string;
    remedy: string;
    luckyInformation: ILuckyInformation
}

interface ILuckyInformation {
    luckyNumber: number;
    mood: string;
    positivity: number;
    luckyColor: string;
}
