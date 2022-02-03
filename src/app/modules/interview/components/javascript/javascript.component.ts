import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class JavascriptComponent implements OnInit {
  public jsQues = [{
    que: 'What are the possible ways to create objects in JavaScript?',
    desc: ` <p>There are many ways to create objects in javascript as below</p>
    <ol class="ques-1">
      <li class="list-text">Object constructor: </li>
      <br>
      <span>The simplest way to create an empty object is using the Object constructor. Currently this approach is
        not recommended.</span><br>
      <p class="code-section"><code>var object = new Object();</code></p>
      <li class="list-text">Object's create method: </li>
      <br>
      <span>The create method of Object creates a new object by passing the prototype object as a
        parameter</span><br>
      <p class="code-section large-width"><code>var object = Object.create(null);</code></p>
      <li class="list-text">Object literal syntax: </li>
      <br>
      <span>The object literal syntax is equivalent to create method when it passes null as parameter</span><br>
      <p class="code-section large-width"><code>var object = &#123;&#125;;</code></p>

      <li class="list-text">Function constructor:: </li>
      <br>
      <span>Create any function and apply the new operator to create object instances,</span><br>
      <p class="code-section large-width-height"><code>

function Person(name)&#123;<br>
  this.name=name;
  this.age=21;<br>
  &#125;<br>
var object = new Person("Sudheer");
        </code></p>

      <li class="list-text">ES6 Class syntax: </li>
      <br>
      <span>ES6 introduces class feature to create the objects</span><br>
      <p class="es6-syntax"><code>

  class Person &#123;<br>
    constructor(name) &#123;<br>
       this.name = name;
       &#125;<br>
  &#125;<br>
 var object = new Person("Sudheer");

        </code></p>
    </ol>`
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
