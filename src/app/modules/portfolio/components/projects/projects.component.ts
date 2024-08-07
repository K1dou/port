import { Component, inject, signal } from '@angular/core';
import { IProject } from '../../interface/IProject.interface';

import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDiaLogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogModule } from '@angular/cdk/dialog';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  #dialog = inject(MatDialog);



public arrayProjects = signal<IProject[]>([


  {
    src: "img/projects/vfull.png",
    alt:"",
    title:"Nome Projeto",
    with:"100px",
    heigth:"51px",
    description:"Este projeto é uma aplicação web de gerenciamento de tarefas desenvolvida com Spring Boot. O sistema permite que os usuários criem, editem, excluam e visualizem suas tarefas, além de marcar tarefas como concluídas. Ele oferece uma interface amigável para facilitar a organização pessoal e o acompanhamento de atividades pendentes.",
    links:[
      {
        name:"Conheça o Linkedin",
        href:"https://www.linkedin.com/in/marcelo-henrique-de-jesus-290a37202/"
      }
    ]
  }





])

public openDialog(data:IProject){

  this.#dialog.open(DialogProjectsComponent,{
    data,
    panelClass: EDiaLogPanelClass.PROJECTS
  })

}



}
