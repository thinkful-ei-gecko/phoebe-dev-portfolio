'use strict';

const store = (function () {
  const photosUrls = [
    'https://imgur.com/tjCln69.jpg',
    'https://imgur.com/Xa78e9I.jpg',
    'https://imgur.com/ZPaRhnv.jpg',
    'https://imgur.com/PZfqIPP.jpg',
    'https://imgur.com/4SL8xuI.jpg'
  ];
  
  const projects = [
    {
      name: 'Quiz App',
      subtitle: 'Bootcamp Trivia for Parents',
      imageUrl: 'https://imgur.com/3dlqiJC.png',
      // imageUrl: 'https://via.placeholder.com/600x400.jpg',
      description: 'This quiz app was made with Badri Narayana for our parents to get a better understanding of our bootcamp and have fun while doing so (and show off our new skills to them!). Using jQuery and a store, it provides user feedback after each question and gives a running score. It also has a "results" screen, where users can follow a link to reset the test (without refreshing the page).',
      skillsApplied: ['html', 'css', 'javascript', 'jquery'],
      liveSiteUrl: 'https://thinkful-ei-gecko.github.io/badri-phoebe-day-5',
      githubUrl: 'https://github.com/thinkful-ei-gecko/badri-phoebe-day-5'
    }, 
    {
      name: 'Bookmarks App',
      subtitle: 'Marble Keeper',
      imageUrl: 'https://imgur.com/jFZOsn1.png',
      // imageUrl: 'https://via.placeholder.com/600x400.jpg',
      description: 'This is a simple bookmarks app; it allows users to add bookmarks, a title, a rating, and a description. Users are able to expand and collpase by the details, sort by minimum rating, and delete bookmarks. Using API calls, the results are saved to a server (and refreshed every 24 hours). The theme came from me being a forgetful person; it\'s easy to feel like I\'m always going crazy ("losing my marbles") because of it. A bookmarks app is a memory management tool, so it keeps you from feeling that way ;)',
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