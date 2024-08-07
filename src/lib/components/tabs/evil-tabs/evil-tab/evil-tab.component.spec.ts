import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvilTabComponent } from './evil-tab.component';

describe('EvilTabComponent', () => {
  let component: EvilTabComponent;
  let fixture: ComponentFixture<EvilTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvilTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvilTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
