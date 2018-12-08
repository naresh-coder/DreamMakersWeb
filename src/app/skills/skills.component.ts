import { Component, OnInit } from '@angular/core';
import {SkillsService} from './skills.service';
import {Skills} from './skills';
import {Employee} from '../employee/employee';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  providers: [SkillsService]
})

export class SkillsComponent implements OnInit {

  private skills: Skills[];

  constructor(private skillsService: SkillsService) { }

  ngOnInit() {
    /*this.skillsService.getSkills()
      .subscribe(data => this.skills = data);*/
    this.skills = <Skills[]>
      [{'skillId': 1, 'name': 'reactJs', 'version': '2', 'description': ''},
        {'skillId': 2, 'name': 'Spring Boot', 'version': '3', 'description': ''},
        {'skillId': 3, 'name': 'Core Java', 'version': '8', 'description': ''}];
  }

  newSkill() {
    /*this.skillsService.addSkill(this.skills)
      .subscribe(
        skills => this.skills = skills
      );
    window.history.back();*/
  }

}
