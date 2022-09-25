import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'account',
    loadChildren: () =>
      import('./modules/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'topics',
    loadChildren: () =>
      import('./modules/topics/topics.module').then((m) => m.TopicsModule),
  },
  {
    path: 'topics/:id/notes',
    loadChildren: () =>
      import('./modules/notes/notes.module').then((m) => m.NotesModule),
  },
  {
    path: 'public',
    loadChildren: () =>
      import('./modules/public/public.module').then((m) => m.PublicModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
