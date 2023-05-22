import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteNounComponent } from './delete-noun.component';

describe('DeleteNounComponent', () => {
  let component: DeleteNounComponent;
  let fixture: ComponentFixture<DeleteNounComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteNounComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteNounComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
