import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GitUsersComponent } from "./components/git-users/git-users.component";
import { GitReposComponent } from "./components/git-repos/git-repos.component";

const routes: Routes = [
  {path: '', component: GitUsersComponent},
  {path: 'repos/:username', component: GitReposComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
