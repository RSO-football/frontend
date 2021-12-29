import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgralciComponent } from './igralci.component';

describe('IgralciComponent', () => {
  let component: IgralciComponent;
  let fixture: ComponentFixture<IgralciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgralciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgralciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
