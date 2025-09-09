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
        ]
    },
    {
        path: 'coming-soon',
        loadComponent: () => import('./components/coming-soon/coming-soon').then( m => m.ComingSoon),
        data: {layout: 'main', breadcrumb: '0'},
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
                path: 'Daily',
                loadComponent: () => import('./components/horoscope/horoscope').then( m => m.Horoscope),
                data: {layout: 'main', breadcrumb: 'Daily'},
            },
            {
                path: 'Weekly',
                loadComponent: () => import('./components/horoscope/horoscope').then( m => m.Horoscope),
                data: {layout: 'main', breadcrumb: 'Weekly'},
            },
            {
                path: 'Monthly',
                loadComponent: () => import('./components/horoscope/horoscope').then( m => m.Horoscope),
                data: {layout: 'main', breadcrumb: 'Monthly'},
            },
            {
                path: `Yearly/${new Date().getFullYear()}`,
                loadComponent: () => import('./components/horoscope/horoscope').then( m => m.Horoscope),
                data: {layout: 'main', breadcrumb: 'Yearly'},
            },
            {
                path: 'Love',
                data: {breadcrumb: null},
                children: [
                    {
                        path: '',
                        loadComponent: () => import('./components/horoscope/horoscope').then(m=>m.Horoscope),
                        data: {breadcrumb: "Love"},
                    },
                    {
                        path: 'Daily',
                        loadComponent: () => import('./components/horoscope/horoscope').then( m => m.Horoscope),
                        data: {layout: 'main', breadcrumb: 'Daily'},
                    },
                    {
                        path: 'Weekly',
                        loadComponent: () => import('./components/horoscope/horoscope').then( m => m.Horoscope),
                        data: {layout: 'main', breadcrumb: 'Weekly'},
                    },
                    {
                        path: 'Monthly',
                        loadComponent: () => import('./components/horoscope/horoscope').then( m => m.Horoscope),
                        data: {layout: 'main', breadcrumb: 'Monthly'},
                    },
                    {
                        path: `yearly/${new Date().getFullYear()}`,
                        loadComponent: () => import('./components/horoscope/horoscope').then( m => m.Horoscope),
                        data: {layout: 'main', breadcrumb: 'Yearly'},
                    },
                ]
            },
            {
                path: 'Health',
                data: {breadcrumb: null},
                children: [
                    {
                        path: '',
                        loadComponent: () => import('./components/horoscope/horoscope').then(m=>m.Horoscope),
                        data: {breadcrumb: "Love"},
                    },
                    {
                        path: 'Daily',
                        loadComponent: () => import('./components/horoscope/horoscope').then( m => m.Horoscope),
                        data: {layout: 'main', breadcrumb: 'Daily'},
                    },
                    {
                        path: 'Weekly',
                        loadComponent: () => import('./components/horoscope/horoscope').then( m => m.Horoscope),
                        data: {layout: 'main', breadcrumb: 'Weekly'},
                    },
                    {
                        path: 'Monthly',
                        loadComponent: () => import('./components/horoscope/horoscope').then( m => m.Horoscope),
                        data: {layout: 'main', breadcrumb: 'Monthly'},
                    },
                    {
                        path: `yearly/${new Date().getFullYear()}`,
                        loadComponent: () => import('./components/horoscope/horoscope').then( m => m.Horoscope),
                        data: {layout: 'main', breadcrumb: 'Yearly'},
                    },
                ]
            },
            {
                path: 'Career',
                data: {breadcrumb: null},
                children: [
                    {
                        path: '',
                        loadComponent: () => import('./components/horoscope/horoscope').then(m=>m.Horoscope),
                        data: {breadcrumb: "Love"},
                    },
                    {
                        path: 'Daily',
                        loadComponent: () => import('./components/horoscope/horoscope').then( m => m.Horoscope),
                        data: {layout: 'main', breadcrumb: 'Daily'},
                    },
                    {
                        path: 'Weekly',
                        loadComponent: () => import('./components/horoscope/horoscope').then( m => m.Horoscope),
                        data: {layout: 'main', breadcrumb: 'Weekly'},
                    },
                    {
                        path: 'Monthly',
                        loadComponent: () => import('./components/horoscope/horoscope').then( m => m.Horoscope),
                        data: {layout: 'main', breadcrumb: 'Monthly'},
                    },
                    {
                        path: `yearly/${new Date().getFullYear()}`,
                        loadComponent: () => import('./components/horoscope/horoscope').then( m => m.Horoscope),
                        data: {layout: 'main', breadcrumb: 'Yearly'},
                    },
                ]
            },
            {
                path: 'Finance',
                data: {breadcrumb: null},
                children: [
                    {
                        path: '',
                        loadComponent: () => import('./components/horoscope/horoscope').then(m=>m.Horoscope),
                        data: {breadcrumb: "Love"},
                    },
                    {
                        path: 'Daily',
                        loadComponent: () => import('./components/horoscope/horoscope').then( m => m.Horoscope),
                        data: {layout: 'main', breadcrumb: 'Daily'},
                    },
                    {
                        path: 'Weekly',
                        loadComponent: () => import('./components/horoscope/horoscope').then( m => m.Horoscope),
                        data: {layout: 'main', breadcrumb: 'Weekly'},
                    },
                    {
                        path: 'Monthly',
                        loadComponent: () => import('./components/horoscope/horoscope').then( m => m.Horoscope),
                        data: {layout: 'main', breadcrumb: 'Monthly'},
                    },
                    {
                        path: `yearly/${new Date().getFullYear()}`,
                        loadComponent: () => import('./components/horoscope/horoscope').then( m => m.Horoscope),
                        data: {layout: 'main', breadcrumb: 'Yearly'},
                    },
                ]
            },
            {
                path: ':zodiac',
                children: [
                    {
                        path: '',
                        loadComponent: () =>
                            import('./components/horoscope/particular/particular').then(m => m.Particular),
                        data: 
                        {
                            layout: 'main',
                            breadcrumb: (route: ActivatedRouteSnapshot) =>
                            `${capitalize(route.params['zodiac'])}`,
                            skipPreviousBreadcrumb: true,
                        }
                    }
                ]
            }
        ]
    },
    {
        path: 'numerology',
        data: {layout: 'main', breadcrumb: "Numerology"},
        children: [
            {
                path: '',
                loadComponent: () => import('./components/numerlogy/numerlogy').then(m => m.Numerlogy),
                data: {breadcrumb: "Numerology"},
            },
            // {
            //     path: ':option',
            //     data: {layout: 'main', breadcrumb: (route: ActivatedRouteSnapshot) => {
            //         const option = capitalize(route.params['option']);
            //         return !option ? null : option;
            //     } },
            //     children: [
            //         {
            //             path: ':num',
            //             loadComponent: () => import('./components/numerlogy/numerlogy').then(m => m.Numerlogy),
            //             data: {layout: 'main', breadcrumb: (route: ActivatedRouteSnapshot)=> {
            //                 const num = route.params['num'];
            //                 return !num ? null : num;
            //             }}
            //         }
            //     ]

            // },
            {
                path: ':num',
                loadComponent: () => import('./components/numerlogy/numerlogy-particular/numerlogy-particular').then(m => m.NumerlogyParticular),
                data: {layout: 'main', breadcrumb: (route: ActivatedRouteSnapshot) => {
                    const num = route.params['num'];
                    return `Number ${!num ? null : num}`;
                }}
            },
            {
                path: 'd/:day',
                data: {
                    layout: 'main',
                    skipBreadcrumb: true,
                },
                loadComponent: () => import('./components/numerlogy/numerlogy').then(m => m.Numerlogy),
            },
            {
                path: 't/:type',
                data: {layout: 'main', breadcrumb: (route: ActivatedRouteSnapshot) => {
                            const type = route.params['type'];
                            return !type ? null : capitalize(type);
                        }},
                children: [
                    {
                        path:'',
                        loadComponent: () => import('./components/numerlogy/numerlogy').then(m => m.Numerlogy),
                    },
                    {
                        path: ':num',
                        loadComponent: () => import('./components/numerlogy/numerlogy-particular/numerlogy-particular').then(m => m.NumerlogyParticular),
                        data: {layout: 'main', breadcrumb: (route: ActivatedRouteSnapshot) => {
                            const num = route.params['num'];
                            return `Number ${!num ? null : num}`;
                        }}
                    }
                ]
            }
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
                data: {layout: 'main', breadcrumb: 'Free Kundli'},
                children: [
                    {
                        path: '',
                        loadComponent: () => import('./components/kundli/kundli-result/kundli-result').then(m => m.KundliResult),
                        data: {breadcrumb: null},
                    },
                ]
            },
            {
                path: "details/:option",
                loadComponent: () => import('./components/kundli/kundli-result/kundli-detail-report/kundli-detail-report').then(m => m.KundliDetailReport),
                data: {breadcrumb: 'Free Kundli'}
            },
            {
                path: 'matching',
                data: {layout: 'main', breadcrumb: 'Match Making'},
                children: [
                    {
                        path: '',
                        loadComponent: () => import('./components/kundli-matching/kundli-matching').then(m => m.KundliMatching),
                        data: {breadcrumb: null},
                    },
                    {
                        path: 'result/:option',
                        data: {layout: 'main', breadcrumb: 'Report'},
                        loadComponent: () => import('./components/kundli-matching/matching-result/matching-result').then(m => m.MatchingResult),
                    },
                ]
            },
        ]
    },
    {
        path: 'tarot',
        data: {layout: 'main', breadcrumb: "Tarot Reading"},
        children: [
            {
                path: '',
                loadComponent: () => import('./components/tarot/tarot').then(m => m.Tarot),
                data: {breadcrumb: null},
            },
            {
                path: 'major-arcana',
                loadComponent: () => import('./components/tarot/tarot-reading/tarot-reading').then(m => m.TarotReading),
                data: {breadcrumbs: 'Major Arcana'},
            },
            {
                path: 'minor-arcana',
                loadComponent: () => import('./components/tarot/tarot-reading/tarot-reading').then(m => m.TarotReading),
                data: {breadcrumbs: 'Minor Arcana'},
            },
            {
                path: 'o/:option',
                loadComponent: () => import('./components/tarot/tarot').then(m => m.Tarot),
                data: {breadcrumb: null},
            },
            {
                path: ':option',
                loadComponent: () => import('./components/tarot/tarot-reading/tarot-reading').then(m => m.TarotReading),
                data: {layout: 'main',
                    breadcrumb: (route: ActivatedRouteSnapshot) => route.params['option']
                }
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
            {
                path: 'r/:show',
                loadComponent: () => import('./components/love-calculator/love-calculator').then(m => m.LoveCalculator),
                data: {breadcrumb: 'Report'}
            }
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
        path: 'rudrakhs-calculator',
        data: {layout: "main", breadcrumb: "Rudraksh Calculator"},
        children: [
            {
                path: '',
                loadComponent: () => import('./components/rudraksha-calculator/rudraksha-calculator').then(m => m.RudrakshaCalculator),
                data: {breadcrumb: null},
            },
            {
                path: 'result',
                loadComponent: () => import('./components/rudraksha-calculator/rudraksha-report/rudraksha-report').then( m => m.RudrakshaReport),
                data: {breadcrumb: 'Result'}
            }
        ]
    },
    {
        path: '**',
        loadComponent: () => import('./components/not-found/not-found').then(m => m.NotFound),
        data: {layout: 'main', breadcrumb: 'Not Found'}
    },
];
