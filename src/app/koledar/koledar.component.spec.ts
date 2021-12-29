import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoledarComponent } from './koledar.component';

describe('KoledarComponent', () => {
  let component: KoledarComponent;
  let fixture: ComponentFixture<KoledarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoledarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoledarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
