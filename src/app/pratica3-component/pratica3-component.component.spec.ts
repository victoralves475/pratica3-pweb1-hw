import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pratica3ComponentComponent } from './pratica3-component.component';

describe('Pratica3ComponentComponent', () => {
  let component: Pratica3ComponentComponent;
  let fixture: ComponentFixture<Pratica3ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Pratica3ComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pratica3ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
