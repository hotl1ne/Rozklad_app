import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideMenuComponent } from './parts/side-menu/side-menu.component';
import { LoginComponent } from './components/login/login.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { SettingPageComponent } from './components/setting-page/setting-page.component';
import { SchedulePageComponent } from './components/schedule-page/schedule-page.component';
import { ChatPageComponent } from './components/chat-page/chat-page.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent 
  },
  {
    path: "Profile",
    component: ProfilePageComponent
  },
  {
    path: "Setting",
    component: SettingPageComponent
  },
  {
    path: "Chats",
    component: ChatPageComponent
  },
  {
    path: "Schedule",
    component: SchedulePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
