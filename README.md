### I created a temporary backend for the frontend to test early. Use this as a reference when you're stuck. It's a working example, feel free to fork and change or just to glance at!

[https://bw-dad-jokes.herokuapp.com/]

## *POST*

#### Login:

[https://bw-dad-jokes.herokuapp.com/auth/login]

#### Register:

[https://bw-dad-jokes.herokuapp.com/auth/register]

### _Users_

*STRUCTURE:*

    {
        "username": "string",
        "password": "string"
    }

### _Jokes_

Note: will not allow duplicate jokes.

*STRUCTURE:*

    {
        "question": "string",
        "answer": "string",
        "public": true,
        "user_id": INTEGER
    }




## *GET*

### _Users_

`Restricted`, will return a list of users:
[https://bw-dad-jokes.herokuapp.com/users]

Will also return a user object that decodes your current token you access as `user.id`:

    "user": {
            "id": 1,
            "username": "mitsy"
        }

`Restricted`, will return a specific user with an array of their posted jokes:

[https://bw-dad-jokes.herokuapp.com/api/users/:id]

Ex:

    {
        "id": 2,
        "username": "thisismitsy",
        "password": "$2a$14$SZHGxXWeMBdc4h4mtMa7f.eL1I0oZtvPy.bOecCAHB5hpJLP1ngi.",
        "jokes": [
            {
                "id": 3,
                "question": "Why did the scarecrow win an award?",
                "answer": "Because he was outstanding in his field!",
                "public": true,
                "user_id": 2
            },
            {
                "id": 5,
                "question": "Why couldn't the bicycle stand up by itself?",
                "answer": "It was two tired!",
                "public": false,
                "user_id": 2
            }
        ]
    }


### _Jokes_

[https://bw-dad-jokes.herokuapp.com/api/jokes]

Will give you a list of jokes:

- It does not have restrictions
- But it will not return private jokes
- Logging in will return the whole list of jokes (must have valid token)
- Public is not required. Defaults to true.
- `user_id` links to the current logged user.
  * store `currentUser` from `token` as a state in your frontend application
  * when you submit a joke, have `user_id: currentUser` to track user posts
  * alternatively, a get request for users will return a user object.



You can also update, and delete for all tables. All endpoints are there. Hope this helps! Always shoot me a message for help/walkthroughs! Happy coding everyone!