const URL =
  process.env.NODE_ENV == "production"
    ? "https://api.fergus-lai.dev/"
    : "http://localhost:3000/";

export const checkDirectory = async (path: string) => {
  const queryPath = path.slice(1);
  return (
    await (
      await fetch(
        URL + "checkDirectory/" + (queryPath.length == 0 ? "~" : queryPath)
      )
    ).json()
  ).result;
};
