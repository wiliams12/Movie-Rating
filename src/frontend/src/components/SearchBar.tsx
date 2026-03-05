import { useState } from "react";
import styles from "./SearchBar.module.css";

interface Props {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevents the page from refreshing
    if (text.trim()) {
      onSearch(text);
    }
  };

  return (
    <form className={styles.searchBox} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Search
      </button>
    </form>
  );
}
