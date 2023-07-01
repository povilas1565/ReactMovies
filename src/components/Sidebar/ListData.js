//* director data used for adding suggestions in input tag
export const directorData = [
  "Julian Jukas, Samir Rossi",
  "Sam Raimi",
  "Tom Shadyac",
  "David Mickey Evans",
  "Timothy Björklund",
  "Jerry Zucker",
  "Gábor Herendi",
  "Richard W. Munchkin",
  "Ethan Coen, Joel Coen",
  "Bryan Singer",
  "Alfonso Cuarón",
];

//* year data used for adding suggestions in input tag
export const yearData = [...new Array(35)].map((el, index) => {
  return 1989 + index;
});

//* year data used for adding options in select tag
export const genreData = [
  "",
  "Action",
  "Drama",
  "Horror",
  "Game-Show, Reality-TV",
  "Comedy",
  "Adventure, Crime",
  "Animation",
  "History",
  "Thriller",
  "Sci-Fi",
];
