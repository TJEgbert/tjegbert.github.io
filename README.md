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
![Screenshot of user information page](/assets/images/four_in_a_row_1.PNG)
![Screenshot of user display table](/assets/images/four_in_a_row_2.PNG)

This assignment was to make a playable four in a row game using Node.js, Express, and React.  This assignment introduces us to React which is used to make the user interface on the front end.  React makes it simple to create HTML pages using props which are like object in other class-based coding languages but just like Node.js and Express the syntax is hard to get used to.

The biggest challenge in this assignment other than getting used to new syntax was trying to make the board display correctly when a user selects a square to play.  Since in a normal version of Four in a Row the pieces are dropped from above and stacks on top of each other.  The game board was an array of square props which had a background color value that would update accordingly to who turn it was.  Since the board is 6 x 7 it made the column of blocks end up being 7 indices away from each other in the array.  So, I ended up catching the array index of the square and storing it in a counter variable.  I would save that counter variable into an index variable if the array prop at the counter variable did not have a color for the background.  Then the counter variable would get increased by 7 to get the next column square in the array.  I would do this until it reaches the last index in the column or a square that has already been changed.

[Go to repository](https://github.com/TJEgbert/TJEgbert.github.io/tree/main/Program%202%20-%20Connect%20Four)

#### Program 3 & 4 - Solo Banking App
![Screenshot of the Solo Banking App Create Account Page](/assets/images/solobankapp_1.PNG)
![Screenshot of a request sent by postman to test routes](/assets/images/solobankapp_2.PNG)

This was a combination of two assignments where we used the whole MERN stack to handle a banking web application.  The first assignment was how to use Mongo and the RESTful API to handle the backend and communication with the frontend.  Then the next assignment was getting the front end working with the backend that we did in the previous assignment.  As well as adding Sessions to track when the user is logged in or out.

For the first assignment with the focus on backend mainly getting the routes working and getting the Mongo database set up.  Mongo being documented-oriented database made it easy to save JSON object into a database.  Getting the database set up in code was relatively easy since MongoDB already had most of the code readily available that is needed to make it work in the project.  There’s only a couple of things that needed to be switched, and it was good to go.  One of the challenges was getting used to how to make queries to the database in the routes.  Having the semester prior I had taken the advance database class we worked with MongoDB a little bit, so I was familiar with how to make the queries.  But since it’s in code it works differently so it took a little bit to get used to that and start getting the data back I wanted.  The other challenge was getting the information from the routes to save into the database.  This is where RESTful API comes into play and again it comes down to syntax.  Learning how RESTful wanted the data in the first place and how it wanted to return the data.  This just took a little bit of practice to remember syntax but after a couple of routes I had it down.

For the next assignment it was putting everything together in the MERN stack and adding sessions into it.  MERN stands for MongoDB, Express, React, and Node.js while sessions is a way to track a user throughout a website.  Sessions are more commonly known as cookies.  This wasn’t too bad since the backend was done other than sessions it was easy to make the front end and get the information sent to the backend.  Like I mentioned for the first assignment it took a little to figure out how exactly the RESTful API wanted the information sent to is so that took a me a little bit of time to figure out.  The other was figuring out once the session was set was how to include the session data in the request to the backend so the backend could use that to get the user information from the database.  Many hours debugging and doing research to figure out all I need to do in the POST or GET was added “include credentials” and then it was included in the request in a easily accessible req.session.username.


[Go to repository](https://github.com/TJEgbert/TJEgbert.github.io/tree/main/Program%203%20%26%204%20-%20Solo%20Banking%20App)

#### Program 5 - Group Hangman
![Screenshot of the hangman game board](/assets/images/hangman1.PNG)
![Screenshot of hangman score board for words with five letters](/assets/images/hangman2.PNG)

This was the first group assignment we did for the CS3750.  Using the MERN stack, RESTful API, and sessions to make a functioning Hangman game.  Having prior experience with game development my code section was the core game logic.  The most challenging part was getting the string back to the front end with letters guessed in the correct spot while maintaining blank spaces.  Once the user gets a correct guess that letter would be saved into an array of correct guessed.  Then the word the user is guessing would get looped through checking if the letter was in correct guess array.  The return string would start being built if the letter were in the correct guess array it would then add that letter to the return string.  Any other letter not in the correct guess array an underscore space would be added

[Go to repository](https://github.com/TJEgbert/TJEgbert.github.io/tree/main/Program%205%20-%20Group%20Hangman)

#### Program 6 - Group Bank APP
![Screenshot of login screen of the group banking app](/assets/images/group_bank.PNG)
![Screenshot of the create account page in the group banking app](/assets/images/group_bank_2.PNG)

For this assignment we used the MERN stack, RESTful API, and sessions to make a functioning bank app.  The app was split up between two assignments, the front end and the back end.  I coded the front end for the admin, created account and login pages.  In the create account, since there were three roles a user could fall into customer, administrator, or employee.  I wanted to use radio buttons, but I wasn’t sure to how to update the value, so I was able to pass it to the backend.  After some research I was able to figure out how to update a variable so I could pass it to the backend.

Then for the second part of the assignment which was making the routes needed for the backend.  I worked on the routes related to the three pages mentioned above as will working on the sessions with another group member.  The routes for my pages were simple since they were like our previous solo bank app assignment.  The new thing that was added for the assignment was to make it closer to a real-life scenario we ended up hashing the user password and saving it into the database.  Luckly this wasn’t too hard since JavaScript has a library that had the hashing function we needed for the assignment.  It did take me a little bit of time to figure out exactly how to make it work but nothing too terrible.

[Go to repository](https://github.com/TJEgbert/TJEgbert.github.io/tree/main/Program%206%20-%20Group%20Bank%20APP)