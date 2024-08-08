import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvilTabsComponent } from './evil-tabs.component';

describe('EvilTabsComponent', () => {
  let component: EvilTabsComponent;
  let fixture: ComponentFixture<EvilTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvilTabsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvilTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
