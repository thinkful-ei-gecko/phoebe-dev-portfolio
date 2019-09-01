'use strict';

const store = (function () {
  const photosUrls = [
    'https://via.placeholder.com/150x150.jpg',
    'https://via.placeholder.com/150x150.jpg',
    'https://via.placeholder.com/150x150.jpg'
  ];
  
  const projects = [
    {
      name: 'Quiz App',
      subtitle: 'Bootcamp Trivia for Parents',
      // imageUrl: 'https://imgur.com/3dlqiJC.png',
      imageUrl: 'https://via.placeholder.com/400x600.jpg',
      description: 'This app was made with Badri Narayana. I believe that fun is one of the most effective ways to learn, and since my parents only had a fuzzy idea of what I was doing with my life, I wanted to make this for and because of them; a way to start off a new career with love to those that have loved me a lot.',
      skillsApplied: ['html', 'css', 'javascript', 'jquery'],
      liveSiteUrl: 'https://thinkful-ei-gecko.github.io/badri-phoebe-day-5',
      githubUrl: 'https://github.com/thinkful-ei-gecko/badri-phoebe-day-5'
    }, 
    {
      name: 'Bookmarks App',
      subtitle: 'Marble Keeper',
      // imageUrl: 'https://imgur.com/jFZOsn1.png',
      imageUrl: 'https://via.placeholder.com/400x600.jpg',
      description: 'This is a simple bookmarks app. Since I\'m a forgetful person it\'s easy to feel like I\'m always going crazy ("losing my marbles") because of it. A bookmarks app is a memory management tool, so it keeps you from feeling like you\'re going crazy ;)',
      skillsApplied: ['html', 'css', 'javascript', 'jquery'],
      liveSiteUrl: 'https://thinkful-ei-gecko.github.io/phoebe-bookmarks-app',
      githubUrl: 'https://github.com/thinkful-ei-gecko/phoebe-bookmarks-app'
    }
  ];

  return {
    photosUrls,
    projects
  };
})();