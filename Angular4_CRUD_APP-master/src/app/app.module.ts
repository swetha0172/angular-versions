import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SandboxComponent } from './components/sandbox/sandbox.component';
import { DataService } from './services/data.service';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'sandbox', component: SandboxComponent }
];

@NgModule({ declarations: [
        AppComponent,
        SandboxComponent,
        HomeComponent,
        AboutComponent,
        NavbarComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)], providers: [DataService, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}

