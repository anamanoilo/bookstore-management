import { useEffect, useState } from "react";
import { getBooks } from "../services/booksAPI";

export default function useFetchBooks() {
  const [books, setBooks] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const data = await getBooks();
        setBooks(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { books, error, loading };
}
