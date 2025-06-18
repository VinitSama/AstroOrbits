import { Routes } from '@angular/router';

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
