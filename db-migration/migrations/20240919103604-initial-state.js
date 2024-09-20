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
        title: "The Martian",
        quantity: 45,
        author: "Andy Weir",
        price: 14.99,
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
