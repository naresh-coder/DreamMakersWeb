import { Component, OnInit } from '@angular/core';
import {SkillsService} from './skills.service';
import {Skills} from './skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  providers: [SkillsService]
})

export class SkillsComponent implements OnInit {

  private skills: Skills;

  constructor(private skillsService: SkillsService) { }

  ngOnInit() {
    this.skillsService.getSkills()
      .subscribe(data => this.skills = data);
  }

}
