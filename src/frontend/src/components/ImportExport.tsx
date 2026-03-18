import { useRef } from "react";
import { initDB } from "../database";
import styles from "./ImportExport.module.css";

interface Props {
  type?: "import" | "export";
}

function ImportExport({ type = "export" }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const text = await file.text();
      const importedMovies = JSON.parse(text);

      const db = await initDB();
      const tx = db.transaction("movies", "readwrite");

      for (const movie of importedMovies) {
        tx.store.put(movie);
      }

      await tx.done;
      console.log("Database successfully imported!");
      window.location.reload();
    } catch (error) {
      console.error("Failed to parse or import JSON:", error);
      alert("Invalid backup file. Please upload a valid JSON.");
    } finally {
      event.target.value = "";
    }
  };

  const handleExport = async () => {
    try {
      const db = await initDB();
      const allMovies = await db.getAll("movies");

      const jsonString = JSON.stringify(allMovies, null, 2);
      const blob = new Blob([jsonString], { type: "application/json" });
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `movies_backup_${new Date().toISOString().split("T")[0]}.json`;
      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to export database:", error);
    }
  };

  if (type === "import") {
    return (
      <>
        <button className={styles.Btn} onClick={handleImportClick}>
          {type}
        </button>
        <input
          type="file"
          accept=".json"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </>
    );
  }

  return (
    <button className={styles.Btn} onClick={handleExport}>
      {type}
    </button>
  );
}

export default ImportExport;
