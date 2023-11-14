import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerAgremiadosPage } from './ver-agremiados.page';

describe('VerAgremiadosPage', () => {
  let component: VerAgremiadosPage;
  let fixture: ComponentFixture<VerAgremiadosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VerAgremiadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
