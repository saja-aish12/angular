import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksInsideComponent } from './tasks-inside.component';

describe('TasksInsideComponent', () => {
  let component: TasksInsideComponent;
  let fixture: ComponentFixture<TasksInsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TasksInsideComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
