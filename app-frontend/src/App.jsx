// import { useState } from 'react'
import Button from "./components/Button/Button"
import Container from "./components/Container"

function App() {

  return (
    <Container>
      <h2>Bookstore Inventory Manager</h2>
      <Button btnClass="editButton" type="button">
        EDIT
      </Button>
      <ul></ul>
    </Container>
  );
}

export default App
