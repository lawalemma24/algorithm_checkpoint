function countSentenceDetails(sentence) {
    let lengthCounter = 0;
    let wordCounter = 1;
    let vowelCounter = 0;

    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        lengthCounter++;

        if (char.match(/[aeiou]/i)) {
            vowelCounter++;
        }

        if (char === ' ') {
            wordCounter++;
        }
    }

    console.log("Length of the sentence:", lengthCounter);
    console.log("Number of words in the sentence:", wordCounter);
    console.log("Number of vowels in the sentence:", vowelCounter);
}

// Example usage:
const sentenceInput = prompt("Enter a sentence ending with a point: ");
countSentenceDetails(sentenceInput);
