import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  ngOnInit(): void {
    (function () {
      const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;
      let today:any = new Date(),
          dd = String(today.getDate()).padStart(2, "0"),
          mm = String(today.getMonth() + 1).padStart(2, "0"),
          yyyy = today.getFullYear(),
          nextYear = yyyy + 1,
          dayMonth = "01/27/",
          birthday = dayMonth + yyyy;
      
      today = mm + "/" + dd + "/" + yyyy;
      if (today > birthday) {
        birthday = dayMonth + nextYear;
      }
     
      const countDown = new Date(birthday).getTime(),
          x = setInterval(function() {    
    
            const now = new Date().getTime(),
                  distance = countDown - now;
                  const dayC = document.getElementById("days") as HTMLDivElement|any;
                  const hoursC = document.getElementById("hours") as HTMLDivElement|any;
                  const minutesC = document.getElementById("minutes") as HTMLDivElement|any;
                  const secondsC = document.getElementById("seconds") as HTMLDivElement | any;


              dayC.innerText = Math.floor(distance / (day)),
              hoursC.innerText = Math.floor((distance % (day)) / (hour)),
              minutesC.innerText = Math.floor((distance % (hour)) / (minute)),
              secondsC.innerText = Math.floor((distance % (minute)) / second);
    
            //do something later when date is reached
            if (distance < 0) {
              const headline = document.getElementById("headline") as HTMLDivElement|any;
              const countdown = document.getElementById("countdown") as HTMLDivElement|any;
              const content = document.getElementById("content") as HTMLDivElement|any;
              headline.innerText = "Event Day!";
              countdown.style.display = "none";
              content.style.display = "block";
              clearInterval(x);
            }
            //seconds
          }, 0)
      }());
  }
}
