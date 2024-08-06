import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EviluiLibComponent } from './evilui-lib.component';

describe('EviluiLibComponent', () => {
  let component: EviluiLibComponent;
  let fixture: ComponentFixture<EviluiLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EviluiLibComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EviluiLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
