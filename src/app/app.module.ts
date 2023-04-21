import { NgModule, Renderer2, RendererFactory2 } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { RegisterComponent } from './components/register/register.component';
import { HTMLService } from './services/html.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { StudentsComponent } from './components/students/students.component';
import { SideBarComponent } from './components/sidebar/sidebar.component';
import { StudentFormComponent } from './components/student-form/student-form.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    LoginComponent,
    RegisterComponent,
    StudentsComponent,
    SideBarComponent,
    StudentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatChipsModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [HTMLService, {
    provide: Renderer2,
    useFactory: (rendererFactory: RendererFactory2) => rendererFactory.createRenderer(null, null),
    deps: [RendererFactory2]
  },
  LoginComponent, {
    provide: JwtHelperService,
    useFactory: (jwtHelperService: JwtHelperService) => new JwtHelperService()
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
