import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
  ngOnInit(): void {
    this.count();
  }

  count() {
    var countDownDate = new Date('Jan 28, 2023 08:00:00').getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      const demo = document.getElementById('demo') as HTMLDivElement | any;
      demo.innerText =
        days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        demo.innerHTML = 'EXPIRED';
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    this.count();
  }
}
