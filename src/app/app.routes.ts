import { Route } from '@angular/router'
import { FirstPageComponent } from './components/first-page/first-page.component'

export const routes: Route[] = [

  {
    path: '',
    pathMatch: 'full',
    component: FirstPageComponent
  },

  {
    path: 'messenger',
    loadChildren: './components/messenger/messenger.module#MessengerModule',
  },

]
