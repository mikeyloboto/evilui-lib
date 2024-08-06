import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvilTaglistComponent } from './evil-taglist.component';

describe('TagListComponent', () => {
  let component: EvilTaglistComponent;
  let fixture: ComponentFixture<EvilTaglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvilTaglistComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EvilTaglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
