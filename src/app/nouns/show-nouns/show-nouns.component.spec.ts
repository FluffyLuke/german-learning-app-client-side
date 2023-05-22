import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNounsComponent } from './show-nouns.component';

describe('ShowNounsComponent', () => {
  let component: ShowNounsComponent;
  let fixture: ComponentFixture<ShowNounsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowNounsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowNounsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
