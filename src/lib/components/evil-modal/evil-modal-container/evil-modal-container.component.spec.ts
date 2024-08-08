import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvilModalContainerComponent } from './evil-modal-container.component';

describe('EvilModalContainerComponent', () => {
  let component: EvilModalContainerComponent;
  let fixture: ComponentFixture<EvilModalContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvilModalContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvilModalContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
