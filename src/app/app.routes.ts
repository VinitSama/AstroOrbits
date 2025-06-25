import { ActivatedRouteSnapshot, Routes } from '@angular/router';

function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'home',
        data: {layout: 'main', breadcrumb: 'Home'},
        children: [
            {
                path: '',
                loadComponent: () => import('./components/home/home').then(m => m.Home),
                data: { breadcrumb: null },
            },
            {
                path: 'test',
                loadComponent: () => import('./components/home/home').then(m => m.Home),
                data: {layout: 'main', breadcrumb: 'test'},
            },
            {
                path: 'zodiacSign',
                data: {layout: 'main', breadcrumb: 'Zodiac Sign'},
                children: [
                    {
                        path: '',
                        redirectTo: 'moonSign',
                        pathMatch: 'full'
                    },
                    {
                        path: 'moonSign',
                        loadComponent: () => import('./components/moon-sign/moon-sign').then(m => m.MoonSign),
                    },
                ],
            },
            {
                path: 'horoscope',
                data: {layout: 'main', breadcrumb: 'Horoscope'},
                children: [
                    {
                        path: '',
                        loadComponent: () => import('./components/horoscope/horoscope').then(m => m.Horoscope),
                        data: {breadcrumb: null},
                    },
                    {
                        path: ':day',
                        data: {
                            breadcrumb: (route: ActivatedRouteSnapshot) => capitalize(route.params['day']),
                            skipBreadcrumb: true,
                        },
                        children: [
                            {
                                path: ':zodiac',
                                loadComponent: () =>
                                    import('./components/horoscope/particular/particular').then(m => m.Particular),
                                data: 
                                {
                                    layout: 'main',
                                    breadcrumb: (route: ActivatedRouteSnapshot) =>
                                    `${capitalize(route.params['zodiac'])} Free Horoscope`,
                                }
                            }
                        ]
                    }
                ]
            },
            {
                path: 'mantras',
                data: {layout: 'main', breadcrumb: "Mantras"},
                children: [
                    {
                        path: '',
                        loadComponent: () => import('./components/mantras/mantras').then(m => m.Mantras),
                        data: {breadcrumb: null},
                    },
                    {
                        path: ':mantra',
                        loadComponent: () => import('./components/mantras/mantra-specific/mantra-specific').then(m => m.MantraSpecific),
                        data: {
                            layout: 'main',
                            breadcrumb: (route: ActivatedRouteSnapshot) => capitalize(route.params['mantra']),
                        } 
                    },
                ]
            },
            {
                path: 'panchang',
                data: {layout: 'main', breadcrumb: "Today's Panchang"},
                children: [
                    {
                        path: '',
                        loadComponent: () => import('./components/panchang/panchang').then(m => m.Panchang),
                        data: {breadcrumb: null},

                    },
                ]
            },
            {
                path: 'tarot',
                data: {layout: 'main', breadcrumb: "Tarot"},
                children: [
                    {
                        path: '',
                        loadComponent: () => import('./components/tarot/tarot').then(m => m.Tarot),
                        data: {breadcrumb: null},
                    },
                    {
                        path: ':option',
                        loadComponent: () => import('./components/tarot/tarot-reading/tarot-reading').then(m => m.TarotReading),
                        data: {layout: 'main',
                            breadcrumb: (route: ActivatedRouteSnapshot) => route.params['option']
                        }
                    }
                ]
            },
            {
                path: 'numerology',
                data: {layout: 'main', breadcrumb: "Numerology"},
                children: [
                    {
                        path: ':option',
                        data: {layout: 'main', breadcrumb: (route: ActivatedRouteSnapshot) => {
                            const option = capitalize(route.params['option']);
                            return !option ? null : option;
                        } },
                        children: [
                            {
                                path: ':num',
                                loadComponent: () => import('./components/numerlogy/numerlogy').then(m => m.Numerlogy),
                                data: {layout: 'main', breadcrumb: (route: ActivatedRouteSnapshot)=> {
                                    const num = route.params['num'];
                                    return !num ? null : num;
                                }}
                            }
                        ]

                    },
                ]
            },
            {
                path: 'vastushastra',
                data: {layout: 'main', breadcrumb: "Vastushastra"},
                children: [
                    {
                        path: '',
                        loadComponent: () => import('./components/vastushastra/vastushastra').then(m => m.Vastushastra),
                        data: {breadcrumb: null},

                    },
                ]
            },
            {
                path: 'love-calculator',
                data: {layout: 'main', breadcrumb: "Love Calculator"},
                children: [
                    {
                        path: '',
                        loadComponent: () => import('./components/love-calculator/love-calculator').then(m => m.LoveCalculator),
                        data: {breadcrumb: null},

                    },
                ]
            },
            {
                path: 'kundli-matching',
                data: {layout: 'main', breadcrumb: 'Kundli Matching'},
                children: [
                    {
                        path: '',
                        loadComponent: () => import('./components/kundli-matching/kundli-matching').then(m => m.KundliMatching),
                        data: {breadcrumb: null},
                    },
                    {
                        path: 'result',
                        data: {layout: 'main', breadcrumb: 'Result'},
                        children: [
                            {
                                path: '',
                                loadComponent: () => import('./components/kundli-matching/matching-result/matching-result').then(m => m.MatchingResult),
                                data: {breadcrumb: null},
                            },
                        ]
                    },
                ]
            },
            {
                path: 'kundli',
                data: {layout: 'main', breadcrumb: 'Kundli'},
                children: [
                    {
                        path: '',
                        loadComponent: () => import('./components/kundli/kundli').then(m => m.Kundli),
                        data: {breadcrumb: null},
                    },
                    {
                        path: 'result',
                        data: {layout: 'main', breadcrumb: 'Result'},
                        children: [
                            {
                                path: '',
                                loadComponent: () => import('./components/kundli/kundli-result/kundli-result').then(m => m.KundliResult),
                                data: {breadcrumb: null},
                            },
                        ]
                    },
                ]
            },
        ]
    },
    {
        path: '**',
        loadComponent: () => import('./components/not-found/not-found').then(m => m.NotFound),
        data: {layout: 'main', breadcrumb: 'Not Found'}
    },
];
