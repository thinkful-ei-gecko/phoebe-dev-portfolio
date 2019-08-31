// no separate functions used to create HTML as material is not changing
'use strict';
                           
const portfolio = (function () {
  
  //calls the renderHeader() function to start the chain to run the page
  const render = function () {
    console.log('render ran');
    $('.section--input--inFlux').html(`
      <section class="section section--display--about1">
        <div class="anchor">
          <a id="about">&nbsp;</a>
          <h1 class="h1 target-label">hello world</h1>
        </div>
        <img src="https://via.placeholder.com/300x300">
        <p>I'm <em>Phoebe Law</em>,</br>
        <em>Junior Full-stack Javascript Developer</em>.</p>
        <p>I love making beautifully functional (and functionally beautiful) things.</p>
        <p class="p p--open--about2 p--style--italic">More <i class="fas fa-chevron-down"></i></p>
        <section class="section section--display--about2"></section>
        <h2>My skills include:</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
        </ul>
      </section>

      <section class="section section--display--projects">
      <div class="anchor">
        <a name="my-projects">&nbsp;</a>
        <h2 class="target-label">My Projects</h2>
      </div>
        <div class="div div--style--box">
          <h3>Quiz App: Bootcamp Trivia for Parents</h3>
          <div class="div div--display--toggle"></div>
        </div>
      </section>

      <section class="section section--display--contact" id="Contact">
        <h2>Help Yourself to Some Connects</h2>
        <ul class="fa-li">
          <li><span class="fa-li"><i class="fas fa-cookie-bite"></i></span>LinkedIn</li>
          <li><span class="fa-li"><i class="fas fa-cookie-bite"></i></span>Github</li>
          <li><span class="fa-li"><i class="fas fa-cookie-bite"></i></span>phoebebasilio@gmail.com</li>
        </ul>
      </section>
    `);
  };

  const handleAbout2 = function () {
    $('.section--input--inFlux').on('click', '.p--open--about2', function () {
      console.log('handleAbout2 ran');
      toggleDisplayAbout2();
      if ($('.section--display--about2').hasClass('display')) {
        $(this).empty();
        $(this).html(`Less <i class="fas fa-chevron-up"></i>`);
        renderAbout2();
      }
      else {
        $(this).empty();
        $(this).html(`More <i class="fas fa-chevron-down"></i>`);
        $('.section--display--about2').empty();
      }
    });
  };
  
  const toggleDisplayAbout2 = function() {
    $('.section--display--about2').toggleClass('display');
  };

  const renderAbout2 = function () {
    $('.section--display--about2').html(`
      <h2>Who am I?</h2>
      <p class="p--style--tDecoration">24601</p>
      <h3>tl;dr</h3>
      <p>I’ve always been creative and liked problem-solving, but wasn’t able to see myself working with technology for a while. Over time I’ve seen the overlap in my abilities and interests with coding and finally took the plunge. After a Bachelor’s in Linguistics and 2.5 years in administration and operations, I’m here to take my shot.</p>
      <h3>Longer Story</h3>
      <p>I never thought I would be in computers. I wasn’t single-minded enough for that. Sure, I was focused and had an engineer-y mind, but had too many interests. As a creative I liked figuring out the inner-workings of the world but lacked direction. While I appreciated the practicality of technology (I was unofficially my family’s support person), I hated how consuming it was for the majority of my world. Also, I thought software was uninteresting because looking at binary all day seemed boring (yeah, I thought only binary was used… I was a smart kid).</p>
      <p>Fast-forward into adulthood, when things get nuanced and when what I considered black or white, with my more developed eyes, often turned out to be more gray. And also, suddenly money is something I need to survive and not just a concept I can scoff at (save your laughs for later, folks). What could I do that I could enjoy and thrive in? While I wasn’t in a terrible place career-wise, I wanted to grow to my potential and knew I had to move on.</p>
      <p>The first time the parallel between what I did and what I could do clicked was when I was organizing my many incoming emails with rules. I was making it very specialized, where ordering rules mattered and one small selection had many big effects. The thought process was a lot like symbolic logic I learned in college, but practically applied (I always thought symbolic logic was mostly useful for people taking the LSAT/law careers). My degree in Linguistics gave me an idea of what programming would be like, and though then it was just a small idea, I thought: “Huh. I can actually do this. And it can be just as practical as what I am doing now.”</p>          
      <p>So I did.</p>
    `);
  };

  const handleProjectExpanded = function () {
    $('.section--input--inFlux').on('click', '.div--style--box', function () {

    });
  };

  const toggleDisplayProjectExpanded = function () {};

  const renderProjectExpanded = function () {
    $('.p--display--toggle').html(`
    <p>This app was made with Badri Narayana. I believe that fun is one of the most effective ways to learn, and since my parents only had a fuzzy idea of what I was doing with my life, I wanted to make this for and because of them; a way to start off a new career with love to those that have loved me a lot.<p>
    <div><a href="https://thinkful-ei-gecko.github.io/badri-phoebe-day-5/">Live Site</a></div>
    <div><a href="https://github.com/thinkful-ei-gecko/badri-phoebe-day-5">Github</a></div>
  `);
  };

  return {
    render,
    handleAbout2,
    handleProject
  };
})();

// var text = 'Widget World';

// var textElements = text.split("").map(function(c) {
//   return $('<span id="' + c + '">' + c + '</span>');
// });

// var el = $('#letters');
// var delay = 50; // Tune this for different letter delays.
// textElements.forEach(function(e, i) {
//   el.append(e);
//   e.hide();
//   setTimeout(function() {
//     e.fadeIn(300);
//   }, 100 + i * delay);
// });