import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'company-info', loadChildren: './company-info/company-info.module#CompanyInfoPageModule' },
  { path: 'contact-us', loadChildren: './contact-us/contact-us.module#ContactUsPageModule' },
  { path: 'speciality', loadChildren: './speciality/speciality.module#SpecialityPageModule' },
  { path: 'location', loadChildren: './location/location.module#LocationPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'career', loadChildren: './career/career.module#CareerPageModule' },
  { path: 'franchise', loadChildren: './franchise/franchise.module#FranchisePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
