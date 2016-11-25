import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const appRoutes: Routes = [
  {
    path: 'card',
    redirectTo: '/card',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/movies',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { preloadingStrategy: PreloadSelectedModules }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [PreloadSelectedModules
  ]
})
export class AppRoutingModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
