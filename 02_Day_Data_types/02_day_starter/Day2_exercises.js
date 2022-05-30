// 1. Declare a variable named challenge and assign it to an initial value **'30 Days Of JavaScript'**.
var challenge = '30 Days Of JavaScript'

// 2. Print the string on the browser console using __console.log()__
console.log(challenge)

// 3. Print the __length__ of the string on the browser console using _console.log()_
console.log(challenge.length)

// 4. Change all the string characters to capital letters using __toUpperCase()__ method
console.log(challenge.toUpperCase())

// 5. Change all the string characters to lowercase letters using __toLowerCase()__ method
console.log(challenge.toLowerCase())

// 6. Cut (slice) out the first word of the string using __substr()__ or __substring()__ method
console.log(challenge.substring(3))

// 7. Slice out the phrase *Days Of JavaScript* from *30 Days Of JavaScript*.
console.log(challenge.substring(0,2))

// 8. Check if the string contains a word __Script__ using __includes()__ method
console.log(challenge.includes("Script"))

// 9. Split the __string__ into an __array__ using __split()__ method
console.log(challenge.split(''))

// 10. Split the string 30 Days Of JavaScript at the space using __split()__ method
console.log(challenge.split(' '))

// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' __split__ the string at the comma and change it to an array.
var list = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(list.split(', '))

// 12. Change 30 Days Of JavaScript to 30 Days Of Python using __replace()__ method.
console.log(challenge.replace('JavaScript', 'Python'))

// 13. What is character at index 15 in '30 Days Of JavaScript' string? Use __charAt()__ method.
console.log(challenge.charAt(15))

// 14. What is the character code of J in '30 Days Of JavaScript' string using __charCodeAt()__
console.log(challenge.charCodeAt('J'))

// 15. Use __indexOf__ to determine the position of the first occurrence of __a__ in 30 Days Of JavaScript
console.log(challenge.indexOf('a'))

// 16. Use __lastIndexOf__ to determine the position of the last occurrence of __a__ in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'))

// 17. Use __indexOf__ to find the position of the first occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
var sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('a'))

// 18. Use __lastIndexOf__ to find the position of the last occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
console.log(sentence.lastIndexOf('a'))

// 19. Use __search__ to find the position of the first occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
console.log(sentence.search('because'))

// 20. Use __trim()__ to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
var whitespace = ' 30 Days Of JavaScript '
console.log(whitespace.trim(' '))

// 21. Use __startsWith()__ method with the string *30 Days Of JavaScript* and make the result true
console.log(challenge.startsWith(30))

// 22. Use __endsWith()__ method with the string *30 Days Of JavaScript* and make the result true
console.log(challenge.endsWith('JavaScript'))

// 23. Use __match()__ method to find all the __a__’s in 30 Days Of JavaScript
console.log(challenge.match('a'))

// 24. Use __concat()__ and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
var firstHalf = '30 Days of'
console.log(firstHalf.concat(' JavaScript'))

// 25. Use __repeat()__ method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2))