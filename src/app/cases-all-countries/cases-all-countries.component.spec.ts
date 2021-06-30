import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesAllCountriesComponent } from './cases-all-countries.component';

describe('CasesAllCountriesComponent', () => {
  let component: CasesAllCountriesComponent;
  let fixture: ComponentFixture<CasesAllCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasesAllCountriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesAllCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
