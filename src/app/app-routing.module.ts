import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarticlesComponent } from './listarticles/listarticles.component';
import { VreatarticleComponent } from './vreatarticle/vreatarticle.component';
import { EditearticleComponent } from './editearticle/editearticle.component';

const routes: Routes = [
{path:'',component:ListarticlesComponent},
{path:'create/article', component: VreatarticleComponent},
{path:'edite/article/:articleID', component: EditearticleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
