import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  skills = [
    {
      name: 'Brand Identity',
      description: 'Logos, guidelines, and visual systems',
      icon: '◆'
    },
    {
      name: 'Print Design',
      description: 'Posters, packaging, and editorial',
      icon: '▣'
    },
    {
      name: 'Digital Design',
      description: 'Web, mobile, and social media',
      icon: '◈'
    },
    {
      name: 'Motion Graphics',
      description: 'Animation, video, and transitions',
      icon: '▲'
    },
    {
      name: 'UI/UX Design',
      description: 'Interfaces, wireframes, and prototypes',
      icon: '◎'
    }
  ];
}
