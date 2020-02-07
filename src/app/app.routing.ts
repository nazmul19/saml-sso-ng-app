import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import { SamlSuccessComponent } from "./saml-success/saml-success.component";
import { SamlFailureComponent } from "./saml-failure/saml-failure.component";

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'saml-success', component: SamlSuccessComponent },
    { path: 'saml-failure', component: SamlFailureComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes, { useHash: true });