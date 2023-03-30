import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanguageSwitchingDirective } from './language-switching.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import {TextBoxModule} from '@syncfusion/ej2-angular-inputs';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
@NgModule({
  exports: [],
  declarations: [
    AppComponent,
    LanguageSwitchingDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    RichTextEditorModule,
    TextBoxModule,
    DropDownListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
