import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeExample2Component } from './tree-example2.component';

describe('TreeExample2Component', () => {
  let component: TreeExample2Component;
  let fixture: ComponentFixture<TreeExample2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeExample2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeExample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
