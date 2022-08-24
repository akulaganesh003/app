import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempletedrivenformComponent } from './templetedrivenform.component';

describe('TempletedrivenformComponent', () => {
  let component: TempletedrivenformComponent;
  let fixture: ComponentFixture<TempletedrivenformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempletedrivenformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempletedrivenformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
