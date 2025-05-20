import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelParceiroComponent } from './painel-parceiro.component';

describe('PainelParceiroComponent', () => {
  let component: PainelParceiroComponent;
  let fixture: ComponentFixture<PainelParceiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainelParceiroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainelParceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
