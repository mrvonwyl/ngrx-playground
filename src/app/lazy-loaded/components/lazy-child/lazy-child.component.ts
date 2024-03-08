import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lazy-child',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lazy-child.component.html',
  styleUrl: './lazy-child.component.scss',
})
export class LazyChildComponent {}
