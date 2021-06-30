import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesAllContinentsComponent } from './cases-all-continents.component';

describe('CasesAllContinentsComponent', () => {
  let component: CasesAllContinentsComponent;
  let fixture: ComponentFixture<CasesAllContinentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasesAllContinentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesAllContinentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
