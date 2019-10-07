import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

// routing
import {RouterTestingModule} from '@angular/router/testing';


// tested entity
import {HeaderSectionComponent} from './header-section.component';
import {pagesUrl} from '@env/environment';

describe('HeaderSectionComponent', () => {
  let component: HeaderSectionComponent;
  let fixture: ComponentFixture<HeaderSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      providers: [
        {
          provide: pagesUrl,
          useValue: pagesUrl
        }
      ],
      declarations: [HeaderSectionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
