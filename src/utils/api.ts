import { CatOutput } from "./catOuput";
import { CommandError } from "./commandError";
import { LSOutput } from "./lsOutput";

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

export const listDirectory = async (path: string) => {
  const queryPath = path.slice(1);
  return new LSOutput(
    await (
      await fetch(
        URL + "listDirectory/" + (queryPath.length == 0 ? "~" : queryPath)
      )
    ).json()
  );
};

export const getFile = async (path: string) => {
  const queryPath = path.replace("~", "").slice(1);
  const response = await fetch(
    URL + "file/" + (queryPath.length == 0 ? "~" : queryPath)
  );
  if (!response.ok) {
    return new CommandError(
      "cat",
      response.status == 404
        ? `${queryPath}: No such file or directory`
        : "Unknown error occurred"
    );
  }
  return new CatOutput(await response.text());
};
