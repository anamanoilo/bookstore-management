module.exports = {
  async up(db, client) {
    await db.collection("books").insertMany([
      {
        title: "Jurassic World: Fallen Kingdom",
        quantity: 130,
        author: "J. A. Bayona",
        price: 10.99,
      },
      {
        title: "Tag",
        quantity: 59,
        author: "Jeff Tomsic",
        price: 12.99,
      },
      {
        title: "The Martian",
        quantity: 45,
        author: "Andy Weir",
        price: 14.99,
      },
      {
        title: "Ready Player One",
        quantity: 76,
        author: "Ernest Cline",
        price: 11.99,
      },
      {
        title: "The Silent Patient",
        quantity: 34,
        author: "Alex Michaelides",
        price: 9.99,
      },
      {
        title: "The Great Gatsby",
        quantity: 100,
        author: "F. Scott Fitzgerald",
        price: 8.99,
      },
      {
        title: "To Kill a Mockingbird",
        quantity: 85,
        author: "Harper Lee",
        price: 7.99,
      },
      {
        title: "1984",
        quantity: 67,
        author: "George Orwell",
        price: 6.99,
      },
      {
        title: "Moby Dick",
        quantity: 25,
        author: "Herman Melville",
        price: 13.99,
      },
      {
        title: "The Catcher in the Rye",
        quantity: 95,
        author: "J. D. Salinger",
        price: 9.49,
      },
      {
        title: "Pride and Prejudice",
        quantity: 110,
        author: "Jane Austen",
        price: 7.49,
      }
    ]);
  },
};
