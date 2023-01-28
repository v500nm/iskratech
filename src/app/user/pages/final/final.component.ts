import { Component } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.scss']
})
export class FinalComponent {
//   //random#0toSize

// const getRandomNumber = function(size:any){
//   return Math.floor(Math.random() * size);
// };

// //Calculate distance between click event and target
// const getDistance = function(event:any) {
//   const diffX = event.offsetX - target.x;
//   const diffY = event.offsetY - target.y;
//   return Math.sqrt((diffX * diffY) + (diffY * diffX));
// };

// //notify distance
// const getDistanceHint = function(distance:any){
//   if(distance<10){
//     return "BOILING HOT!!!";
//   } else if (distance < 20) {return "Really Hot";} else if (distance < 40){return "Hot";}else if (distance < 80){return "Warm";}else if (distance < 160){return "Cold";}else if (distance <320){return "Really Cold";}else if (distance < 640){return "Really REALLY cold - Brrrrr";}else{
//     return "FREEZING!!!";
//   }
// };

// //variables

// const width = 400;
// const height = 400;
// const clicks = 0;
// const clickLimit = 20;

// //random target treasure thing
// const target = {
//   x: this.getRandomNumber(this.width),
//   y: this.getRandomNumber(this.height)
// };

// //Add a click handler to the img event
// $("#map").click(function(event){
//                 clicks++;
                
//                 if (clicks > clickLimit){
//   alert("GAME OVER");
//   return;
// }

// //get distance between click
// var distance = getDistance(event, target);

// //convert distance to hint
// var distanceHint = getDistanceHint(distance);

// //updating distance with new hint
// $("#distance").text(distanceHint);

// //update click remaining with click remaining
// $("#clicks-remaining").text(clickLimit - clicks);

// //if click was close, win
// if(distance < 30){
//   alert("YAY! You found the treasure in" + clicks + "clicks!!!");
// }
// });

}
