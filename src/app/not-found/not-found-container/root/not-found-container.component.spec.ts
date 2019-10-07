import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

// sections
import {HeaderSectionModule} from 'app/commons/sections/header-section';
import {ContentSectionModule} from 'app/commons/sections/content-section';

// children modules
import {NotFoundModule} from '../../not-found-component/';

// tested entity
import {NotFoundContainerComponent} from './not-found-container.component';
import {RouterTestingModule} from '@angular/router/testing';

const sections: Array<any> = [
  HeaderSectionModule,
  ContentSectionModule
];

describe('NotFoundContainerComponent', () => {
  let component: NotFoundContainerComponent;
  let fixture: ComponentFixture<NotFoundContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ...sections,
        NotFoundModule],
      declarations: [NotFoundContainerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
