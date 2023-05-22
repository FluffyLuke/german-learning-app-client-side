import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterVerbComponent } from './alter-verb.component';

describe('AlterVerbComponent', () => {
  let component: AlterVerbComponent;
  let fixture: ComponentFixture<AlterVerbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterVerbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlterVerbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
