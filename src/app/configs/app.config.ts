import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, inject } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from '../app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

export const baseUrl = "https://api.vedicastroapi.com/v3-json";
// export const baseUrl = "/api/vedicastroapi.com/v3-json";
export const api_key = "1807c7ab-ea34-50c8-b867-5fab4fd05b56"; 

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // provideHttpClient(withInterceptors([
    //   (req, next) => {
    //     const cloned = req.clone({
    //       setHeaders: {
    //         api_key: api_key
    //       }
    //     });
    //     return next(cloned);
    //   }
    // ]))
    provideHttpClient()
  ]
};