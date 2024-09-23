import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dynamic-header',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-header.component.html',
  styleUrl: './dynamic-header.component.scss'
})
export class DynamicHeaderComponent {
  @Input() title: string = '';
  @Input() breadcrumb: string = '';
  @Input() addButtonText: string = 'Add';
  @Output() onAdd = new EventEmitter<void>();

  onAddClick() {
    this.onAdd.emit();
  }

}
