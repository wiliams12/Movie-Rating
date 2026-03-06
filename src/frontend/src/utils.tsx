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

    default:
      size_w = "original";
  }

  return `${config.secure_base_url}${size_w}${filePath}`;
}
