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

    for (let i = poolOfLetters.length - 1; i > 0; i -= 1 ) {
      const j = Math.floor(Math.random() * Math.floor(i));
      const x = poolOfLetters[j];
      poolOfLetters[j] = poolOfLetters[i];
      poolOfLetters[i] = x;
    }

    return poolOfLetters.slice(0, 10);
  },

  usesAvailableLetters(playedWord, handLetters) {
    const playedWordArray = playedWord.toUpperCase().split('').slice();
    const handLettersCopy = handLetters.slice();

    for (const letter of playedWordArray) {
      if (handLettersCopy.includes(letter)) {
        handLettersCopy.splice(handLettersCopy.indexOf(letter), 1);
      } else {
        return false;
      }
    }
    return true;
  },

  scoreWord(word) {
    let score = 0
    const wordArray = word.toUpperCase().split('');

    wordArray.forEach((letter) => {
      switch (letter) {
        case "A":
        case "E":
        case "I":
        case "O":
        case "U":
        case "L":
        case "N":
        case "R":
        case "S":
        case "T":
        score += 1;
        break;
        case "D":
        case "G":
        score += 2;
        break;
        case "B":
        case "C":
        case "M":
        case "P":
        score += 3;
        break;
        case "F":
        case "H":
        case "V":
        case "W":
        case "Y":
        score += 4;
        break;
        case "K":
        score += 5;
        break;
        case "J":
        case "X":
        score += 8;
        break;
        case "Q":
        case "Z":
        score += 10;
        break;
      }
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
