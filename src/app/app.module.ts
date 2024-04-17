import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './parts/side-menu/side-menu.component';
import { LoginComponent } from './components/login/login.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { SettingPageComponent } from './components/setting-page/setting-page.component';
import { SchedulePageComponent } from './components/schedule-page/schedule-page.component';
import { SearchBarComponent } from './parts/search-bar/search-bar.component';
import { ChatPageComponent } from './components/chat-page/chat-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    LoginComponent,
    ProfilePageComponent,
    SettingPageComponent,
    SchedulePageComponent,
    SearchBarComponent,
    ChatPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
