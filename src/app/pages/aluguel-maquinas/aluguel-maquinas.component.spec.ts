import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AluguelMaquinasComponent } from './aluguel-maquinas.component';

describe('AluguelMaquinasComponent', () => {
  let component: AluguelMaquinasComponent;
  let fixture: ComponentFixture<AluguelMaquinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AluguelMaquinasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AluguelMaquinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
