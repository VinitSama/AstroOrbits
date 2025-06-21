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
                        path: ':day/:zodiac',
                        loadComponent: () => import('./components/horoscope/particular/particular').then(m => m.Particular),
                        data: {
                            layout: 'main',
                            breadcrumb: (route: ActivatedRouteSnapshot) => {
                                const zodiac = route.params['zodiac'];
                                return `${capitalize(zodiac)} Free Horoscope`;
                            }
                        },
                        children: [
                            {
                                path: '',
                                data: {
                                    breadcrumb: (route: ActivatedRouteSnapshot) => {
                                        const day = route.params['day'];
                                        return capitalize(day);
                                    }
                                }
                            }
                        ]
                    }
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
