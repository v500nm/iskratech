import { Component } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent {
  win = false;
  lose = false;
  a = document.getElementById('text_a') as HTMLDivElement | any
  myFunction(value:string) {
    // const ab = prompt("Enter the text")
    console.log(value)
    const img1 = document.getElementById('img1') as HTMLDivElement | any,
      answer = document.getElementById('answer') as HTMLDivElement | any,
      img2 = document.getElementById('img2') as HTMLDivElement | any;

    if (value.toLowerCase()== 'pendrive') {
      this.win = true;
      this.lose = false;
      answer.innerHTML = 'Correct!';
    } else {
      this.lose = true;
      this.win = false;
      answer.innerHTML = 'You are Wrong!';
    }
  }
}
