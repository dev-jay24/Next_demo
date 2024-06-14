"use client";

import { signOut } from "next-auth/react";

function Header() {
  return (
    <div className="w-full flex justify-end">
      <button
        className=" m-1 bg-blue-300 rounded-md text-white p-3 font-bold"
        onClick={() => {
          signOut();
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Header;
