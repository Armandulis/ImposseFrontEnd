import { Component, OnInit } from '@angular/core';
import { StoryService } from '../../shared/services/story.service';
import { Story } from '../../shared/models/story';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {


  stories: Story[];

  storyForm = new FormGroup({
    title: new FormControl(''),
    text: new FormControl(''),
  });



  constructor(private storyService: StoryService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.storyService.getStories().subscribe(listOfStories => {this.stories = listOfStories; } );
  }
  createStory() {

    const story = this.storyForm.value ;

    this.storyService.createStory(story).subscribe(() => {this.refresh(); } );
  }



}
