export interface IPlanetInfo {
    planet: string;
    rValue?: string;
    sign?: string;
    signLord?: string;
    degree?: string;
    nakshatra?: string;
    nakshatraLord?: string;
    house?: string;
}

export interface IPlanetInfoDisplayMap {
  label: string;
  key: keyof IPlanetInfo;
}