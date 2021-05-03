import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteConsultarCompraComponent } from './cliente-consultar-compra.component';

describe('ClienteConsultarCompraComponent', () => {
  let component: ClienteConsultarCompraComponent;
  let fixture: ComponentFixture<ClienteConsultarCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteConsultarCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteConsultarCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
