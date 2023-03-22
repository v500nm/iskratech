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
    this.isLoading = false;
    this.main = true;
    setTimeout(
      () => (this.isLoading = false,this.main = true),
      2000,
    );
  }
}
