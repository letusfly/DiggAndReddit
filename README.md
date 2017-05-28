This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and [Express](http://expressjs.com/)

## Goal
Proof of concept of Digg and Raddit, upvote and downvote

## Folder Structure
```
digg-and-reddit/
  README.md
  App.js
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    index.css
    index.js
    IssueApp.js
    issue/
      IssueMain.js
      IssueForm.js
      IssueList.js
      IssueRow.js
  build/
      ...
```

## Getting started

### `npm install`
install dependencies

### `npm run build`
Launches build with react-scripts

### `node App`
Launches server

## document

### `IssueApp.js`
Project root.

### `/issue/IssueMain.js`
Handle request and response and pass properties to IssueList.

### `/issue/IssueList.js`
Receive props from IssueMain and divide data and pass IssueRow.

### `/issue/IssueRow.js`
Receive data from list and render detail information.

### `/issue/IssueForm.js`
Render input box to create issue.

### `App.js`
Server side code with expressjs.
Receive request, insert, update and sort.

## author
adslxyz@gmail.com
