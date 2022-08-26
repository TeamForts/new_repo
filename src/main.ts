import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {ruLocale} from "./locale";
import {loadMessages, locale} from "devextreme/localization";
import themes from "devextreme/ui/themes";

loadMessages(ruLocale);
locale('ru-RU');
if (environment.production) {
  enableProdMode();
}

themes.initialized(() => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
});

