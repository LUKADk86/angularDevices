import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DeviceComponent } from './device/device.component';

import { DeviceService } from './services/device.service';
import { AuthComponent } from './auth/auth.component';
import { DeviceViewComponent } from './device-view/device-view.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SigleDeviceComponent } from './sigle-device/sigle-device.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';
import { EditDeviceComponent } from './edit-device/edit-device.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './services/user.service';
import { NewUserComponent } from './new-user/new-user.component';



const appRoutes: Routes = [
  { path: 'devices', canActivate: [AuthGuard],component: DeviceViewComponent},
  { path: 'devices/:id', canActivate: [AuthGuard], component: SigleDeviceComponent},
  { path: 'edit', canActivate: [AuthGuard], component: EditDeviceComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'users', component: UserListComponent},
  { path: 'new', component: NewUserComponent},
  { path: '', component: DeviceViewComponent},
  { path: 'not-found', component: FourOhFourComponent},
  { path: '**', redirectTo: '/not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent,
    AuthComponent,
    DeviceViewComponent,
    SigleDeviceComponent,
    FourOhFourComponent,
    EditDeviceComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DeviceService,
    AuthService, 
    AuthGuard, 
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
