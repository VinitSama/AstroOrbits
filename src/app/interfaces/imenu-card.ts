import { SafeHtml } from "@angular/platform-browser";

export interface IMenuCard {
    svg: SafeHtml | string;
    heading: string;
    sub: string;
    blurColor: string;
    width?: string;
}