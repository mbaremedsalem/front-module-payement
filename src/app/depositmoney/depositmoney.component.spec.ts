import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositmoneyComponent } from './depositmoney.component';

describe('DepositmoneyComponent', () => {
  let component: DepositmoneyComponent;
  let fixture: ComponentFixture<DepositmoneyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepositmoneyComponent]
    });
    fixture = TestBed.createComponent(DepositmoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
