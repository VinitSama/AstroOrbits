import { SafeHtml } from "@angular/platform-browser";

export interface IHoroscopeType {
    title: string;
    content: string;
    content_heading: string;
    svg?: string;
    safeSvg?: SafeHtml;
}
