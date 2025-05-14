import { Route } from '@angular/router';
import { UserComponent } from './user/user.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  {
    path: 'user',
    component: UserComponent,
  },
];
