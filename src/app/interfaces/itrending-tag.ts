export interface ITrendingTag {
    name: string;
    number: number;
}

export interface ITrendingContainer {
    heading: string;
    showPercentage?: boolean;
    checkMore: boolean
    tags: ITrendingTag[];
}
