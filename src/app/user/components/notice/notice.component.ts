import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss'],
})
export class NoticeComponent implements OnInit {
  noticeView = false;
  ngOnInit(): void {
    this.noticeView = true;
    setTimeout(() => {
      () => (this.noticeView = false);
    }, 2000);
  }
}
