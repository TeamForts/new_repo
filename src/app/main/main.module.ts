import {NgModule} from "@angular/core";
import {MainComponent} from "./main.component";
import {RouterModule} from "@angular/router";
import {routes} from "./main.routes";
import {SafePipe} from "./pipes/safe.pipe";
import {
  DxButtonModule,
  DxCheckBoxModule,
  DxDateBoxModule,
  DxMapModule,
  DxTabsModule,
  DxTextBoxModule
} from "devextreme-angular";
import { InitialsPopupComponent } from './components/initials-popup/initials-popup.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { PersonalPopupComponent } from './components/personal-popup/personal-popup.component';
import { YmapPopupComponent } from './components/ymap-popup/ymap-popup.component';
import { RulesPopupComponent } from './components/rules-popup/rules-popup.component';


@NgModule({
  declarations: [
    MainComponent,
    SafePipe,
    InitialsPopupComponent,
    PersonalPopupComponent,
    YmapPopupComponent,
    RulesPopupComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    DxButtonModule,
    DxTextBoxModule,
    DxTabsModule,
    DxMapModule,
    DxDateBoxModule,
    DxCheckBoxModule,
  ],
  providers: [],

  entryComponents: [
    InitialsPopupComponent,
    PersonalPopupComponent,
    RulesPopupComponent
  ],
})


export class MainModule {

}
