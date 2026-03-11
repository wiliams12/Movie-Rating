export function buildImageUrl(
  config: any,
  filePath: string | null,
  size: string = "normal",
  type: string,
) {
  if (!filePath || !config || !config.secure_base_url) {
    return null;
  }

  let size_w: string;

  switch (type) {
    case "backdrop":
      if (size === "large") {
        size_w = config.backdrop_sizes[2];
      } else if (size == "small") {
        size_w = config.backdrop_sizes[0];
      } else {
        size_w = config.backdrop_sizes[1];
      }
      break;
    case "poster":
      if (size === "large") {
        size_w = config.poster_sizes[5];
      } else if (size === "small") {
        size_w = config.poster_sizes[1];
      } else {
        size_w = config.poster_sizes[4];
      }
      break;

    case "logo":
      if (size === "large") {
        size_w = config.logo_sizes[5];
      } else if (size === "small") {
        size_w = config.logo_sizes[1];
      } else {
        size_w = config.logo_sizes[3];
      }
      break;

    case "profile":
      if (size === "large") {
        size_w = config.profile_sizes[2];
      } else if (size === "small") {
        size_w = config.profile_sizes[0];
      } else {
        size_w = config.profile_sizes[1];
      }
      break;

    default:
      size_w = "original";
  }

  return `${config.secure_base_url}${size_w}${filePath}`;
}

export function getFlagEmoji(countryCode: string) {
  console.log(countryCode);
  if (!countryCode || countryCode.length !== 2) return "";

  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));

  return String.fromCodePoint(...codePoints);
}
