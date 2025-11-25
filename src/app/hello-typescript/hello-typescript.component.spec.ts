import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloTypescriptComponent } from './hello-typescript.component';

describe('HelloTypescriptComponent', () => {
  let component: HelloTypescriptComponent;
  let fixture: ComponentFixture<HelloTypescriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloTypescriptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelloTypescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
