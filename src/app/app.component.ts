import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showForm = false;

  toggleForm() {
    this.showForm = !this.showForm;
  }

  title = 'ArtyAgency';
}
