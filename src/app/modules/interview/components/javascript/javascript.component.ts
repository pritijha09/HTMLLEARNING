import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class JavascriptComponent implements OnInit {
  public jsQues = [{
    que: 'Difference between undefined and null?',
    desc: ` <p>In JavaScript, <strong>undefined</strong> means a variable has been declared but has not yet been assigned a value, such as:</p>
    <p class="code-section" style="width: 401px;
    height: 94px;">
    <code>
    var testVar;<br>
    console.log(testVar); //shows undefined <br>
    console.log(typeof testVar); //shows undefined <br>
        </code>
    </p>

      <p><strong>null</strong> is an assignment value. It can be assigned to a variable as a representation of no value:</p>
       <p class="code-section" style="width: 397px;
       height: 90px;">
          <code>
              var testVar = null; <br>
              console.log(testVar); //shows null <br>
              console.log(typeof testVar); //shows object
          </code>
        </p>
        <p>From the preceding example, it is clear that <strong>null</strong> and <strong>undefined</strong> are equal in value but different in type</p>
        <p class="code-section" style="width: 397px;
        height: 140px;">
          <code>
            console.log(typeof undefined); //undefined <br>
            console.log(typeof null);       //object <br> <br>

            console.log(null === undefined)   //false <br>
            console.log(null == undefined)    //true <br>
          </code>
        </p>`
  },
    {
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
    </ol>`,
  },{
    que: 'What is the difference between =, == and === operators?',
    desc: ` <p>JavaScript provides both strict(===, !==) and type-converting(==, !=) equality comparison.</p>
    <ul style="margin-left: 15px;">
      <li>= is used for assigning values to a variable in JavaScript.</li>
      <li>== is used for comparison between two variables irrespective of the datatype of variable.</li>
      <li>=== is used for comparision between two variables but this will check strict type, which means it will check datatype and compare two values.</li>
    </ul>
    <img src="assets/images/que-js-2.PNG" alt="que-js-2">`,
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
