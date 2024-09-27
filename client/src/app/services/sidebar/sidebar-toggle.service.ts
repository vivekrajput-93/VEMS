// sidebar-toggle.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarToggleService {
  private sidebarVisible = new BehaviorSubject<boolean>(false);

  toggleSidebar() {
    this.sidebarVisible.next(!this.sidebarVisible.value);
  }

  getSidebarState() {
    return this.sidebarVisible.asObservable();
  }
}
