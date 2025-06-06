import { useState } from "react";
import { toast } from "react-toastify";
import { adminSignIn } from "../../utils/api";

interface Props {
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoginPanel = ({ setAuth }: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col w-1/2 h-1/2 rounded-3xl border-zinc-300 border-2 bg-zinc-800 justify-center gap-4 items-center ">
        <label className="text-2xl">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="outline-2 outline-zinc-500 focus:outline-zinc-300 rounded-2xl p-2"
          />
        </label>
        <label className="text-2xl">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="outline-2 outline-zinc-500 focus:outline-zinc-300 rounded-2xl p-2"
          />
        </label>
        <input
          disabled={!username || !password}
          type="submit"
          className="text-2xl border-zinc-300 disabled:border-zinc-500 rounded-3xl border-2 flex py-2 px-6 cursor-pointer disabled:cursor-default disabled:text-zinc-500"
          onClick={async (e) => {
            e.preventDefault();
            toast.info("Logging In");
            const res = await adminSignIn(username, password);
            toast.dismiss();
            if (!res) toast.error("Incorrect Crediental");
            else {
              toast.success("Logged In Successfully");
              setAuth(true);
            }
          }}
        />
      </div>
    </form>
  );
};
