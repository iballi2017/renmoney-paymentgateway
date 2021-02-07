import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormResponseModalComponent } from './form-response-modal.component';

describe('FormResponseModalComponent', () => {
  let component: FormResponseModalComponent;
  let fixture: ComponentFixture<FormResponseModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormResponseModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormResponseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
