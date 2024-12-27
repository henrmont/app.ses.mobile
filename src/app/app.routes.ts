import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { authGuard } from './guards/auth.guard';
import { verificationGuard } from './guards/verification.guard';
import { noAuthGuard } from './guards/no-auth.guard';
import { userResolver } from './resolvers/user.resolver';
import { permissionResolver } from './resolvers/permission.resolver';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/auth/auth.page').then( m => m.AuthPage),
        canActivate: [authGuard]
      },
      {
        path: 'verification',
        loadComponent: () => import('./pages/auth/verification/verification.page').then( m => m.VerificationPage),
        canActivate: [noAuthGuard]
      },
    ]
  },
  {
    path: 'app',
    component: AppLayoutComponent,
    canActivateChild: [verificationGuard],
    resolve: {user: userResolver, permission: permissionResolver},
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () => import('./pages/app/home/home.page').then( m => m.HomePage),
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./pages/app/dashboard/dashboard.page').then( m => m.DashboardPage)
      },
      {
        path: 'notifications',
        loadComponent: () => import('./pages/app/notifications/notifications.page').then( m => m.NotificationsPage)
      },
      {
        path: 'apps',
        loadComponent: () => import('./pages/app/apps/apps.page').then( m => m.AppsPage)
      },
      {
        path: 'profile',
        loadComponent: () => import('./pages/app/profile/profile.page').then( m => m.ProfilePage)
      },
      {
        path: 'chat',
        loadComponent: () => import('./pages/app/chat/chat.page').then( m => m.ChatPage)
      },
      {
        path: 'admin',
        loadComponent: () => import('./pages/app/admin/admin.page').then( m => m.AdminPage)
      },
      {
        path: 'about',
        loadComponent: () => import('./pages/app/about/about.page').then( m => m.AboutPage)
      },
    ]
  },

];
