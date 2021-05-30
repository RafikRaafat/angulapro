import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactdeleteComponent } from './Contactdelete.component';

describe('ContactdeleteComponent', () => {
  let component: ContactdeleteComponent;
  let fixture: ComponentFixture<ContactdeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactdeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactdeleteComponent);
    component = fixture.componentInstance;ContactdeleteComponent
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
