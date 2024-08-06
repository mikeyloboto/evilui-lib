import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvilProgressBarComponent } from './evil-progress-bar.component';

describe('EvilProgressBarComponent', () => {
  let component: EvilProgressBarComponent;
  let fixture: ComponentFixture<EvilProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvilProgressBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvilProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
