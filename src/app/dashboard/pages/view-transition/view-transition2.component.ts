import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `

    <app-title title="View Transition 2"/>

    <section class="flex justify-end">

      <img 
        srcset="https://picsum.photos/200/300" 
        alt="Picsum"
        width="200"
        height="300"
        style="view-transition-name: hero1"

      />

      <div 
      style="view-transition-name: hero2"
      class="fixed bottom-16 right-10 bg-blue-700 w-32 h-32 rounded">

      </div>

    </section>  

  `,
  styles: ``
})
export default class ViewTransitionComponent {

}
