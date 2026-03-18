import styles from "./Aside.module.css";

function Aside() {
  return (
    <aside className={styles.aside}>
      <h2 className={styles.heading}>About</h2>
      <p className={styles.text}>
        This app allows you to search, rate, and analyze movies through detailed
        statistics and visual insights. <br />
        The core rating system is built on the premise that a movie's overall
        &quot;quality&quot; cannot be defined by a single metric. While
        traditional systems rely on one universal score, this application
        introduces a two-dimensional rating plane. Every movie is evaluated on
        two distinct axes: Quality (objective filmmaking, screenplay, acting)
        and Entertainment (subjective enjoyment, pacing, fun factor).
      </p>

      <h3 className={styles.heading}>The Flaw in the 1D Scale:</h3>
      <p className={styles.text}>
        Consider the IMDb ratings (as of March 2026).{" "}
        <i>Harry Potter and the Deathly Hallows: Part 2</i> sits at an
        impressive 8.1 stars. <br />
        While it is a great movie, some might argue the screenplay has pacing
        issues or structural flaws. Yet, it shares the exact same 8.1 rating as
        films widely considered cinematic masterpieces:{" "}
        <i>Dead Poets Society</i>, <i>Million Dollar Baby</i>,{" "}
        <i>Gran Torino</i>, <i>Ratatouille</i>, <i>Gone Girl</i>, <i>Jaws</i>,
        or the 11-time Oscar winner <i>Ben-Hur</i>. <br />
        Why does it score so highly? Because it is incredibly fun, nostalgic,
        and epic—it is the grand finale of a beloved series. When viewers are
        restricted to a single rating slider, they subconsciously merge their
        objective critique with their emotional enjoyment. <br />
        By introducing a second axis, we separate these aspects. This system
        does justice to structurally brilliant films without punishing highly
        entertaining blockbusters, providing a much more accurate reflection of
        how we actually experience cinema.
      </p>

      <h2 className={styles.heading}>How to use</h2>
      <p className={styles.text}>
        Search for a movie (note: searching by actor or director is not
        currently supported).
        <br />
        Then you can rate the ones you&apos;ve seen, and they will be stored
        securely on your device. You can display different statistics directly
        from there.
        <br />
        <br />
        You can adjust the display of your saved films from the utility bar:
      </p>
      <ul>
        <li>default - a standard grid view</li>
        <li>
          list - a compact view, ideal for quickly scanning large libraries
        </li>
        <li>graph - displays your movies plotted on a 2D plane</li>
        <li>invert - toggles between ascending and descending order</li>
        <li>quality - sorts strictly by the objective quality axis</li>
        <li>
          entertainment - sorts strictly by the subjective entertainment axis
        </li>
        <li>
          combined - uses the geometric mean (the square root of quality ×
          entertainment) to calculate a balanced score
        </li>
        <li>
          difference - calculates the oscillation between your personal rating
          and the TMDB global average
        </li>
      </ul>
    </aside>
  );
}

export default Aside;
