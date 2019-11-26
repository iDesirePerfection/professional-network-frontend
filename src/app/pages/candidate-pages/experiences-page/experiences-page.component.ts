import { Component, OnInit } from '@angular/core';
import { ExperiencesService } from 'src/app/services/candidate-services/experiences.service';
import { Experience } from 'src/app/services/candidate-services/models/experience.model';

@Component({
  selector: 'app-experiences-page',
  templateUrl: './experiences-page.component.html',
  styleUrls: ['./experiences-page.component.scss']
})
export class ExperiencesPageComponent implements OnInit {

  experiences: Experience[] = [];


  constructor(private experiencesService: ExperiencesService) { }

  ngOnInit() {
    this.experiencesService.getExperiencesByCandidateId('1').subscribe(exps => {
      this.experiences = exps;
    });
    
  }

  addExperience()
  {
    this.experiencesService.addExperienceToCandidate('experience from angular222','professional','2015-02-02','2017-02-02',1).subscribe(exp=>{
      console.log(exp);
      this.experiences.push(exp);
    });
    
  }

  deleteExperience(id:number)
  {
    var i;
    for(i=0;i<this.experiences.length;i++)
    {
        if(this.experiences[i].id==id)
        {
          this.experiences.splice(i,1);
          break;
        }
    }

    this.experiencesService.deleteExperience(id.toString(),'1').subscribe();
  }





}
