import { TNavName } from "../types/tnav-name";
import { TNavigationLink } from "../types/tnavogation-link";

export interface INavbarItem {
    name: TNavName | null;
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
    subLink: string;
}