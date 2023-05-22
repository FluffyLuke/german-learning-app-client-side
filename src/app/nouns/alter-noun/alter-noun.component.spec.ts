import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterNounComponent } from './alter-noun.component';

describe('AlterNounComponent', () => {
  let component: AlterNounComponent;
  let fixture: ComponentFixture<AlterNounComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterNounComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlterNounComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
