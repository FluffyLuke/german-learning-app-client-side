import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NounsComponent} from "./nouns/nouns.component";
import {CreateNounComponent} from "./nouns/create-noun/create-noun.component";

import {MainComponent} from "./main/main.component";
import {ShowNounsComponent} from "./nouns/show-nouns/show-nouns.component";
import {DeleteNounComponent} from "./nouns/delete-noun/delete-noun.component";
import {AlterNounComponent} from "./nouns/alter-noun/alter-noun.component";
import { VerbsComponent } from './verbs/verbs.component';
import { CreateVerbComponent } from './verbs/create-verb/create-verb.component';
import { ShowVerbsComponent } from './verbs/show-verbs/show-verbs.component';
import { DeleteVerbComponent } from './verbs/delete-verb/delete-verb.component';
import { AlterVerbComponent } from './verbs/alter-verb/alter-verb.component';
const routes: Routes = [
  {path: 'nouns', title: "Nouns", component: NounsComponent, children: [
      {path: "create", title: "Create a noun", component: CreateNounComponent},
      {path: "display", title: "Display nouns", component: ShowNounsComponent},
      {path: "delete", title: "Delete a noun", component: DeleteNounComponent},
      {path: "alter", title: "Alter a noun", component: AlterNounComponent},
      {path: "alter:id", title: "Alter a noun", component: AlterNounComponent},
    ]},
    {path: 'verbs', title: "Verbs", component: VerbsComponent, children: [
      {path: "create", title: "Create a verb", component: CreateVerbComponent},
      {path: "display", title: "Display verbs", component: ShowVerbsComponent},
      {path: "delete", title: "Delete a verb", component: DeleteVerbComponent},
      {path: "alter", title: "Alter a verb", component: AlterVerbComponent},
      {path: "alter:id", title: "Alter a verb", component: AlterVerbComponent},
    ]},
  {path: '**', title: "GermanApp",component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
