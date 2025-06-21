export interface IDosha {
    name: string;
    brief?: string;
    showResult: boolean;
    result?: IResult;
}

interface IResult {
    openResult: boolean;
    solution?: string;
}