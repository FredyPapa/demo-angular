import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNavFooterComponent } from './sidebar-nav-footer.component';

describe('SidebarNavFooterComponent', () => {
  let component: SidebarNavFooterComponent;
  let fixture: ComponentFixture<SidebarNavFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarNavFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarNavFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
