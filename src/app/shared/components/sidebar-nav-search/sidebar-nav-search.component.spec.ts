import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNavSearchComponent } from './sidebar-nav-search.component';

describe('SidebarNavSearchComponent', () => {
  let component: SidebarNavSearchComponent;
  let fixture: ComponentFixture<SidebarNavSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarNavSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarNavSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
