export interface IProgressCard {
    score: number;
    subHeading?: string;
    ringSetting: {
        size: string;
        presetColor: string;
        bgWidth: string;
        width: string
    };
    scoreColor: string;
    subColor: string;
    scoreFSize: string;
    subFSize: string;
    menuCard: boolean;
}