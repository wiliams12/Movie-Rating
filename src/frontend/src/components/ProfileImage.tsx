import { useState } from "react";
import styles from "./ProfileImage.module.css";
import placeholderImage from "../assets/placeholder-200x300.png";

function ProfileCardItem({
  item,
  getImageUrl,
}: {
  item: any;
  getImageUrl: any;
}) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <li className={styles.ProfileCard}>
      <h4>
        {item.name}
        {item.character && <span>as {item.character}</span>}
      </h4>

      {Boolean(item.photo) && !imageFailed ? (
        <img
          src={getImageUrl(item.photo, "normal", "profile")}
          alt={`Profile of ${item.name}`}
          loading="lazy"
          crossOrigin="anonymous"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <img src={placeholderImage} alt="imageNotFound" />
      )}

      <p>{item.job}</p>
    </li>
  );
}

export default ProfileCardItem;
