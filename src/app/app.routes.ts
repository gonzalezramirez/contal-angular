
import { RouterModule, Routes } from '@angular/router';

import {
  AboutComponent,
  HomeComponent,
  ItemComponent
} from "./components/index.paginas";

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'item/:id', component: ItemComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(app_routes);
