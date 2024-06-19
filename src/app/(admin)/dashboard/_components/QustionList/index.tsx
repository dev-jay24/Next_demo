"use client";

import Collapsible from "@/app/_components/Collapsible";
import { fetchWrapper } from "@/app/_utils/fetchWrapper";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function QustionList() {
  const [queList, setQueList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetchWrapper("question/get-all", {
      method: "POST",
    }).then((res) => setQueList(res?.data?.questions));
  }, []);
  return (
    <div className={`w-full  mx-auto px-4 md:px-5 py-5 `}>
      <div className="flex justify-center">
        <div className="w-full  bg-white shadow-xl rounded-2xl">
          <div className="px-4 py-3 border-b border-slate-200 flex align-middle justify-between items-center">
            <h2 className="font-semibold text-slate-900">Question List</h2>
            <button
              className=" m-1 bg-blue-300 rounded-md text-white p-2 font-bold text-sm"
              onClick={() => {
                router.push("/dashboard/AddQuestion");
              }}
            >
              + Add Question
            </button>
          </div>
          <div className="p-3">
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                {/* Table header */}
                <thead className="text-[13px] text-slate-500/70">
                  <tr>
                    <th className="px-5 py-2 first:pl-3 last:pr-3 bg-slate-100 first:rounded-l last:rounded-r last:pl-5 last:sticky last:right-0">
                      <div className="font-medium text-left">Questions</div>
                    </th>
                  </tr>
                </thead>
                {/* Table body */}
                <tbody className="text-sm font-medium">
                  {queList &&
                    queList.map((item: any, index) => {
                      return (
                        <tr key={item["_id"]}>
                          <Collapsible title={item.question}>
                            {item.options.map((que: any) => (
                              <div
                                key={que["_id"]}
                                className={`${
                                  item.answer == que
                                    ? "bg-green-100"
                                    : "bg-blue-100"
                                }   rounded-md p-3 w-full m-1`}
                              >
                                {que}
                              </div>
                            ))}
                          </Collapsible>
                        </tr>
                      );
                    })}
                  {/* Row */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
