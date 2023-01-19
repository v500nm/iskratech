import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public isReadMore:boolean = true;
  text = `The meaning of the word “Chetana” is consciousness. Consciousness is the essence of all creation. It is
  all-pervasive and infinite. It is the essence that unifies all beings and things. The cultural
  advancement of the human race itself can be attributed to the awareness of this consciousness. This
  consciousness requires a blend of emotional awareness and wisdom, which are the primary goals of
  education. Hence this name was suggested by Late Smt. Kusumtai Chaudhari while forming this profound
  education movement. Chetana, a service oriented educational trust was established on 09th September,
  1969 by Respected Balasaheb Madhukarrao Chaudhari (former Education and Finance Minister, Government of
  Maharashtra and Ex-Speaker, Maharashtra Legislative Assembly)`;
}
