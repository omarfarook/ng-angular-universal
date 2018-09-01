import { RouterModule, Routes } from '@angular/router';

import { TemplateDrivenComponent } from './app/template-driven/template-driven.component';
import { ModelDrivenComponent } from './app/model-driven/model-driven.component';

export const appRoute: Routes = [
{ path: '', pathMatch: 'full', redirectTo: 'template-driven'},
{ path: 'template-driven', component: TemplateDrivenComponent },
{ path: 'model-driven', component: ModelDrivenComponent }
];
