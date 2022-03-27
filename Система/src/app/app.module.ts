import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WebStartComponent } from './web-start/web-start.component';
import { UserManualComponent } from './user-manual/user-manual.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MarketShareComponent } from './public/market-share/market-share.component';
import { CalculatorComponent } from './public/calculator/calculator.component';
import { BrandComparisonComponent } from './public/brand-comparison/brand-comparison.component';
import { CompetitorAnalysisComponent } from './public/competitor-analysis/competitor-analysis.component';
import { TrendAnalysisComponent } from './public/trend-analysis/trend-analysis.component';
import {AppRoutingModule} from "./app.routing-module";

@NgModule({
  declarations: [
    AppComponent,
    WebStartComponent,
    UserManualComponent,
    AboutUsComponent,
    MarketShareComponent,
    CalculatorComponent,
    BrandComparisonComponent,
    CompetitorAnalysisComponent,
    TrendAnalysisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
