import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteElimCompraComponent } from './cliente-elim-compra.component';

describe('ClienteElimCompraComponent', () => {
  let component: ClienteElimCompraComponent;
  let fixture: ComponentFixture<ClienteElimCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteElimCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteElimCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
