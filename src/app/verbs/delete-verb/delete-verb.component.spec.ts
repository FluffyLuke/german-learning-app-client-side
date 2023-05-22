import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVerbComponent } from './delete-verb.component';

describe('DeleteVerbComponent', () => {
  let component: DeleteVerbComponent;
  let fixture: ComponentFixture<DeleteVerbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteVerbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteVerbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
