import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bday',
  templateUrl: './bday.component.html',
  styleUrls: ['./bday.component.scss']
})
export class BdayComponent implements OnInit {
  noticeView = false;
  ngOnInit(): void {
    this.noticeView = true;
    setTimeout(() => {
      () => (this.noticeView = false);
    }, 2000);
  }
}
