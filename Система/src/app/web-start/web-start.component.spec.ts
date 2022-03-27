import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebStartComponent } from './web-start.component';

describe('WebStartComponent', () => {
  let component: WebStartComponent;
  let fixture: ComponentFixture<WebStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
