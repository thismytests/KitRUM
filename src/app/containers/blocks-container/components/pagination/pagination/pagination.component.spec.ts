import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PaginationComponent} from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe(`method 'definePagesCount'`, () => {
    it(`should be defined`, () => {
      expect(component.definePagesCount).toBeDefined();
    });

    it(`should define pages count`, () => {
      expect(component.definePagesCount(20, 5)).toBe(4);
      expect(component.definePagesCount(21, 7)).toBe(3);
    });

    it(`should make rouning for pages count if it is not Prime number`, () => {
      expect(component.definePagesCount(21, 7)).toBe(3);
      expect(component.definePagesCount(22, 7)).toBe(4);
      expect(component.definePagesCount(20, 7)).toBe(3);
    });
  });


  describe(`method 'createAndFillArray`, () => {
    it(`should be defined`, () => {
      expect(component.createAndFillArray).toBeDefined();
    });

    it(`should create array with length from param`, () => {
      expect(component.createAndFillArray(10).length).toBe(10);
    });
  });
});
