import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'my-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.scss',
})
export class MyComponent {}
