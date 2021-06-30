import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CasesComponent } from './Cases/cases.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CasesDisplayComponent } from './cases-display/cases-display.component';
import { HttpClientModule } from '@angular/common/http';
import { CasesAllCountriesComponent } from './cases-all-countries/cases-all-countries.component';
import { CasesAllContinentsComponent } from './cases-all-continents/cases-all-continents.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  { path: '', redirectTo: '/updates', pathMatch: 'full'},
  { path: 'updates', component: CasesDisplayComponent },
  { path: 'countries', component: CasesAllCountriesComponent },
  { path: 'continents', component: CasesAllContinentsComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    CasesComponent,
    CasesDisplayComponent,
    CasesAllCountriesComponent,
    CasesAllContinentsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
