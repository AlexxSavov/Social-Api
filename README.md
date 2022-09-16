# Social API

## Description

Built using Express, Mongoose, and MongoDB this is a REST API for a social Media App

## User Story
As a social media platform, I want an API for my social network that uses NoSQL database so my website can handle larger amounts of unstructured data.

## Usage

clone repo- open terminal - npm i - npm start - test routes using Insomnia

## Models
- User
- Thought
- Reaction w/ subdoco

## Endpoints

**Reaction**
- Add a reaction:       `PUT /api/thoughts/:id/reactions`
- Delete a reaction:    `DELETE /api/thoughts/:id/reactions`

**Thought**
- Get all thoughts:     `GET /api/thoughts`
- Create a thought:     `POST /api/thoughts`
- Get thought by ID:    `GET /api/thoughts/:id`
- Update a thought:     `PUT /api/thoughts/:id`
- Delete a thought:     `DELETE /api/thoughts/:id`


**User**
- Get all users:        `GET /api/users`
- Create a user:        `POST /api/users`
- Get user by ID:       `GET /api/users/:id`
- Update a user:        `PUT /api/users/:id`
- Delete a user:        `DELETE /api/users/:id`


## Packages
- express
- moment
- mongoose

## Author

Alexandre S
