# Tech-Blog

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

This is a fullstack web application that allows programmers to create post and comments. This web site allows the user to use CRUD operations on the data and stores the information to a database..  

---

### Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [User-Story](#user-story)
- [Acceptance-Criteria](#acceptance-criteria)
- [Screenshots](#screenshots)
- [CodeSnippets](#codeSnippets)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#tests)
- [Important-Information-Questions](#important-information-questions)

---

## Installation

To use this application you can clone the repository, run the "npm i" node command.(Node is required for this application) After the all packages are installed and the database schema is set up the user can run "npm run seed" to seed the database. The application with be displayed to localhost:4200.

---

## Usage

The homepage can be viewed without logging in. If the user wants to see the comments that are associated with the blogs they have to log in. The user can see their dashboard after logging in and are able to update and delete their post and comments.

---

## Technologies

- **MySQL**
- **CSS**
- **bcrypt**
- **Session-Sequelize**
- **JavaScript**
- **Handlebars**
- **Node.js**
- **GitHub**
- **Sequelize**
- **Express**

---

## User Story

```
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Screenshots

#### Home Page

![Home Page](./public/images/home.jpg)

#### Login Page

![Login Page](./public/images/login.jpg)

---

## CodeSnippets

#### Partials implementation for a blog post

``` Handlebars
<article class="container">
  <a href="/blog/{{id}}">
    <div class = "blog_title"><span class="title">{{title}}</span><span>{{user.user_name}} {{format_date createdAt}} </span></div>
    <div class = "blog_body">{{post}}</div>
  </a>
</article>
```

#### List all the blop post

``` Handlebars
<div class = "blog_title comments_title"><span class="blog.title">Posts</span></div>

{{#each displayedBlogs}}
{{>blogs}}
{{/each}}

```

---

## Tests

N/A

---

## **Important-Information-Questions**

---

## License

The license used on this project was MIT license

[license link](https://opensource.org/licenses/MIT)

## Contributors

Kyle Vance

## Questions

If you have any questions regarding this project, please reach me by email at vanceofalifetime@protonmail.com

[Live Link](https://tech-blog-101.herokuapp.com/)

[LinkedIn](https://www.linkedin.com/in/kyle-s-vance/)
