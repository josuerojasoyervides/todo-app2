import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstractButtonComponent } from './substract-button.component';

describe('SubstractButtonComponent', () => {
  let component: SubstractButtonComponent;
  let fixture: ComponentFixture<SubstractButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubstractButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubstractButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
