import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaBarComponent } from './na-bar.component';

describe('NaBarComponent', () => {
  let component: NaBarComponent;
  let fixture: ComponentFixture<NaBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
