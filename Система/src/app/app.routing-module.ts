import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {WebStartComponent} from "./web-start/web-start.component";
import {UserManualComponent} from "./user-manual/user-manual.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {CalculatorComponent} from "./public/calculator/calculator.component";
import {BrandComparisonComponent} from "./public/brand-comparison/brand-comparison.component";
import {CompetitorAnalysisComponent} from "./public/competitor-analysis/competitor-analysis.component";
import {MarketShareComponent} from "./public/market-share/market-share.component";
import {TrendAnalysisComponent} from "./public/trend-analysis/trend-analysis.component";

const routes: Routes = [
  {path: 'user-manual', component: UserManualComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'brand-comparison', component: BrandComparisonComponent},
  {path: 'competitor-analysis', component: CompetitorAnalysisComponent},
  {path: 'market-share', component: MarketShareComponent},
  {path: 'trend-analysis', component: TrendAnalysisComponent},
  {path: '**', component: WebStartComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
