import { FestoWidgetModule } from './shared/components/widget/widget.module';
import { DashboardService } from './services/dashboard.service';
import { environment } from './../../../../src/environments/environment.prod';
import { BaseApiService } from './services/base-api.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FestoDashboardComponent } from './festo-dashboard.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { Observable, from } from 'rxjs';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import localeCs from '@angular/common/locales/cs';
import { reducers, AppState, metaReducers } from './reducers';
import { DashboardEffects } from './effects/dashboard.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

registerLocaleData(localeDe);
registerLocaleData(localeCs);

export class HashTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    if (lang.indexOf('-')) {
      lang = lang.slice(0, 2);
    }
    return from(`../assets/i18n/${lang}.json`);
  }
}


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: HashTranslateLoader
      }
    }),
    StoreModule.forRoot(reducers, { metaReducers: metaReducers }),
    EffectsModule.forRoot([
      DashboardEffects
    ]),
    StoreDevtoolsModule.instrument(),
    FestoWidgetModule
  ],
  declarations: [FestoDashboardComponent],
  exports: [FestoDashboardComponent],
  providers: [BaseApiService, DashboardService]
})
export class FestoDashboardModule { }
