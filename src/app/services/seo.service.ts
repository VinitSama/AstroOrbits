import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

interface SeoData {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
}

export const WEP_ADD = "https://astroorbits.com/";

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  
  constructor(private title: Title, private meta: Meta) {}

  updateTags(data: SeoData){
    if (data.title) {
      this.title.setTitle(data.title);
      this.meta.updateTag({ property: 'og:title', content: data.ogTitle || data.title});
    }

    if (data.description) {
      this.meta.updateTag({ name: 'description', content: data.description });
      this.meta.updateTag({ property: 'og:description', content: data.ogDescription || data.description });
    }

    if (data.keywords) {
      this.meta.updateTag({ name: 'keywords', content: data.keywords });
    }

    if (data.ogUrl) {
      this.meta.updateTag({ property: 'og:url', content: data.ogUrl });
    }

    this.meta.updateTag({ 'http-equiv': 'Content-Language', content: 'en' });
  }

}
