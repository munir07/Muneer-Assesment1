import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration.component';
import { ThanksComponent } from './components/thanks.component';

const appRoutes = [
    {
        path: 'Home',
        component: RegistrationComponent,
    },
    {
        path: 'Thanks/:name/:gender',
        component: ThanksComponent,
    },
    {
        path: '',
        redirectTo: '/Home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: RegistrationComponent,
    }
];

@NgModule({
    declarations: [

    ],
    imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes)
    ],
    exports: [ RouterModule ],
    providers: []
  })
  export class RoutingModule { }
