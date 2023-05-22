import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NounsComponent } from './nouns/nouns.component';
import { CreateNounComponent } from './nouns/create-noun/create-noun.component';
import { DeleteNounComponent } from './nouns/delete-noun/delete-noun.component';
import { ShowNounsComponent } from './nouns/show-nouns/show-nouns.component';
import { AlterNounComponent } from './nouns/alter-noun/alter-noun.component';
import { MainComponent } from './main/main.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { VerbsComponent } from './verbs/verbs.component';
import { CreateVerbComponent } from './verbs/create-verb/create-verb.component';
import { AlterVerbComponent } from './verbs/alter-verb/alter-verb.component';
import { DeleteVerbComponent } from './verbs/delete-verb/delete-verb.component';
import { ShowVerbsComponent } from './verbs/show-verbs/show-verbs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NounsComponent,
    CreateNounComponent,
    DeleteNounComponent,
    ShowNounsComponent,
    AlterNounComponent,
    MainComponent,
    VerbsComponent,
    CreateVerbComponent,
    AlterVerbComponent,
    DeleteVerbComponent,
    ShowVerbsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export let appTitle: string = "GermanApp"
export let serverAddres: "127.0.0.1"
