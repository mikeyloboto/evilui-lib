import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvilButtonComponent } from './evil-button.component';

describe('EvilButtonComponent', () => {
  let component: EvilButtonComponent;
  let fixture: ComponentFixture<EvilButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvilButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvilButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
