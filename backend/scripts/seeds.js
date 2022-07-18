const mongoose = require('mongoose');
var userLib = require("../models/User.js");
var itemLib = require("../models/Item.js");
var commentLib = require("../models/Comment.js");
const User = mongoose.model("User", userLib.UserSchema);
const Item = mongoose.model('Item', itemLib.ItemSchema);
const Comment = mongoose.model('Comment', commentLib.CommentSchema);

main().catch(err => {console.log(err); process.exit(1)});

async function main() {
  let mongo_uri = process.env.MONGODB_URI
  mongoose.connect(mongo_uri);

  await clearItems().then(clearUsers).then(clearComments)
  users = generateUsers()
  await User.insertMany(users).catch((err) => console.log("error!", err))

  items = generateItems(users)
  await Item.insertMany(items).catch((err) => console.log("error!", err))

  comments = generateComments(items)
  await Comment.insertMany(comments).then(() => console.log("Finished inserting comments"))

  process.exit(0)
}

function clearItems() {
  return Item.deleteMany({'title': {$regex: /^Seed/}}).then(function() {
    console.log("Done deleting items")
  }).catch(function(error){
    console.log("error deleting items")
  })
}

function clearUsers() {
  return User.deleteMany({'username': {$regex: /^johndoe/}}).then(function() {
    console.log("Done deleting users")
  }).catch(function(error){
    console.log("error deleting users")
  })
}

function clearComments() {
  return Comment.deleteMany({'body': {$regex: /^.*$/}}).then(function() {
    console.log("Done deleting comments")
  }).catch(function(error){
    console.log("error deleting comments")
  })
}

function generateUsers() {
  return Array.from(Array(100), (n, index) => {
    let rand = Math.random() * Math.pow(36, 6);
    let pipeZero = rand | 0;
    let randSeed = pipeZero.toString(36);
    return new User({
      username: "JohnDoe" + index,
      email: "jdoe" + index + "_" + randSeed + "@mymail.com"
    })
  });
}

function generateItems(users) {
  return Array.from(Array(100), (n, index) => {
    let rand = Math.random() * Math.pow(36, 6) | 0;
    let userIdx = Math.random() * 100 | 0
    let commentIdx = Math.random() * 100 | 0
    return new Item({
      title: "Seed item " + rand,
      description: "Another seeded item!",
      seller: users[userIdx].id,
      // comments: [
      //   new Comment({
      //     body: "This blew my mind! " + rand,
      //     seller: users[userIdx].id,
      //   })
      // ]
    })
  })
}

function generateComments(items) {
  return Array.from(Array(100), (n, index) => {
    let rand = Math.random() * Math.pow(36, 6) | 0;
    // let userIdx = Math.random() * 100 | 0
    let itemIdx = Math.random() * 100 | 0
    return new Comment({
      body: "This blew my mind! " + rand,
      // seller: items[itemIdx].seller.id,
      item: items[itemIdx].id
    })
  })
}
