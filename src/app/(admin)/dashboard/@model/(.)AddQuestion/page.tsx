"use client";

import { useEffect } from "react";
import AddQuestionForm from "../../_components/AddQuestionForm";

function Page() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <div className=" z-50 absolute top-0 bottom-0 left-0 right-0 backdrop-brightness-50">
      <div className=" flex justify-center items-center h-screen">
        <div className=" w-fit bg-white px-8 py-14 rounded-md">
          <AddQuestionForm />
        </div>
      </div>
    </div>
  );
}

export default Page;
