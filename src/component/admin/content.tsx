import { useEffect, useState } from "react";
import { getAdminResponse } from "../../utils/api";
import type { Message } from "../../utils/message";
import { toast } from "react-toastify";
import { MessageCard } from "./MessageCard";
import { ClipLoader } from "react-spinners";

interface Props {
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AdminContent = ({ setAuth }: Props) => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState<Message[]>([]);
  const [nextPage, setNextPage] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setLoading(true);
    getAdminResponse(0)
      .then((x) => {
        setData(x.data);
        setNextPage(x.nextPage);
        setLoading(false);
      })
      .catch((e: Error) => {
        if (e.message == "Expired Token") {
          setAuth(false);
          toast.error("Token Expired");
        } else {
          toast.error("Unexpected Error, Please Try Again Later");
        }
      });
    return () => {};
  }, [page, setAuth]);
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-full w-full">
          <ClipLoader
            color={"#ffffff"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="overflow-auto flex flex-col gap-2 w-full p-2">
          {data.map((element, i) => (
            <MessageCard message={element} key={i} />
          ))}
          <div className="flex flex-row gap-2 justify-center">
            <button
              className="bg-zinc-600 rounded-full p-4 h-16 w-16 mb-4 cursor-pointer disabled:cursor-default disabled:bg-zinc-800 disabled:text-zinc-500"
              disabled={page == 0}
              onClick={() => setPage(page - 1)}
            >
              {"<"}
            </button>
            <button
              className="bg-zinc-600 rounded-full p-4 h-16 w-16 mb-4 cursor-pointer disabled:cursor-default disabled:bg-zinc-800 disabled:text-zinc-500"
              disabled={!nextPage}
              onClick={() => setPage(page + 1)}
            >
              {">"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
