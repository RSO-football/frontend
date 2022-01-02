import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IgriscaComponent} from './igrisca/igrisca.component';
import {IgralciComponent} from './igralci/igralci.component';
import {PostavkeComponent} from './postavke/postavke.component';
import {UporabnikiComponent} from './uporabniki/uporabniki.component';
import { KoledarComponent } from './koledar/koledar.component';
import {RekvizitiComponent} from './rekviziti/rekviziti.component';

const routes: Routes = [
  {path: 'igrisca', component: IgriscaComponent},
  {path: 'uporabniki', component: UporabnikiComponent},
  {path: 'igralci', component: IgralciComponent},
  {path: 'postavke', component: PostavkeComponent},
  {path: 'koledar/:igrisceId', component: KoledarComponent},
  {path: 'rekviziti', component: RekvizitiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
