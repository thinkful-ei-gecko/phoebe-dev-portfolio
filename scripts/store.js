'use strict';

const store = (function () {
  const photosUrls = ['https://via.placeholder.com/150x35.jpg','https://via.placeholder.com/150x35.jpg','https://via.placeholder.com/150x35.jpg'];
  
  const projects = [
    {
      name: 'Quiz App',
      subtitle: 'Bootcamp Trivia for Parents',
      imageUrl: 'https://via.placeholder.com/150x35.jpg',
      description: 'This app was made with Badri Narayana. I believe that fun is one of the most effective ways to learn, and since my parents only had a fuzzy idea of what I was doing with my life, I wanted to make this for and because of them; a way to start off a new career with love to those that have loved me a lot.',
      skillsApplied: ['html', 'css', 'javascript'],
      liveSiteUrl: 'https://thinkful-ei-gecko.github.io/badri-phoebe-day-5',
      githubUrl: 'https://github.com/thinkful-ei-gecko/badri-phoebe-day-5'
    }
  ];

  return {
    photosUrls,
    projects
  };
})();