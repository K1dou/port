import { Component, signal } from '@angular/core';
import { IExperience } from '../../interface/IExperience.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperience[]>([

  {
    summary:{
      strong:"Back-end Especialista",
      p:"ZUP | Set 2020 - Present"
    },
    text:"Desenvolvedor Back-end especializado em Java e Spring. Foco na construção de sistemas escaláveis e APIs eficientes para garantir desempenho e segurança.",
  },

  {
    summary:{
      strong:"Full Stack Developer",
      p:"Everis | Out 2019 - Set 2020"

    },
    text:"Desenvolvedor Fullstack com expertise em Angular, Java e Spring. Trabalho em todas as camadas de um projeto, criando soluções completas e integradas.",
  }





  ]);
}
