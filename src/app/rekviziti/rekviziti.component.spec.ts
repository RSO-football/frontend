import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RekvizitiComponent } from './rekviziti.component';

describe('RekvizitiComponent', () => {
  let component: RekvizitiComponent;
  let fixture: ComponentFixture<RekvizitiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RekvizitiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RekvizitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
