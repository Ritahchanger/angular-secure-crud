import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetaskComponent } from './createtask.component';

describe('CreatetaskComponent', () => {
  let component: CreatetaskComponent;
  let fixture: ComponentFixture<CreatetaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatetaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatetaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
