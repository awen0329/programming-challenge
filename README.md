# Blog App

## version

1.0.0

## Author

Andrus Wen

# Instruction

Node v18.16.0

# App Design

First of all, here Nextjs is used for SSG and SSR. \
To implement authentication, I chose `NextAuth.js` and `Google Provider` of it to implement auth flow and by checking the token, `Add/Edit Post` functionality is limited to unauthorized users. \
For the styling, I chose `styled-components` since it is one of the great ways to implement styling in Next.js. \
To show the state management, I chose `Context API` since I need to share the post detail between `Post List` page and `Post Detail` page. \
The most important one is to mock the server and It is done successfully by `Next/API`. First of all, in order to persist the posts and comments, I set JSON file as database and by W/R to the file, I mocked all the api endpoints. The detailed explanation is added to each function in `/pages/api` folder.
The second hard one is to enact the notification system. I think the best solution is to use Websocket so I installed `Socket.io` on both `Next/API` and the components.

## App test

I know it is good to check the Nextjs app on Vercel. But it uses serverless apis and have the `call maximum execution limit` and it doesn't allow Websocket to work on it. \
So I suggest you to install this app on your local and check all of its functionalities.

## Installation

- Run `yarn` or `npm i`
- Run `yarn dev` or `npm dev` for the local environment
- Run `yarn build & yarn start` for the production environment

## Set environment variables

Please check `.env.template` file and add `.env.local` file for your local test.

# Tech Stacks

UI/SSR/SSG: ReactJS/NextJS

Authentication: NextAuth GoogleProvider

Realtime Notification: Socket.io

Styling: Styled components

DB: JSON mock database file

State Management: Context API

Form Management: react-hook-form and yup resolver

API Endpoints: Next/API

# Duration:

About 5 hours

# Project Description and tasks implementation check:

You are required to develop a small blog application with the following functionalities:

- Homepage:

  Display a list of blog posts in descending order based on the publication date.

  Each list item should show the title, a brief summary, and the publication date.

  The homepage should be created using NextJS's Static Site Generation (SSG).

- Post Detail Page:

  When a user clicks on a post on the homepage, they should be directed to the post detail page.

  This page should display the title, publication date, full content of the post, and related comments.

  Server Side Rendering (SSR) from NextJS should be used to fetch post details for each post.

- Add/Edit Post Page:

  Implement a form to add a new blog post.

  The form should include fields for the title, summary, content, and publication date.

  The same form should be used to edit existing posts.

- Authentication:

  Implement basic authentication (can be a mock) to protect the add/edit post page.

  Only authenticated users should be able to add or edit posts.

- Comments:

  Allow users to leave comments on the posts.

  For this, a form should be available on the post detail page.

- Notifications:

  Implement a basic notification system that notifies the user when a new comment is added to one of their posts.

- Validations:

  Implement validations on the add/edit post and comment forms to ensure that the entered data is valid.
