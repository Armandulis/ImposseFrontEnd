import {Component, OnInit} from '@angular/core';
import {Product} from '../shared/models/product';
import {ProductService} from '../shared/services/product.service';
import {StoryService} from '../shared/services/story.service';
import {Story} from '../shared/models/story';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {

  randomProduct1: Product;
  randomProduct2: Product;
  randomStory1: Story;
  randomStory2: Story;
  constructor(private productService: ProductService, private storyService: StoryService) { }

  ngOnInit() {
    this.getRandomProducts();
    this.getRandomStories();
  }

  getRandomProducts(){
    this.productService.getAllProducts().subscribe( products =>{
      this.randomProduct1 = products[Math.random() * products.length | 0];
      this.randomProduct2 = products[Math.random() * products.length | 0];
      while (this.randomProduct2 === this.randomProduct1){
        this.randomProduct2 = products[Math.random() * products.length | 0];
      }
    });
  }

  getRandomStories(){

    this.storyService.getStories().subscribe(story =>{
      this.randomStory1 = story[Math.random() * story.length | 0];
      this.randomStory2 = story[Math.random() * story.length | 0];
      while (this.randomStory2 === this.randomStory1){
        this.randomStory2 = story[Math.random() * story.length | 0];
      } });
  }

}
