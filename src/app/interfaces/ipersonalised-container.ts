export interface IPersonalisedContainer {
    heading: string;
    subHeading: string;
    cards: IPersonaliseCard[];
}

interface IPersonaliseCard {
    name: string;
    brief: string;
    button: string;
    svg: string;
    buttonCol: string;
}