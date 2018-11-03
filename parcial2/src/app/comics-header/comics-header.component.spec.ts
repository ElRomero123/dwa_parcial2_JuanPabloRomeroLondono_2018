import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsHeaderComponent } from './comics-header.component';

describe('ComicsHeaderComponent', () => {
  let component: ComicsHeaderComponent;
  let fixture: ComponentFixture<ComicsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
