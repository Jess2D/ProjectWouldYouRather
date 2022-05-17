# Would you rather? 🟢 🔴

The **"Would You Rather?"** Project is a web app that lets a user play the “Would You Rather?” game. The game works by asking questions to a user in the form:

> “Would you rather [option A] or [option B] ?”.

Answering "neither" or "both" is against the rules.

In this app, users will be able to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard.

![alt cover](https://github.com/Jess2D/ProjectWouldYouRather/blob/main/assets/concept/cover.png)

## App Features

### Login

### Home

On this page, the user is able to toggle between his/her answered and unanswered polls on the home page, which is located at the root. The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom).
The unanswered questions should be shown by default, and the name of the logged-in user should be visible on the page.

### Question

Each polling question should link to the details of that poll.
The details of each poll should be available at **questions/:question_id**
When a poll is clicked on the home page, the following is shown:

1. Text “Would You Rather”;
2. Avatar of the user who posted the polling question; and
3. Two options.

### Answered poll

1. Text of the option;
2. Number of people who voted for that option; and
3. Percentage of people who voted for that option.

### Error Page

404 page if the user is trying to access a poll that does not exist.

### New Question

On this page, the user is able to create a new question.
The form for posting new polling questions should be available at the **/add route**. The application shows the text “Would You Rather” and have a form for creating two options. Upon submitting the form, a new poll should be created, the user should be taken to the home page, and the new polling question should appear in the correct category on the home page.

### Leader board

This page shows how many questions each user has asked and answered that are available at the /leaderboard route. Each entry on the leaderboard contains the following:

1. User’s name;
2. User’s picture;
3. Number of questions the user asked; and
4. Number of questions the user answered

## App Architecture

Create React app ty

Src


-assets


-components


—home


——view


——tests


——component


—error


——view


——tests


——component


—newQuestion


——view


——tests


——component


—question


——view


——tests


——component


—leaderBoard


——view


——tests


——component


-redux



-styles
