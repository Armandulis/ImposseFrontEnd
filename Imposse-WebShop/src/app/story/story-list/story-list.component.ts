import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {StoryService} from '../../shared/services/story.service';
import {Story} from '../../shared/models/story';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../shared/services/user.service';
import {AuthenticationService} from '../../shared/services/authentication.service';
import {Router} from '@angular/router';
import {User} from '../../shared/models/user';



@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})

export class StoryListComponent implements OnInit {

  stories: Story[];
  storyToUpdate: Story;
  currentUser: User;


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
      this.getCurrentUser();
    }
    this.refresh();

  }
  refresh() {
    this.storyService.getStories().subscribe(listOfStories => {this.stories = listOfStories;
    });

  }
  createStory() {
    if (this.authenticationService.getUsername() == null){

      this.router.navigate(['/login']);
    }
    else { const story = this.storyForm.value;
      story.user = this.currentUser;
      this.storyService.createStory(story).subscribe(() => {
        this.refresh();

      });
    }
  }
  deleteStory(id: number){

    this.storyService.deleteStory(id).subscribe(() =>
    {this.refresh();
      alert('Story was deleted!');
    });

  }

  setUpDropDown(story: Story){
    this.storyToUpdate = story;
    this.storyToUpForm.patchValue({
      titleToUp: this.storyToUpdate.title,
      textToUp: this.storyToUpdate.text
    });
  }
  updateStory() {
    this.storyToUpdate.text = this.storyToUpForm.get('textToUp').value;
    this.storyToUpdate.title = this.storyToUpForm.get('titleToUp').value;
    this.storyService.updateStory(this.storyToUpdate).subscribe(() =>
    { this.refresh();
      alert('Story was updated!');});

  }

  getCurrentUser(){
    if (this.authenticationService.getUsername() != null){

      this.userService.getUserByUsername(this.authenticationService.getUsername())
        .subscribe(usertoget => {
          this.currentUser = usertoget;
        });
    }

  }




}
