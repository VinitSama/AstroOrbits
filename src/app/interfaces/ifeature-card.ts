import { SafeHtml } from "@angular/platform-browser";

export interface IFeatureCard {
    title: string;
    brief: string;
    clickLink?: string;
    svg?: string | SafeHtml;
    svgBg?: string;
    outputId?: number;
}
