import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFulcrumUiComponent } from './ngx-fulcrum-ui.component';

describe('NgxFulcrumUiComponent', () => {
  let component: NgxFulcrumUiComponent;
  let fixture: ComponentFixture<NgxFulcrumUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxFulcrumUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxFulcrumUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
