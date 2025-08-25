import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, inject } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from '../app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { MAT_RIPPLE_GLOBAL_OPTIONS, RippleGlobalOptions } from '@angular/material/core';
import { provideAnimations } from '@angular/platform-browser/animations';

// export const baseUrl = "https://api.vedicastroapi.com/v3-json";
// export const baseUrl = "/api/vedicastroapi.com/v3-json";
export const API_KEY = "1750fc53-444d-5d3f-a6a8-38cf3ee64e90";

const globalRippleConfig: RippleGlobalOptions = {
  disabled: true, // This disables the ripple effect globally
  animation: {
    enterDuration: 0,
    exitDuration: 0
  }
};

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
    provideHttpClient(),
    provideAnimations(),
    { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig }
  ]
};