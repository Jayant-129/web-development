# mongoose will be used to connect to mongodb
### mongoose need schema to connect to mongodb
## CRUD 
- Create
- Read
- Update
- Delete

## HOW TO DEFINE SCHEMA
- Schema is a blueprint of how the data will be stored in mongodb
```javascript
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    purchasedCourses : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const courseSchema = new mongoose.Schema({
    title: String,
    price: Number,
});

const User = mongoose.model('User', UserSchema);
```
- UserSchema is a blueprint of how the data will be stored in mongodb

## HOW TO INSERT DATA
```javascript
const user = User.create({
    email: "abscd",
    password: "defg"
});
```

## HOW TO QUERY DATA
### findById
```javascript
const user = User.find({
    email: "abscd",
    password: "defg"
});
```
### findOne
```javascript
const user = User.findOne({
    email: "abscd",
    password: "defg"
});
```
### find
```javascript
const user = User.find({
    email: "abscd",
    password: "defg"
});
```
### updateOne
```javascript
User.updateOne({
    email: "abscd",
    password: "defg"
}, {
    email: "abscd",
    password: "defg"
    $push: {
        purchasedCourses: course._id
    }
});
```
### deleteOne
```javascript
User.deleteOne({
    email: "abscd",
    password: "defg"
});
```
### deleteMany
```javascript
User.deleteMany({
    email: "abscd",
    password: "defg"
});
```

## HOW TO CONNECT TO MONGODB
```javascript
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/name_of_database');
```

## Cluster 
- Cluster is a group of servers that store your data , 












