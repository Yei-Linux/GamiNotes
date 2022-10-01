import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'account',
        loadChildren: () =>
          import('./modules/account/account.module').then(
            (m) => m.AccountModule
          ),
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
        data: { breadcrumb: 'My Topics' },
      },
      {
        path: 'topics/:id/notes',
        loadChildren: () =>
          import('./modules/notes/notes.module').then((m) => m.NotesModule),
        data: { breadcrumb: 'My Notes' },
      },
      {
        path: 'public',
        loadChildren: () =>
          import('./modules/public/public.module').then((m) => m.PublicModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
