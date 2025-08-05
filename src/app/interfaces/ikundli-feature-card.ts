import { SafeHtml } from "@angular/platform-browser";

export interface IKundliFeatureCard {
    title: string;
    brief: string;
    clickLink?: string;
    svg?: string | SafeHtml;
    svgBg?: string;
    outputId?: number;
}
