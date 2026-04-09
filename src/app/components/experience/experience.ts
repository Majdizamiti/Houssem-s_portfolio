import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  experienceList = [
    {
      title: 'Graphic Designer',
      company: 'SMILE PRINT & PUB - Mahdia',
      period: '2022 - 2024',
      tasks: [
        'Designed print materials (banners, signage, advertising).',
        'Worked on large-format printing and installation.'
      ]
    },
    {
      title: 'Graphic Designer - Stage PFE',
      company: 'VISIOAD - Sousse',
      period: '2024',
      tasks: [
        'Worked on web and mobile design projects.',
        'Designed marketing visuals and content.'
      ]
    },
    {
      title: 'Graphic Designer',
      company: 'VIORE DIGITAL - Nabeul',
      period: '2025',
      tasks: [
        'Created social media designs and branding content.',
        'Collaborated with marketing team on campaigns.'
      ]
    }
  ];

  educationList = [
    {
      title: 'Graphic Design',
      institution: "Institute superieur d'art et des metiers, Mahdia",
      period: '2022 - 2024'
    },
    {
      title: 'Photoshop training, Attestation',
      institution: 'Youth Complex, Maamoura',
      period: '2024'
    },
    {
      title: 'Baccalaureate in Informatique sciences',
      institution: "L'espoire, Nabeul",
      period: '2025'
    }
  ];

  coreSkills = [
    'Brand Identity', 'Typography', 'Print Design', 'Packaging', 'Illustration',
    'Motion Graphics', 'UI/UX Design', 'Video Editing', 'Social Media'
  ];

  tools = [
    'Adobe Photoshop', 'Adobe Illustrator', 'Adobe After Effects', 'Adobe Premiere Pro', 'Figma'
  ];

  languages = [
    { name: 'French', level: 'Basic' },
    { name: 'English', level: 'Intermediate' },
    { name: 'Arabic', level: 'Native' }
  ];
}
