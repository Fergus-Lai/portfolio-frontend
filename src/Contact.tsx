import { useRef } from "react";
import { Bounce, ToastContainer, toast, type Id } from "react-toastify";
import { sendMessage } from "./utils/api";

interface Props {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  inputName: string;
  setInputName: React.Dispatch<React.SetStateAction<string>>;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

export const ContactMe = ({
  title,
  setTitle,
  email,
  setEmail,
  inputName,
  setInputName,
  message,
  setMessage,
}: Props) => {
  const toastId = useRef<Id | null>(null);
  return (
    <div className="flex bg-black w-full h-full overflow-auto font-mono p-2 text-white gap-4 justify-center">
      <form className="flex w-full md:w-2/3 pt-2 gap-2 flex-col">
        <label className="text-xl gap-8 flex w-full h-fit justify-between items-center">
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="outline-2 outline-zinc-500 rounded-xl w-2/3 p-2 focus:outline-zinc-300"
          />
        </label>
        <label className="text-xl gap-8 flex w-full h-fit justify-between items-center">
          Email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="outline-2 outline-zinc-500 rounded-xl w-2/3 p-2 focus:outline-zinc-300"
          />
        </label>
        <label className="text-xl gap-8 flex w-full h-fit justify-between items-center">
          Name:
          <input
            type="text"
            name="Name"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            className="outline-2 outline-zinc-500 rounded-xl w-2/3 p-2 focus:outline-zinc-300"
          />
        </label>
        <label className="text-xl">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="h-full resize-none mb-4 outline-2 outline-zinc-500 focus:outline-zinc-300 p-2 rounded-xl"
        />
        <input
          disabled={!title || !inputName || !email || !message}
          type="submit"
          className="rounded-2xl border-2 cursor-pointer border-zinc-500 focus:border-zinc-300 p-2 disabled:cursor-default disabled:text-zinc-400"
          onClick={async (e) => {
            e.preventDefault();
            toast.dismiss();
            if (!title) {
              toastId.current = toast.error("Missing Field Title");
              return;
            }
            if (!inputName) {
              toastId.current = toast.error("Missing Field Input Name");
              return;
            }
            if (!email) {
              toastId.current = toast.error("Missing Field Email");
              return;
            }
            if (!message) {
              toastId.current = toast.error("Missing Field Message");
              return;
            }
            if (!email.includes("@")) {
              toastId.current = toast.error("Invalid Email Address");
              return;
            }
            toastId.current = toast.info("Submitting Form");
            const res = await sendMessage(title, inputName, email, message);
            toast.dismiss(toastId.current);
            if (res)
              toastId.current = toast.success(
                "Message Sent. Thanks for Contacting Me"
              );
            else
              toastId.current = toast.error(
                "Unable to send message. Please try again later"
              );
          }}
        />
      </form>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
};
