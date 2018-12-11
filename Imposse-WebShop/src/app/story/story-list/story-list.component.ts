import {Component, Input, OnInit} from '@angular/core';
import {StoryService} from '../../shared/services/story.service';
import {Story} from '../../shared/models/story';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../shared/services/user.service';
import {AuthenticationService} from '../../shared/services/authentication.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {

  stories: Story[];
  currentUser: String;
  storyToUpdate: Story;


  storyForm = new FormGroup({
    title: new FormControl(''),
    text: new FormControl(''),
  });
  storyToUpForm = new FormGroup({
    titleToUp: new FormControl(''),
    textToUp: new FormControl(''),
  });

  constructor(private router: Router,
              private storyService: StoryService,
              private userService: UserService,
              private authenticationService: AuthenticationService,
              ) { }

  ngOnInit() {
    if (this.currentUser == null) {
    this.currentUser = this.authenticationService.getUsername();
      this.refresh();}
    else {this.refresh();}

  }
  refresh() {
    this.storyService.getStories().subscribe(listOfStories => {this.stories = listOfStories;
    });

  }
  createStory() {
    if (this.authenticationService.getUsername() == null){

      this.router.navigate(['/login']);
    }
    else {
      this.userService.getUserByUsername(this.authenticationService.getUsername())
        .subscribe(usertoget => {
          const story = this.storyForm.value;
          story.user = usertoget;
          this.storyService.createStory(story)
            .subscribe(() => {
              this.refresh();
            });
        });
    }
  }
  deleteStory(id: number){

    this.storyService.deleteStory(id).subscribe(() => this.refresh());

  }

  setUpDropDown(story: Story){
    this.storyToUpdate = story;
    this.storyToUpForm.patchValue({
      titleToUp: this.storyToUpdate.title,
      textToUp: this.storyToUpdate.text
    });
  }
  updateStory() {

    this.storyToUpdate = this.storyToUpForm.value;
    console.log(this.storyToUpdate.id);
    this.storyService.updateStory(this.storyToUpdate).subscribe(() => this.refresh());
  }




}
