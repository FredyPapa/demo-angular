import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNavLinksComponent } from './sidebar-nav-links.component';

describe('SidebarNavLinksComponent', () => {
  let component: SidebarNavLinksComponent;
  let fixture: ComponentFixture<SidebarNavLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarNavLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarNavLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
