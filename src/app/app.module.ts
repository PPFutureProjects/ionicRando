import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HikesPage } from '../pages/hikes/hikes';
import { HikeDetailsPage } from '../pages/hike-details/hike-details';
import { HikeCurrentPage } from '../pages/hike-current/hike-current';
import { HikeService } from '../services/hike';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HikesPage,
    HikeDetailsPage,
    HikeCurrentPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HikesPage,
    HikeDetailsPage,
    HikeCurrentPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HikeService    
  ]
})
export class AppModule {}
