# Project Name

<br>



## Description

Search platform for tourist points of interest in different cities/countries.



<br>

## User Stories

**Errors**
- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
- **500** - As a user I want to see an error message when the user is not found, the password is incorrect and the password does not match the requirements. 

**User Authentication**

- **sign up** - As a user I want to sign up on the web page so that I can create, update and delete my own list of countries/cities/touristic points.
- **login** - As a user I want to be able to log in on the web page so that I can get back to my account
- **logout** - As a user I want to be able to log out from the web page so that I can make sure no one will access my account

**Web Page Structure**
- **homepage** - As a user I want to be able to access the homepage and access the list of countries (destinations) and log in and sign up. 
- **country listing** - As a user I want to see the list of all countries
- **city listing** - As a user I want to see the list of all cities within the country I selected, select one city and see the details of that city regarding touristic points.

<br>



## Server Routes (Back-end):



| **Method** | **Route**                          | **Description**                                              | Request  - Body                                                       |
| ---------- | ---------------------------------- | ------------------------------------------------------------ | --------------------------------------------------------------------- |
| `GET`      | `/`                                | Main page route.  Renders home `index` view.                 |                                                                       |
| `GET`      | `/login`                           | Renders `login` form view.                                   |                                                                       |
| `POST`     | `/login`                           | Sends Login form data to the server.                         | { email, password }                                                   |
| `GET`      | `/signup`                          | Renders `signup` form view.                                  |                                                                       |
| `POST`     | `/signup`                          | Sends Sign Up info to the server and creates user in the DB. | {  email, password  }                                                 |
| `POST`     | `/logout`                          | Sends Logout form data to the server.                        |                                                                       |
| `GET`      | `/countries`                       | Route to display all the countries in the database           |                                                                       |
| `GET`      | `/cities`                          | Route to display all the cities in the database              |                                                                       |
| `GET`      | `/touristicPoints/create`          | Route to display a form where the user fills in information about touristic points that are going to be created |                    |
| `POST`     | `/touristicPoints/create`          | Route to submit info about touristic Points created          | { name, image, description, {cities} }                                |
| `GET`      | `/touristicPoints/:touristicPointsId/edit` | Route to display the form to update a specific country|                                                                      |
| `POST`     | `/touristicPoints/:touristicPointsId/edit` | Route to submit the updates of a specific country    | { name, image, description, {cities} }                                |
| `POST`     | `/touristicPoints/:touristicPointsId/delete`| Route to delete a specific country                  | { name, image, description, {cities} }                                |




## Models

User model

```javascript
{
    username: {
      type: String,
      required: false,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    }
  }

```



Country model

```javascript
{
    name: String,
    image: {
      type: String,
      default: '',
    },
    cities: {
      type: Schema.Types.ObjectId,
      ref: 'city'
    },
  }

```

City Model

```javascript

{
  name: String
  description: String,
  touristicPoints: {
      type: Schema.Types.ObjectId,
      ref: 'touristicPoint'
    },
}

```

Touristic Points Model

```javascript

{
  name: String
  image: {
        type: String,
        default: ''
  },
  description: String,
}

```



## Links



### Git

The url to your repository and to your deployed project

[Repository Link]()

[Deploy Link]()



<br>



### Slides

The url to your presentation slides

[Slides Link]()

### Contributors
Filipa Flora - [`filipaflora`](https://github.com/filipaflora) - [`<linkedin-profile-link>`](https://www.linkedin.com/in/ana-filipa-flora-ribeiro)

Tomás Borda de Água - [`vayre047`](https://github.com/vayre047) - [`<linkedin-profile-link>`](https://www.linkedin.com/in/tom%C3%A1s-borda-de-%C3%A1gua-806473144/)
