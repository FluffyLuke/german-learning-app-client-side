import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowVerbsComponent } from './show-verbs.component';

describe('ShowVerbsComponent', () => {
  let component: ShowVerbsComponent;
  let fixture: ComponentFixture<ShowVerbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowVerbsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowVerbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
