import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';
import {NotificationsPageModule} from '../notifications/notifications.module'
import {ExplorePageModule} from '../explore/explore.module'
import {TopicDetailsPageModule} from '../topic-details/topic-details.module'
const routes: Routes = [
  {
    path: 'tabs',
    component: DashboardPage,
    children: [
      {
        path:'home',
        children:[
          { path:'',
            loadChildren:'../home/home.module#HomePageModule'
          },
          {
            path:':topicId',
            loadChildren:'../topic-details/topic-details.module#TopicDetailsPageModule'
          }
      ]
      },
      {
        path:'explore',
        children:[
          { path:'',
            loadChildren:'../explore/explore.module#ExplorePageModule'
          }
      ]
      },
      {
        path:'notifications',
        children:[
          { path:'',
            loadChildren:'../notifications/notifications.module#NotificationsPageModule'
          }
      ]
      }
      
    ]
  },
  {
    path:'',
    redirectTo:'/dashboard/tabs/',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
