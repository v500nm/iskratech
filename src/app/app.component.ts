import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'iskraTech';
  isLoading = false;
  main =true;
  ngOnInit(): void {
    this.isLoading = true;
    this.main = false;
    setTimeout(
      () => (this.isLoading = false,this.main = true),
      2000,
    );
  }
}
