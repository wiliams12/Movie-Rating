import styles from "./Aside.module.css";
function Aside() {
  return (
    <aside className={styles.aside}>
      <h2 className={styles.heading}>About</h2>
      <p className={styles.text}>
        This app allows you to search and rate movies, and then display useful
        statistics and insights. <br></br>The rating system comes from an idea
        that not all movies are the same and that their overall "quality" cannot
        be described by one characteristic. <br></br>Of course there has to be a
        characteristic for quality, basicaly what everyone is used to when
        rating essentialy everything. <br></br>The distinction I made is that
        there is a second axis for every movie, you can image it as a plane.
      </p>
      <h3>Example:</h3>
      <p>
        I will be using the rating from IMDB(17.3.2026).<br></br>
        <i>Harry Potter and the Deathly Hallows: Part 2</i> has 8.1 stars, which
        is quite a lot.<br></br> This is only my personal opinion, but maybe
        even you might feel that it has some drawbacks, when watching the film,
        I always get the feelings that it is too fast-paced, that something in
        the screenplay is off. <br></br>Yet it has the same rating as many other
        films that I personallu consider masterpieces (you may not, but I hope
        that at least one of them makes you consider this theory):{" "}
        <i>Dead Poets Society</i>, <i>Million Dollar Baby</i>,{" "}
        <i>My Neighbor Totoro</i>, <i>Gran Torino</i>, <i>Ratatouille</i>,{" "}
        <i>Gone Girl</i>, <i>Jaws</i>, <i>The Deer Hunter</i> or <i>Ben-Hur</i>,
        which had won 11 oscars. <br></br>Why I think that it has such a high
        rating is that even though the "quality" might be lover than the other
        films with same rating, it is more fun, nostalgic, epic... It is the
        grand finale of a series many people had grew up with. <br></br>And
        because everyone uses only one rating system, viewers unconsiously put
        these emotions into the singular rating. <br></br>But if we introduce
        other axis, we can now distinguish between more aspects of the movie.
        Giving justice to heartfelt flicks that deserve to have a better quality
        that some blockbusters. <br></br>This model that computes the overall
        "rating" so overall, those movies can still have better ratings, but the
        rooted "quality" rating won't disappear.
      </p>
      <h2 className={styles.heading}>How to use?</h2>
      <p className={styles.text}></p>
    </aside>
  );
}

export default Aside;
