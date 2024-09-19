import Button from "./components/Button/Button";
import Container from "./components/Container";
// import useFetchBooks from "./hooks/useFetchBooks";
import BookList from "./components/BookList";

function App() {
  // const { books, error, loading } = useFetchBooks();
  return (
    <Container>
      <h2>Bookstore Inventory Manager</h2>
      <Button btnClass="editButton" type="button">
        EDIT
      </Button>
      <BookList />
    </Container>
  );
}

export default App;
