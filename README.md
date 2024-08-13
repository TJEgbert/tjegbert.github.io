# My Portfolio
## CS 3750 - Software Engineering II Programs
- [Program 1 - Node & Express Site With File Storage](https://github.com/TJEgbert/TJEgbert.github.io/tree/main/Program%201%20-%20Node%20%26%20Express%20Site%20With%20File%20Storage)

- [Program 2 - Connect Four](https://github.com/TJEgbert/TJEgbert.github.io/tree/main/Program%202%20-%20Connect%20Four)

- [Program 3 & 4 - Solo Banking App](https://github.com/TJEgbert/TJEgbert.github.io/tree/main/Program%203%20%26%204%20-%20Solo%20Banking%20App)

- [Program 5 - Group Hangman](https://github.com/TJEgbert/TJEgbert.github.io/tree/main/Program%205%20-%20Group%20Hangman)

- [Program 6 - Group Bank APP](https://github.com/TJEgbert/TJEgbert.github.io/tree/main/Program%206%20-%20Group%20Bank%20APP)

### Project Descriptions
#### Program 1 - Node & Express Site With File Storage
![Screenshot of user information page](/assets/images/mod1_1.PNG)
![Screenshot of user display table](/assets/images/mod1_2.PNG)

For this assignment we used a combination of Node.js and Express to make a website with three pages.  One where there’s a form the user can enter their first name, last name and favorite food once submitted it would append the entered information to a text file.  One page would read the text file and display the person’s full name with their favorite food.  The last page would let the user enter in a food and then the page would display a table with the names of people with that favorite food.  

We used Node.js to be the foundation of the website while using Express to handle any routing needed.  The biggest challenge for me was getting used to how Node.js and Express worked and their specific syntax.  With this being my first time using them just like any language it took some time to get used.  Also, it had been sometime since my web development class, so I was rusty on my JavaScript and HTML.  Overall, it was a relatively easy assignment with being the first one.

[Go to repository](https://github.com/TJEgbert/TJEgbert.github.io/tree/main/Program%201%20-%20Node%20%26%20Express%20Site%20With%20File%20Storage)

#### Program 2 - Node & Express Site With File Storage
![Screenshot of user information page](/assets/images/four)
![Screenshot of user display table](/assets/images/mod1_2.PNG)

This assignment was to make a playable four in a row game using Node.js, Express, and React.  This assignment introduces us to React which is used to make the user interface on the front end.  React makes it simple to create HTML pages using props which are like object in other class-based coding languages but just like Node.js and Express the syntax is hard to get used to.

The biggest challenge in this assignment other than getting used to new syntax was trying to make the board display correctly when a user selects a square to play.  Since in a normal version of Four in a Row the pieces are dropped from above and stacks on top of each other.  The game board was an array of square props which had a background color value that would update accordingly to who turn it was.  Since the board is 6 x 7 it made the column of blocks end up being 7 indices away from each other in the array.  So, I ended up catching the array index of the square and storing it in a counter variable.  I would save that counter variable into an index variable if the array prop at the counter variable did not have a color for the background.  Then the counter variable would get increased by 7 to get the next column square in the array.  I would do this until it reaches the last index in the column or a square that has already been changed.

[Go to repository](https://github.com/TJEgbert/TJEgbert.github.io/tree/main/Program%202%20-%20Connect%20Four)