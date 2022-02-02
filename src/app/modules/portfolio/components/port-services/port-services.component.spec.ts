import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortServicesComponent } from './port-services.component';

describe('PortServicesComponent', () => {
  let component: PortServicesComponent;
  let fixture: ComponentFixture<PortServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
