import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.navigate(['/login']); //redirect to login page after app starts
  }
}
