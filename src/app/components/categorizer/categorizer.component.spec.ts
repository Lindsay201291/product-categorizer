import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorizerComponent } from './categorizer.component';

describe('CategorizerComponent', () => {
  let component: CategorizerComponent;
  let fixture: ComponentFixture<CategorizerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorizerComponent]
    });
    fixture = TestBed.createComponent(CategorizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
