import { TNavigationLink } from "../types/tnavogation-link";

export interface INavbarItem {
    name: string | null;
    dropDownPresent: boolean;
    tagPresent: boolean;
    dropDownOption: IDropDownOption[] | null;
    tagSettings: ITagSetting | null;
    navigationLink: TNavigationLink | null;
}

interface ITagSetting {
    name: string;
    eclipseColor: string;
    circleColor: string;
}

export interface IDropDownOption {
    name: string;
    navigationLink: TNavigationLink | null;
}