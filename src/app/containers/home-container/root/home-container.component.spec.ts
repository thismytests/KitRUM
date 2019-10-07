import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';


// sections
import {HeaderSectionModule} from 'app/commons/sections/header-section';
import {ContentSectionModule} from 'app/commons/sections/content-section';

// tested entity
import {HomeContainerComponent} from './home-container.component';
import {RouterTestingModule} from '@angular/router/testing';

const sections = [
  HeaderSectionModule,
  ContentSectionModule,
];

describe('HomeContainerComponent', () => {
  let component: HomeContainerComponent;
  let fixture: ComponentFixture<HomeContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        // sections
        ...sections,
        // mock routing
        RouterTestingModule,
      ],
      declarations: [HomeContainerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
