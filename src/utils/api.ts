import { CatOutput, CommandError, LSOutput } from "./command";

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

export const downloadFile = async (path: string) => {
  const queryPath = path.replace("~", "").slice(1);
  const response = await fetch(
    URL + "download/" + (queryPath.length == 0 ? "~" : queryPath)
  );
  if (!response.ok) {
    return new CommandError(
      "wget",
      response.status == 404
        ? `${queryPath}: No such file or directory`
        : "Unknown error occurred"
    );
  }
  return await response.blob();
};

export const sendMessage = async (
  title: string,
  inputName: string,
  email: string,
  message: string
) => {
  const response = await fetch(URL + "contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      inputName,
      email,
      message,
    }),
  });
  return response.ok;
};

export const adminSignIn = async (username: string, password: string) => {
  const response = await fetch(URL + "admin/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  if (response.ok) localStorage.setItem("token", (await response.json()).token);
  return response.ok;
};

export const getAdminResponse = async (page = 0) => {
  const response = await fetch(URL + `admin/auth/contact/${page}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  if (response.status == 403) {
    localStorage.removeItem("token");
    throw Error("Expired Token");
  }
  if (!response.ok) {
    throw Error("Unexpected Error");
  }
  return await response.json();
};
