import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPdfComponent } from './crud-pdf.component';

describe('CrudPdfComponent', () => {
  let component: CrudPdfComponent;
  let fixture: ComponentFixture<CrudPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudPdfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
