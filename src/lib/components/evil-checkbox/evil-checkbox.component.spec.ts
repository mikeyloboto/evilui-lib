import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvilCheckboxComponent } from './evil-checkbox.component';

describe('EvilCheckboxComponent', () => {
  let component: EvilCheckboxComponent;
  let fixture: ComponentFixture<EvilCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvilCheckboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvilCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
