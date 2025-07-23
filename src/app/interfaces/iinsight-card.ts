import { TPlanetSvg } from "../types/tplanet-svg";

export interface IInsightCard {
    name: string;
    brief: string;
    button: string;
    svg?: string;
    svgName: TPlanetSvg;
}
