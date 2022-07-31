import { ComponentFixture, TestBed } from '@angular/core/testing';

import { skillsComponent } from './skills.component';

describe('skillsComponent', () => {
  let component: skillsComponent;
  let fixture: ComponentFixture<skillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ skillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(skillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
