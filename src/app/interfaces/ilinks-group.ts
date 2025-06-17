export interface ILinksGroup {
    heading: string | null;
    links: ILink[] | null;
}

interface ILink {
    text: string;
    url: string;
}