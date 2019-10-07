import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocksComponent } from './blocks.component';
import {HeaderSectionModule} from '@app/commons/sections/header-section';
import {RouterTestingModule} from '@angular/router/testing';

describe('BlocksComponent', () => {
  let component: BlocksComponent;
  let fixture: ComponentFixture<BlocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocksComponent ],
      imports: [
        HeaderSectionModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
