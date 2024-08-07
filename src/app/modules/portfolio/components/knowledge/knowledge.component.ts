import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {

  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'icons/knowledge/html5.svg',
      alt: 'icone de conhecimento de html5',
    },
    {
      src: 'icons/knowledge/css3.svg',
      alt: 'icone de conhecimento de html5',
    },
    {
      src: 'icons/knowledge/javascript.svg',
      alt: 'icone de conhecimento de html5',
    },
    {
      src: 'icons/knowledge/angular.svg',
      alt: 'icone de conhecimento de html5',
    },
    {
      src: 'icons/knowledge/nodejs.svg',
      alt: 'icone de conhecimento de html5',
    },

  ]);
}
