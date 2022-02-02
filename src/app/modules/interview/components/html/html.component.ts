import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HTMLComponent implements OnInit {
  isExpanded: Boolean = true;
  public htmlQueAns = [{
    que: "What is HTML?",
    desc: "<p>Hypertext Markup Language or HTML is a markup language that is used to create website templates or WebPages to present the content on the World Wide Web.<p><br><p> HTML pages are saved by adding .html or .html in web page name.<p>",
    code: "",
    img: ""
  },
{
  que: "What are the semantic tags available in html5?",
  desc: "<p>HTML5 semantic tags define the function and the category of your text, simplifying the work for browsers and search engines, as well as developers.</p><br><p>HTML5 offers new semantic elements to define different parts of a web page:",
  code: "",
  img: "../../../../../assets/images/que-1.PNG"
},
{
  que: "What is difference between span tag and div tag?",
  desc: `<p dir="auto">The primary difference between div and span tag is their default behavior. By default, a&nbsp;<span style="background-color: #999999;"><code>&lt;div&gt;</code></span>&nbsp;is a&nbsp;<strong>block-level-element</strong>&nbsp;and a&nbsp;<span style="background-color: #999999;"><code>&lt;span&gt;</code></span>&nbsp;is an&nbsp;<strong>inline element</strong>.</p>
  <ul dir="auto">
  <li><span style="background-color: #999999;"><code>&lt;div&gt;</code></span>&nbsp;is a block level element which means it will render it on it's own line with a width of a 100% of the parent element.<br /><br /></li>
  <li><span style="background-color: #999999;"><code>&lt;span&gt;</code></span>&nbsp;is an inline element which means it will render on the same line as the previous element, if it is also an inline element, and it's width will be determined by it's content.</li>
  </ul>
  <div class="highlight highlight-text-html-basic position-relative overflow-auto">
  <pre><span style="background-color: #999999;"><span class="pl-kos">&lt;</span><span class="pl-ent">div</span><span class="pl-kos">&gt;</span>Demo Text, with <span class="pl-kos">&lt;</span><span class="pl-ent">span</span><span class="pl-kos">&gt;</span>some other<span class="pl-kos">&lt;/</span><span class="pl-ent">span</span><span class="pl-kos">&gt;</span> text.<span class="pl-kos">&lt;/</span><span class="pl-ent">div</span><span class="pl-kos">&gt;</span></span></pre>
  </div>`,
  code: "",
  img: ""
},
{
  que: "What are optional closing tag?",
  desc: `<p><code><span style="background-color: #999999;">&lt;p&gt;, &lt;li&gt;, &lt;td&gt;, &lt;tr&gt;, &lt;th&gt;, &lt;html&gt;, &lt;body&gt;</span></code>, etc. don't have to provide end tag. Whenever browser hits a new tag it automatically ends the previous tag.</p>`,
  code: "",
  img: ""
},
{
  que: "Explain the difference between block elements and inline elements?",
  desc: `<ul dir="auto">
  <li>block elements&nbsp;<code>&lt;h1&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;</code>,</li>
  <li>inline elements&nbsp;<code>&lt;span&gt;, &lt;a&gt;, &lt;strong&gt;, &lt;i&gt;, &lt;img&gt;</code></li>
  </ul>`,
  code: "",
  img: ""
},{
  que: "What are semantic and non-semantic elements?",
  desc: `<ul dir="auto">
  <li>
  <p dir="auto"><strong>Semantic elements</strong>: clearly describes its meaning to both the browser and the developer. For example:&nbsp;<code>&lt;form&gt;</code>,&nbsp;<code>&lt;table&gt;</code>,&nbsp;<code>&lt;article&gt;</code>,&nbsp;<code>&lt;aside&gt;</code>,&nbsp;<code>&lt;details&gt;</code>,&nbsp;<code>&lt;figcaption&gt;</code>,&nbsp;<code>&lt;figure&gt;</code>,&nbsp;<code>&lt;footer&gt;</code>,&nbsp;<code>&lt;header&gt;</code>,&nbsp;<code>&lt;main&gt;</code>,&nbsp;<code>&lt;mark&gt;</code>,&nbsp;<code>&lt;nav&gt;</code>,&nbsp;<code>&lt;section&gt;</code>,&nbsp;<code>&lt;summary&gt;</code>,&nbsp;<code>&lt;time&gt;</code>&nbsp;clearly defines its content.</p>
  </li>
  <li>
  <p dir="auto"><strong>Non-semantic elements</strong>:&nbsp;<code>&lt;div&gt;</code>&nbsp;and&nbsp;<code>&lt;span&gt;</code>&nbsp;tells nothing about its content.</p>
  </li>
  </ul>`,
  code: '',
  img:''
}, {
  que: "Describe the difference between a cookie, sessionStorage and localStorage?",
  desc: `<ul dir="auto">
  <li>
  <ul dir="auto">
  <li>
  <p dir="auto"><code>cookie</code>: A text file saved on the users computer to store and retrieve data</p>
  </li>
  <li>
  <p dir="auto"><code>sessionStorage</code>: Is memory space in a browser to save temporary data until the window or tab is closed.</p>
  </li>
  <li>
  <p dir="auto"><code>localStorage</code>: Like cookie, where data can be saved and retrieved after browser sessions, but stored in memory like sessionStorage. Data is stored as plain key value pairs and can be stored as Json objects.</p>
  </li>
  </ul>
  <table border="1" cellspacing="0" cellpadding="1">
  <thead>
  <tr>
  <th>&nbsp;</th>
  <th><code>cookie</code></th>
  <th><code>localStorage</code></th>
  <th><code>sessionStorage</code></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>Initiator</td>
  <td>Client or server. Server can use&nbsp;<code>Set-Cookie</code>&nbsp;header</td>
  <td>Client</td>
  <td>Client</td>
  </tr>
  <tr>
  <td>Expiry</td>
  <td>Manually set</td>
  <td>Forever</td>
  <td>On tab close</td>
  </tr>
  <tr>
  <td>Persistent across browser sessions</td>
  <td>Depends on whether expiration is set</td>
  <td>Yes</td>
  <td>No</td>
  </tr>
  <tr>
  <td>Sent to server with every HTTP request</td>
  <td>Cookies are automatically being sent via&nbsp;<code>Cookie</code>&nbsp;header</td>
  <td>No</td>
  <td>No</td>
  </tr>
  <tr>
  <td>Capacity (per domain)</td>
  <td>4kb</td>
  <td>5MB</td>
  <td>5MB</td>
  </tr>
  <tr>
  <td>Accessibility</td>
  <td>Any window</td>
  <td>Any window</td>
  <td>Same tab</td>
  </tr>
  </tbody>
  </table>
  </li>
  </ul>`,
  code: '',
  img: ''
},{
  que: "What is the purpose of the alt attribute on images?",
  desc: `<p dir="auto">The&nbsp;<code>alt</code>&nbsp;attribute provides alternative information for an image if a user cannot view it. The&nbsp;<code>alt</code>&nbsp;attribute should be used to describe any images except those which only serve a decorative purposes, in which case it should be left empty.</p>
  <div class="highlight highlight-text-html-basic position-relative overflow-auto">
  <pre><span class="pl-kos">&lt;</span><span class="pl-ent">img</span> <span class="pl-c1">src</span>="<span class="pl-s">pancakes.png</span>" <span class="pl-c1">alt</span>="<span class="pl-s">Stack of blueberry pancakes with powdered sugar</span>"<span class="pl-kos">&gt;</span></pre>
  </div>`,
  code: '',
  img: ''
},{
  que: "Ways to improve website performance?",
  desc: `<ul dir="auto">
  <li>
  <p dir="auto">Minimize HTTP Requests</p>
  <ul dir="auto">
  <li>Sites are mainly slow because of too many (or too large) HTTP requests. We can eliminate unnecessary request;
  <ul dir="auto">
  <li>combined files: js to a file, css to a file</li>
  <li>CSS sprites: CSS Sprites are the preferred method for reducing the number of image requests. Combine your background images into a single image and use the CSS background-image and background-position properties to display the desired image segment.</li>
  </ul>
  </li>
  </ul>
  </li>
  <li>
  <p dir="auto">Use a Content Delivery Network CDN</p>
  <ul dir="auto">
  <li>A CDN is essentially many optimized servers around the world that deliver web content to users based on their geographic location. This means big performance improvements for site users. Because, say, if a person accessing your site in India, they will be retrieving web content from a server nearby</li>
  </ul>
  </li>
  <li>
  <p dir="auto">Optimize Images:</p>
  <ul dir="auto">
  <li>image sizes make a huge difference to site speed. The larger content/images, the slower the site. we could:
  <ul dir="auto">
  <li>Changing the resolution: reducing the &ldquo;quality&rdquo; of the image (and thereby the file size)</li>
  <li>Compressing the picture: increasing the efficiency of image data storage</li>
  <li>Cropping the picture: when cropping, you are cutting out unneeded areas and thus making the image smaller in size</li>
  </ul>
  </li>
  </ul>
  </li>
  <li>
  <p dir="auto">Put Scripts at the Bottom:</p>
  <ul dir="auto">
  <li>
  <p dir="auto">Javascript files can load after the rest of your page. The simplest solution is to place your external Javascript files at the bottom of your page, just before the close of your body tag. Now more of your site can load before your scripts. Another method that allows even more control is to use the defer or async attributes when placing external .js files on your site.</p>
  <ul dir="auto">
  <li>
  <p dir="auto">Async tags load the scripts while the rest of the page loads, but this means scripts can be loaded out of order. Basically, lighter files load first. This might be fine for some scripts, but can be disastrous for others.</p>
  </li>
  <li>
  <p dir="auto">The defer attribute loads your scripts after your content has finished loading. It also runs the scripts in order. Just make sure your scripts run so late without breaking your site.</p>
  </li>
  </ul>
  </li>
  </ul>
  </li>
  <li>
  <p dir="auto">Add an Expires or a Cache-Control Header</p>
  <ul dir="auto">
  <li>Web page designs are getting richer and richer, which means more scripts, stylesheets, images, and Flash in the page. A first-time visitor to your page may have to make several HTTP requests, but by using the Expires header you make those components cacheable. This avoids unnecessary HTTP requests on subsequent page views. Expires headers are most often used with images, but they should be used on all components including scripts, stylesheets, and Flash components.</li>
  </ul>
  </li>
  <li>
  <p dir="auto">Gzip Components</p>
  <ul dir="auto">
  <li>Compression reduces response times by reducing the size of the HTTP response. Gzipping generally reduces the response size by about 70%.</li>
  </ul>
  </li>
  <li>
  <p dir="auto">Put Stylesheets at the Top:</p>
  <ul dir="auto">
  <li>This is because putting stylesheets in the HEAD allows the page to render progressively.</li>
  </ul>
  </li>
  <li>
  <p dir="auto">Avoid CSS Expressions</p>
  </li>
  <li>
  <p dir="auto">Use GET for AJAX Requests:</p>
  <ul dir="auto">
  <li>Ajax is that it provides instantaneous feedback to the user because it requests information asynchronously from the backend web server</li>
  </ul>
  </li>
  <li>
  <p dir="auto">Make JavaScript and CSS External:</p>
  <ul dir="auto">
  <li>Using external files in the real world generally produces faster pages because the JavaScript and CSS files are cached by the browser. JavaScript and CSS that are inlined in HTML documents get downloaded every time the HTML document is requested. This reduces the number of HTTP requests that are needed, but increases the size of the HTML document. On the other hand, if the JavaScript and CSS are in external files cached by the browser, the size of the HTML document is reduced without increasing the number of HTTP requests.</li>
  </ul>
  </li>
  <li>
  <p dir="auto">Use get to ajax request:</p>
  <ul dir="auto">
  <li>POST is implemented in the browsers as a two-step process: sending the headers first, then sending data. So it's best to use GET, which only takes one TCP packet to send (unless you have a lot of cookies).</li>
  </ul>
  </li>
  <li>
  <p dir="auto">No 404s:</p>
  <ul dir="auto">
  <li>HTTP requests are expensive so making an HTTP request and getting a useless response (i.e. 404 Not Found) is totally unnecessary and will slow down the user experience without any benefit.</li>
  </ul>
  </li>
  <li>
  <p dir="auto">Reduce Cookie Size:</p>
  <ul dir="auto">
  <li>HTTP cookies are used for a variety of reasons such as authentication and personalization. Information about cookies is exchanged in the HTTP headers between web servers and browsers. It's important to keep the size of cookies as low as possible to minimize the impact on the user's response time.</li>
  </ul>
  </li>
  <li>
  <p dir="auto">Reduce DNS Lookups</p>
  </li>
  <li>
  <p dir="auto">Minify JavaScript and CSS</p>
  </li>
  <li>
  <p dir="auto">Avoid Redirects</p>
  </li>
  <li>
  <p dir="auto">Remove Duplicate Scripts</p>
  </li>
  <li>
  <p dir="auto">Configure Etags</p>
  </li>
  <li>
  <p dir="auto">Make Ajax Cacheable</p>
  </li>
  <li>
  <p dir="auto">Post-load Components</p>
  </li>
  <li>
  <p dir="auto">Preload Components</p>
  </li>
  <li>
  <p dir="auto">Reduce the Number of DOM Elements</p>
  </li>
  <li>
  <p dir="auto">Minimize the Number of iframes</p>
  </li>
  <li>
  <p dir="auto">Minimize DOM Access</p>
  </li>
  <li>
  <p dir="auto">Optimize CSS Sprites</p>
  </li>
  <li>
  <p dir="auto">Don't Scale Images in HTML</p>
  </li>
  <li>
  <p dir="auto">Make favicon.ico Small and Cacheable</p>
  </li>
  <li>
  <p dir="auto">Avoid Empty Image src</p>
  </li>
  </ul>`,
  code: '',
  img: ''
},{
  que: 'Comparison of browsers engines like Chrome, Firefox, Internet explorer, Safari?',
  desc: `<ul dir="auto">
  <li>
  <p dir="auto">Chrome:</p>
  <ul dir="auto">
  <li>Layout rendering engine&nbsp;<strong>Webkit</strong>.</li>
  <li>JavaScript engine&nbsp;<strong>V8</strong></li>
  </ul>
  </li>
  <li>
  <p dir="auto">Firefox:</p>
  <ul dir="auto">
  <li>Layout rendering engine&nbsp;<strong>Gecko</strong>.</li>
  <li>JavaScript engine&nbsp;<strong>Spider monkey</strong></li>
  </ul>
  </li>
  <li>
  <p dir="auto">Internet explorer:</p>
  <ul dir="auto">
  <li>Layout rendering engine&nbsp;<strong>Trident</strong>.</li>
  <li>JavaScript engine&nbsp;<strong>Chakra</strong></li>
  </ul>
  </li>
  <li>
  <p dir="auto">Safari:</p>
  <ul dir="auto">
  <li>Layout rendering engine&nbsp;<strong>Webkit</strong>.</li>
  <li>JavaScript engine JavascriptCore i.e&nbsp;<strong>Nitro</strong></li>
  </ul>
  </li>
  </ul>`,
  code: '',
  img: ''
},{
  que: 'What is desktop first and mobile first design approach?',
  desc: `<ul dir="auto">
  <li>
  <p dir="auto"><strong>Desktop first : </strong>General selectors and styles designed to make the site look good on DESKTOP screens defined globally. But they affect all devices, and must be overridden by max-width media queries targeting minimum screen size</p>
  </li>
  <li>
  <p dir="auto"><strong>Mobile First :</strong> General selectors and styles designed to make the site look good on small MOBILE screens go here. But they affect all devices, and must be overridden by min-width media queries targeting maximum scrren size</p>
  <p dir="auto">In desktop first approach the media queries will be written with respect to max-width whereas in mobile first approach media queries will be written with respect to min-width</p>
  </li>
  </ul>`,
  code: '',
  img: ''
},
{
  que: `How to make page responsive?`,
  desc: `<p dir="auto">Responsive Web Design is about using HTML and CSS to automatically resize, hide, shrink, or enlarge, a website, to make it look good on all devices (desktops, tablets, and phones).</p>
  <h3 dir="auto"><a id="user-content-1-setting-the-viewport" class="anchor" href="https://github.com/learning-zone/html-interview-questions#1-setting-the-viewport" aria-hidden="true"></a><strong>1. Setting the viewport</strong></h3>
  <div class="highlight highlight-text-html-basic position-relative overflow-auto">
  <pre><span class="pl-kos">&lt;</span><span class="pl-ent">meta</span> <span class="pl-c1">name</span>="<span class="pl-s">viewport</span>" <span class="pl-c1">content</span>="<span class="pl-s">width=device-width, initial-scale=1.0</span>"<span class="pl-kos">&gt;</span></pre>
  </div>
  <h3 dir="auto"><a id="user-content-2-responsive-images" class="anchor" href="https://github.com/learning-zone/html-interview-questions#2-responsive-images" aria-hidden="true"></a><strong>2. Responsive Images</strong></h3>
  <p dir="auto">If the CSS width property is set to 100%, the image will be responsive and scale up and down</p>
  <div class="highlight highlight-text-html-basic position-relative overflow-auto">
  <pre><span class="pl-kos">&lt;</span><span class="pl-ent">img</span> <span class="pl-c1">src</span>="<span class="pl-s">img.png</span>" <span class="pl-c1">style</span>="<span class="pl-s">width:100%;</span>"<span class="pl-kos">&gt;</span></pre>
  </div>
  <h3 dir="auto"><a id="user-content-3-show-different-images-depending-on-browser-width" class="anchor" href="https://github.com/learning-zone/html-interview-questions#3-show-different-images-depending-on-browser-width" aria-hidden="true"></a><strong>3. Show different Images depending on Browser Width</strong></h3>
  <p dir="auto">The HTML&nbsp;<code>&lt;picture&gt;</code>&nbsp;element allows you to define different images for different browser window sizes.</p>
  <div class="highlight highlight-text-html-basic position-relative overflow-auto">
  <pre><span class="pl-kos">&lt;</span><span class="pl-ent">picture</span><span class="pl-kos">&gt;</span>
    <span class="pl-kos">&lt;</span><span class="pl-ent">source</span> <span class="pl-c1">srcset</span>="<span class="pl-s">img_small.jpg</span>" <span class="pl-c1">media</span>="<span class="pl-s">(max-width: 600px)</span>"<span class="pl-kos">&gt;</span>
    <span class="pl-kos">&lt;</span><span class="pl-ent">source</span> <span class="pl-c1">srcset</span>="<span class="pl-s">img_large.jpg</span>" <span class="pl-c1">media</span>="<span class="pl-s">(max-width: 1500px)</span>"<span class="pl-kos">&gt;</span>
    <span class="pl-kos">&lt;</span><span class="pl-ent">source</span> <span class="pl-c1">srcset</span>="<span class="pl-s">img.jpg</span>"<span class="pl-kos">&gt;</span>
    <span class="pl-kos">&lt;</span><span class="pl-ent">img</span> <span class="pl-c1">src</span>="<span class="pl-s">img_small.jpg</span>" <span class="pl-c1">alt</span>="<span class="pl-s">Image</span>"<span class="pl-kos">&gt;</span>
  <span class="pl-kos">&lt;/</span><span class="pl-ent">picture</span><span class="pl-kos">&gt;</span></pre>
  </div>
  <h3 dir="auto"><a id="user-content-4-responsive-text-size" class="anchor" href="https://github.com/learning-zone/html-interview-questions#4-responsive-text-size" aria-hidden="true"></a><strong>4. Responsive Text Size</strong></h3>
  <p dir="auto">The text size can be set with a "vw" unit, which means the "viewport width". That way the text size will follow the size of the browser window.</p>
  <div class="highlight highlight-text-html-basic position-relative overflow-auto">
  <pre><span class="pl-kos">&lt;</span><span class="pl-ent">h1</span> <span class="pl-c1">style</span>="<span class="pl-s">font-size:10vw</span>"<span class="pl-kos">&gt;</span>Hello World<span class="pl-kos">&lt;/</span><span class="pl-ent">h1</span><span class="pl-kos">&gt;</span></pre>
  </div>
  <h3 dir="auto"><a id="user-content-5-media-queries" class="anchor" href="https://github.com/learning-zone/html-interview-questions#5-media-queries" aria-hidden="true"></a><strong>5. Media Queries</strong></h3>
  <p dir="auto">Using media queries you can define completely different styles for different browser sizes.</p>
  <div class="highlight highlight-source-css position-relative overflow-auto">
  <pre><span class="pl-c">/* Use a media query to add a breakpoint at 800px: */</span>
  <span class="pl-k">@media</span> screen <span class="pl-c1">and</span> (<span class="pl-c1">max-width</span><span class="pl-kos">:</span> <span class="pl-c1">800<span class="pl-smi">px</span></span>) {
    .<span class="pl-c1">left</span><span class="pl-kos">,</span> .<span class="pl-c1">main</span><span class="pl-kos">,</span> .<span class="pl-c1">right</span> {
      <span class="pl-c1">width</span><span class="pl-kos">:</span> <span class="pl-c1">100<span class="pl-smi">%</span></span>; <span class="pl-c">/* The width is 100%, when the viewport is 800px or smaller */</span>
    }
  }</pre>
  </div>`,
  code: '',
  img: ''
}]
  constructor() { }

  ngOnInit(): void {
  }

}
