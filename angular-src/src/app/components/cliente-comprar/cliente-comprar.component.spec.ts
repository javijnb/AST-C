import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteComprarComponent } from './cliente-comprar.component';

describe('ClienteComprarComponent', () => {
  let component: ClienteComprarComponent;
  let fixture: ComponentFixture<ClienteComprarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteComprarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteComprarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
