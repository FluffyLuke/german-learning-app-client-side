import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNounComponent } from './create-noun.component';

describe('CreateNounComponent', () => {
  let component: CreateNounComponent;
  let fixture: ComponentFixture<CreateNounComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNounComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNounComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
