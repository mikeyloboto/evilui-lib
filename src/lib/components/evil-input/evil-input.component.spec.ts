import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvilInputComponent } from './evil-input.component';

describe('EvilInputComponent', () => {
  let component: EvilInputComponent;
  let fixture: ComponentFixture<EvilInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvilInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvilInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
