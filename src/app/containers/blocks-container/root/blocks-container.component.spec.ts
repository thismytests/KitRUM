import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RouterTestingModule} from '@angular/router/testing';

// sections
import {HeaderSectionModule} from '@app/commons/sections/header-section';

// components
import {SearchModule} from '../components/search';
import {BlocksModule} from '../components/blocks';
import {PaginationModule} from '../components/pagination';

// sections
import {ContentSectionModule} from '@app/commons/sections/content-section';

// tested component
import {BlocksContainerComponent} from './blocks-container.component';

describe('BlocksContainerComponent', () => {
  let component: BlocksContainerComponent;
  let fixture: ComponentFixture<BlocksContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BlocksContainerComponent],
      imports: [
        RouterTestingModule,

        // sections
        HeaderSectionModule,
        ContentSectionModule,

        //  components
        SearchModule,
        BlocksModule,
        PaginationModule,

      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocksContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
