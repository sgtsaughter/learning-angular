import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbCharacterComponent } from './db-character.component';

describe('DbCharacterComponent', () => {
  let component: DbCharacterComponent;
  let fixture: ComponentFixture<DbCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
