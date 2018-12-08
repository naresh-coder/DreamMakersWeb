import { BrowserModule } from '@angular/platform-browser';
import {ModuleWithProviders, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { SkillsComponent } from './skills/skills.component';
import {RouterModule, Routes} from '@angular/router';
import {SearchComponent} from './search/search.component';

const routes: Routes = [
  {path: 'employee', pathMatch: 'full', component: EmployeeComponent },
  {path: 'skills', pathMatch: 'full', component: SkillsComponent },
  {path: 'search', pathMatch: 'full', component: SearchComponent }
];

const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent, EmployeeComponent, SkillsComponent, SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
