import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarticlesComponent } from './listarticles/listarticles.component';
import { VreatarticleComponent } from './vreatarticle/vreatarticle.component';
import { EditearticleComponent } from './editearticle/editearticle.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarticlesComponent,
    VreatarticleComponent,
    EditearticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
