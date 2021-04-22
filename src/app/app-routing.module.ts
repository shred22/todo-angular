import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistraionComponent } from './registraion/registraion.component';
import { RouteGuardServiceService } from './service/route-guard-service.service';
import { UpdateTodoComponent } from './update-todo/update-todo.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'', component: LoginComponent},
  {path:'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuardServiceService]},
  {path:'todos', component: ListTodosComponent, canActivate:[RouteGuardServiceService]},
  {path:'logout', component: LogoutComponent, canActivate:[RouteGuardServiceService]},
  {path:'todos/:id', component: UpdateTodoComponent, canActivate:[RouteGuardServiceService]},
  {path:'reg', component: RegistraionComponent},
  {path:'**', component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
