import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { ListProviderComponent } from './list-provider/list-provider.component';
import { LoginComponent } from './login/login.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthgaurdService } from './services/authgaurd.service';
import { RegistrationComponent } from './registration/registration.component';
const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "app-navbar" },
  { path: "listProvider", component: ListProviderComponent, canActivate: [AuthgaurdService] },
  { path: "addProvider", component: AddProviderComponent, canActivate: [AuthgaurdService] },
  { path: "updateProvider/:id", component: UpdateProviderComponent, canActivate: [AuthgaurdService] },
  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent, canActivate: [AuthgaurdService] },
  { path: 'registration', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
