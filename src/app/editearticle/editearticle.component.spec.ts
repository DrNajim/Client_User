import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditearticleComponent } from './editearticle.component';

describe('EditearticleComponent', () => {
  let component: EditearticleComponent;
  let fixture: ComponentFixture<EditearticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditearticleComponent]
    });
    fixture = TestBed.createComponent(EditearticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
