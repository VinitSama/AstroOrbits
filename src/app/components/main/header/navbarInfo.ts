import { INavbarItem } from "../../../interfaces/inavbar-item";

export const NavbarInfo: INavbarItem[] = [
    // {
    //   name: 'Free Kundli',
    //   dropDownPresent: false,
    //   tagPresent: false,
    //   dropDownOption: null,
    //   tagSettings: null,
    //   navigationLink: "kundli" ,
    // },
    {
      name: 'Home',
      dropDownPresent: false,
      tagPresent: false,
      dropDownOption: null,
      tagSettings: null,
      navigationLink: "home" ,
    },
    {
      name: 'Kundli',
      dropDownPresent: true,
      tagPresent: false,
      dropDownOption: [
        {
          name: "Free Kundli",
          navigationLink: "kundli",
          subLink: "",
        },
        {
          name: "Match Making",
          navigationLink: "kundli/matching",
          subLink: ""
        },
      ],
      tagSettings: null,
      navigationLink: "kundli",
    },
    {
      name: 'Horoscope',
      dropDownPresent: true,
      tagPresent: false,
      dropDownOption: [
        {
          name: "Daily",
          navigationLink: "horoscope",
          subLink: "Daily"
        },
        {
          name: "Weekly",
          navigationLink: "horoscope",
          subLink: "Weekly"
        },
        {
          name: "Monthly",
          navigationLink: "horoscope",
          subLink: "Monthly"
        },
        {
          name: "Yearly",
          navigationLink: "horoscope",
          subLink: "Yearly"
        },
      ],
      tagSettings: null,
      navigationLink: "horoscope",
    },
    {
      name: 'Numerology',
      dropDownPresent: true,
      tagPresent: false,
      dropDownOption: [
        {
          name: "Daily Numerology",
          navigationLink: "numerology",
          subLink: "Daily"
        },
        {
          name: "Weekly Numerology",
          navigationLink: "numerology",
          subLink: "Weekly"
        },
        {
          name: "Monthly Numerology",
          navigationLink: "numerology",
          subLink: "Monthly"
        },
        {
          name: "Yearly Numerology",
          navigationLink: "numerology",
          subLink: "Yearly"
        },
        {
          name: "Angle Number",
          navigationLink: "numerology",
          subLink: "Angle"
        },
      ],
      tagSettings: null,
      navigationLink: "numerology",
    },
    {
      name: 'Tarot Reading',
      dropDownPresent: true,
      tagPresent: false,
      dropDownOption: [
        {
          name: "Daily",
          navigationLink: "tarot",
          subLink: "Daily"
        },
        {
          name: "Shuffle",
          navigationLink: "tarot",
          subLink: "Shuffle"
        },
        {
          name: "Love",
          navigationLink: "tarot",
          subLink: "Love"
        },
        {
          name: "Career",
          navigationLink: "tarot",
          subLink: "Career"
        },
        {
          name: "Fortune",
          navigationLink: "tarot",
          subLink: "Fortune"
        },
      ],
      tagSettings: null,
      navigationLink: "tarot",
    },
    {
      name: 'Panchang',
      dropDownPresent: true,
      tagPresent: false,
      dropDownOption: [
        {
          name:"Today's Pachang",
          navigationLink: "panchang",
          subLink: "Today"
        },
        {
          name:"Monthly Pachang",
          navigationLink: "panchang",
          subLink: "Monthly"
        },
        {
          name:"Hora Muhurat",
          navigationLink: "panchang",
          subLink: "Hora Muhurat"
        },
        {
          name:"Chodhadiya Muhurat",
          navigationLink: "panchang",
          subLink: "Chodhadiya Muhurat"
        },
        {
          name:"Sun Rise",
          navigationLink: "panchang",
          subLink: "Sun Rise"
        },
        {
          name:"Sun Set",
          navigationLink: "panchang",
          subLink: "Sun Set"
        },
        {
          name:"Moon Rise",
          navigationLink: "panchang",
          subLink: "Moon Rise"
        },
        {
          name:"Moon Set",
          navigationLink: "panchang",
          subLink: "Moon Set"
        },
        {
          name:"Festivals",
          navigationLink: "panchang",
          subLink: "Festivals"
        },
      ],
      tagSettings: null,
      navigationLink: "panchang",
    },
    // {
    //   name: 'Mantras',
    //   dropDownPresent: false,
    //   tagPresent: false,
    //   dropDownOption: null,
    //   tagSettings: null,
    //   navigationLink: "mantras",
    // },   
    {
      name: 'Calculator',
      dropDownPresent: true,
      tagPresent: false,
      dropDownOption: [
        {
          name: "Love Calculator",
          navigationLink: "love-calculator",
          subLink: "Love Calculator",
        },
        {
          name: "Rudraksh Calculator",
          navigationLink: "rudrakhs-calculator",
          subLink: "Rudraksh Calculator",
        },
      ],
      tagSettings: null,
      navigationLink: null,
      // tagSettings: {
      //   name: 'Watch',
      //   circleColor: '#E90000',
      //   eclipseColor: '#FFC2C2'
      // },
    },
    {
      name: 'Blogs',
      dropDownPresent: false,
      tagPresent: false,
      dropDownOption: null,
      tagSettings: null,
      navigationLink: null,
    },
  ];