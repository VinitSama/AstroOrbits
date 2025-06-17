export interface INavbarItem {
    name: string | null;
    dropDownPresent: boolean;
    tagPresent: boolean;
    dropDownOption: string[] | null;
    tagSettings: ITagSetting | null;
}

interface ITagSetting {
    name: string;
    eclipseColor: string;
    circleColor: string;
}