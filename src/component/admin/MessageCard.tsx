import type { Message } from "../../utils/message";

export const MessageCard = ({ message }: { message: Message }) => {
  return (
    <div className="flex flex-col w-full rounded-2xl bg-zinc-700 p-4">
      <div className="flex flex-row w-full justify-between">
        <div className="font-bold text-xl">{message.title}</div>
        <div>{message.created_at}</div>
      </div>
      <div className="flex flex-row text-lg gap-2">
        {message.name}
        <a href={"mailto:" + message.email} className="underline">
          {"<" + message.email + ">"}
        </a>
      </div>
      <div>{message.message}</div>
    </div>
  );
};
