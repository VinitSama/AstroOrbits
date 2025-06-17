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
                path: 'horoscope',
                data: {layout: 'main', breadcrumb: 'Horoscope'},
                children: [
                    {
                        path: '',
                        loadComponent: () => import('./components/horoscope/horoscope').then(m => m.Horoscope),
                        data: {breadcrumb: null},

                    }
                ]
            }
        ]
    },
];
