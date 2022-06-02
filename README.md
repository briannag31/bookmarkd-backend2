# Bookmark'd Backend


**Summary**

| Field | Detail |
|-------|--------|
| Project Name | Bookmark'd|
| Team Members | Brianna Gaines, Fernando Galvan, & Kelly Luu|
| Trello Board | https://trello.com/b/x0E1bB9H/bookmarkd|


## Technologies & Dependencies to be used:

- JavaScript
- Mongoose
- CORS
- Morgan
- MongoDB
- Heroku
- Express
- Nodemon


## Intended Routes
| Endpoint | Method | Response | Other |
| -------- | ------ | -------- | ----- |
| /bookmark | GET | JSON of all items | |
| /bookmark | POST | Create new item return JSON of new item | body must include data for new item |
| /bookmark/:id | GET | JSON of item with matching id number | |
| /bookmark/:id | PUT | update item with matching idea, return its JSON | body must include updated data |
| /bookmark/:id | DELETE | delete the item with the matching id | |

## Model
bookmark{  
    id: Object,  
    title: string,  
    url: string  
}

