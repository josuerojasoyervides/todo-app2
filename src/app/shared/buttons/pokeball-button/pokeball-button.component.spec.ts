import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeballButtonComponent } from './pokeball-button.component';

describe('PokeballButtonComponent', () => {
  let component: PokeballButtonComponent;
  let fixture: ComponentFixture<PokeballButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokeballButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokeballButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
