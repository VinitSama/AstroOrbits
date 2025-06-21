import { TZodiacSign } from "../types/tzodiac-sign";

export interface IZodiacCard {
    svg: string;
    title: TZodiacSign | null;
    details?: string;
}
