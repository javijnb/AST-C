import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteConsultarProductosComponent } from './cliente-consultar-productos.component';

describe('ClienteConsultarProductosComponent', () => {
  let component: ClienteConsultarProductosComponent;
  let fixture: ComponentFixture<ClienteConsultarProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteConsultarProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteConsultarProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
