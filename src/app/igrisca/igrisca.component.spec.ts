import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgriscaComponent } from './igrisca.component';

describe('IgriscaComponent', () => {
  let component: IgriscaComponent;
  let fixture: ComponentFixture<IgriscaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgriscaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgriscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
