import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VreatarticleComponent } from './vreatarticle.component';

describe('VreatarticleComponent', () => {
  let component: VreatarticleComponent;
  let fixture: ComponentFixture<VreatarticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VreatarticleComponent]
    });
    fixture = TestBed.createComponent(VreatarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
