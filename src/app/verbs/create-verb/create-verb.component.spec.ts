import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVerbComponent } from './create-verb.component';

describe('CreateVerbComponent', () => {
  let component: CreateVerbComponent;
  let fixture: ComponentFixture<CreateVerbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVerbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateVerbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
