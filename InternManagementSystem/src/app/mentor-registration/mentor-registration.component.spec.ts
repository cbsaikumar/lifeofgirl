import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorRegistrationComponent } from './mentor-registration.component';

describe('RegistrationComponent', () => {
  let component: MentorRegistrationComponent;
  let fixture: ComponentFixture<MentorRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
