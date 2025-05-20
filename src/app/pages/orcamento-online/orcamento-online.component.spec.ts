import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcamentoOnlineComponent } from './orcamento-online.component';

describe('OrcamentoOnlineComponent', () => {
  let component: OrcamentoOnlineComponent;
  let fixture: ComponentFixture<OrcamentoOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrcamentoOnlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrcamentoOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
