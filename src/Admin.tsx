import { useState } from "react";
import { LoginPanel } from "./component/admin/login";
import { Bounce, ToastContainer } from "react-toastify";
import { AdminContent } from "./component/admin/content";

export const Admin = () => {
  const [auth, setAuth] = useState(!!localStorage.getItem("token"));

  return (
    <div className="flex bg-black w-full h-full font-mono p-2 text-white gap-4 justify-center">
      {!auth ? (
        <LoginPanel setAuth={setAuth} />
      ) : (
        <AdminContent setAuth={setAuth} />
      )}

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
