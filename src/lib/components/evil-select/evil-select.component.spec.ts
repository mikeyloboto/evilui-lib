import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvilSelectComponent } from './evil-select.component';

describe('EvilSelectComponent', () => {
  let component: EvilSelectComponent;
  let fixture: ComponentFixture<EvilSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvilSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvilSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
