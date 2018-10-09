import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbCharacterDetailComponent } from './db-character-detail.component';

describe('DbCharacterDetailComponent', () => {
  let component: DbCharacterDetailComponent;
  let fixture: ComponentFixture<DbCharacterDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbCharacterDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbCharacterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
