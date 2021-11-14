# React-Native-Word-Analyzer
A Word Analyzer analyzes any word and determine number of consonants and vowels.

Class Exercise 4 - Developing React Native App (Word Analyzer)

Because I intended the first display of the output (vowel, consonant, character) to be empty rather than showing '0' from the start, I initialised all the variables as " instead of '0' for the super ().

I use the let to define and initialise the variables as 0 to start the counter in Analyzeword() (counting vowels, consonants and characters). For the total amount of characters, insert the length of the input word into 'char'.

For counting vowels and consonants, I use the for loop, 'if' for vowels (both lowercase and uppercase), and 'else if' for consonants (the rest of the alphabets in both lowercase and uppercase). Because I want to distinguish between vowels and consonants while also not counting the'spaces' and numbers in the 'else' whenever the input has been entered, I use 'if' and 'else if' instead of 'if' and 'else'.

The vowels and consonants are tallied as one in the output, regardless of whether it is uppercase or lowercase. Also included in the total amount of characters are the spaces inside the word.
