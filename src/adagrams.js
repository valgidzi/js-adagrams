const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1
    const letterFrequencies = {
      "A": 9,
      "B": 2,
      "C": 2,
      "D": 4,
      "E": 12,
      "F": 2,
      "G": 3,
      "H": 2,
      "I": 9,
      "J": 1,
      "K": 1,
      "L": 4,
      "M": 2,
      "N": 6,
      "O": 8,
      "P": 2,
      "Q": 1,
      "R": 6,
      "S": 4,
      "T": 6,
      "U": 4,
      "V": 2,
      "W": 2,
      "X": 1,
      "Y": 2,
      "Z": 1,
    }

    const poolOfLetters = [];

    for (const letter in letterFrequencies) {
      for (let i = 0; i < letterFrequencies[letter]; i += 1) {
        poolOfLetters.push(letter);
      }
    }

    const drawnHand = [];

    for (let i = 0; i < 10; i += 1 ) {
      let index = Math.floor(Math.random() * Math.floor(poolOfLetters.length));
      drawnHand.push(poolOfLetters[index]);
    }
    return drawnHand
  },

  usesAvailableLetters(playedWord, handLetters) {
    const playedWordArray = playedWord.toUpperCase().split('').slice();

    for (const letter of playedWordArray) {
      if (handLetters.includes(letter)) {
        handLetters.splice(handLetters.indexOf(letter), 1);
      } else {
        return false;
      }
    }
    return true;
  },

  scoreWord(word) {
    let score = 0
    const wordArray = word.toUpperCase().split('');

    const scoreChart = {
      "A": 1,
      "E": 1,
      "I": 1,
      "O": 1,
      "U": 1,
      "L": 1,
      "N": 1,
      "R": 1,
      "S": 1,
      "T": 1,
      "D": 2,
      "G": 2,
      "B": 3,
      "C": 3,
      "M": 3,
      "P": 3,
      "F": 4,
      "H": 4,
      "V": 4,
      "W": 4,
      "Y": 4,
      "K": 5,
      "J": 8,
      "X": 8,
      "Q": 10,
      "Z": 10,
    }

    wordArray.forEach((letter) => {
      score += scoreChart[letter]
    });
    if (word.length >= 7) {
      score += 8
    }
    return score
  },
  highestScoreFrom(words) {

    let score = 0;
    let bestWords = [];

    let bestWord;
    let allLettersUsed;
    let shortestWord;

    for (let word of words) {
      let temp_score = this.scoreWord(word);
      if (temp_score > score) {
        score = temp_score;
        bestWords = [word];
      } else if (temp_score == score) {
        bestWords.push(word);
      }
    }
    if (bestWords.length > 1) {
      allLettersUsed = bestWords.find( (word) => {
        return word.length === 10;
      });
      for (let word of bestWords) {
        if (shortestWord === undefined || word.length < shortestWord.length) {
          shortestWord = word;
        }
      }
      bestWord = allLettersUsed === undefined ? shortestWord : allLettersUsed;
    } else {
      bestWord = bestWords[0];
    }
    return {
      word: bestWord,
      score: score
    }
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;
