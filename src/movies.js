// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directors = moviesArray.map((movie) => {
        return movie.director;
    });
    return directors;
}

//Bonus Iteration 1.1: Clean the array of directors



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
      return 0;
    } else {
      let filteredMovies = moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
      let countMovies = filteredMovies.length;
      if (countMovies === 2) {
        return 2;
      } else {
        return countMovies;
      }
    }
  }
        



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    } else {
        let allScores = moviesArray.map(movie => movie.score || movie === {});
        let sumArray = allScores.reduce((prevValue, currentValue) => prevValue + currentValue, 0);
        let averageScore = sumArray / allScores.length;
        averageScore = Math.round((averageScore + Number.EPSILON) * 100) / 100;
        return averageScore;
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
        let dramaScores = moviesArray.filter(movie => movie.score && movie.genre.includes("Drama"));
        let sumDrama = 0;
        dramaScores.forEach(element => {
            sumDrama = sumDrama + element.score;
        });
        if (sumDrama === 0) {
            return 0;
        } else {
            let averageDramaScore = sumDrama / dramaScores.length;
            averageDramaScore = Math.round((averageDramaScore + Number.EPSILON) * 100) / 100;
            return averageDramaScore;
        }
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let moviesArrayCopy = moviesArray.slice();
    let sortedArrayTitle = moviesArrayCopy.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
    
        // names must be equal
        return 0;
      });
      console.log(sortedArrayTitle);
      let sortedArrayTitleYear = sortedArrayTitle.sort((a, b) => {
        return a.year - b.year;
      });
      return sortedArrayTitleYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let moviesArrayCopy = moviesArray.slice();
    let sortedArrayTitle = moviesArrayCopy.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }

        return 0;
      });
      let twentyTitles = [];
      for (let i = 0; i < 20; i++) {
        twentyTitles.push(sortedArrayTitle[i]);
      }
      return twentyTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
