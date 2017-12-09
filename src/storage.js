let storage = {
  apiKey: 'a70dbfe19b800809dfdd3e89e8532c9e',
  sessionId: localStorage.getItem('session_id') || null,
  userId: localStorage.getItem('user_id') || null,
  pageTitlePostfix: ' — ' + document.title,
  listTypes: [
    {
    title: 'Films populaires',
    shortTitle: 'populaires',
    query: 'popular',
    type: 'collection',
    isCategory: true
  },
  {
    title: 'Films les mieux notés',
    shortTitle: 'Top',
    query: 'top_rated',
    type: 'collection',
    isCategory: true
  },
  {
    title: 'Films à venir',
    shortTitle: 'Films à venir',
    query: 'upcoming',
    type: 'collection',
    isCategory: true
  },
    {
      title: 'Search Results',
      query: 'search',
      isCategory: false
    },
  ],
  categories: {},
  // For Browser History
  backTitle: '',
  moviePath: '',
  createMoviePopup: false,
  moviePopupOnHistory: false
};

// Create categories titles
storage.listTypes.forEach(function(listType){
  storage.categories[listType.query] = listType.title;
});

export default storage;
