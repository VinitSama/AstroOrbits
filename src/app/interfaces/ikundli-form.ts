export interface IKundliForm {
    name: string;
    dob: string;
    time: string;
    place: string;
    gender: 'm' | 'f';
}

export interface IMatchData {
    boy: IKundliForm;
    girl: IKundliForm;
}