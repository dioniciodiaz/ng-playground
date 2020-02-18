import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeSearchTabComponent } from './anime-search-tab.component';

describe('AnimeSearchTabComponent', () => {
  let component: AnimeSearchTabComponent;
  let fixture: ComponentFixture<AnimeSearchTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimeSearchTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeSearchTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
