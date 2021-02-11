import { useState } from "react";

function useFavicon(initurl) {
  const [favicon, setLocked] = useState(() => {
    const favicon = initurl;
    let link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement("link");

    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href = initurl;
    document.getElementsByTagName("head")[0].appendChild(link);

    return favicon;
  });

  const setFavicon = (url) => {
    let link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
    setLocked(url);
  };

  return setFavicon;
}
export default useFavicon;
