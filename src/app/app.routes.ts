import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: 'start',
        loadComponent: () => import('./pages/start-page/start-page.component').then(m => m.StartPageComponent),
        providers: [] 
    },
    {
        path: 'timer',
        loadComponent: () => import('./pages/set-timer/set-timer.component').then(m => m.SetTimerComponent),
        providers: []
    },
    {
        path: 'timer/two-minutes',
        loadComponent: () => import('./pages/preset-timers/two-minutes/two-minutes.component').then(m => m.TwoMinutesComponent),
        providers: []
    },
    {
        path: 'settings',
        loadComponent: () => import('./pages/settings/settings.component').then(m => m.SettingsComponent),
        providers: []
    },
    {
        path: 'timer/balloon-timer',
        loadComponent: () => import('./pages/preset-timers/balloon-timer/balloon-timer.component').then(m => m.BalloonTimerComponent),
        providers: []
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
        providers: []
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
        providers: []
    },
    {
        path: 'custom-timer',
        loadComponent: () => import('./pages/custom-timer/custom-timer.component').then(m => m.CustomTimerComponent),
        providers: []
    },
    {
        path: 'under-construction',
        loadComponent: () => import('./pages/under-construction/under-construction.component').then(m => m.UnderConstructionComponent),
        providers: []
    },

    { path: '**', redirectTo: 'start' }

];
