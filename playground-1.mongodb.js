use('notesbrain');

// Create (or view) a simple "posts" collection
db.posts.insertOne({
  title: "First Post from Zee",
  date: new Date(),
  content: "hehe this is my first test post 🩵"
});

// Now fetch and show everything inside "posts"
db.posts.find().pretty();
