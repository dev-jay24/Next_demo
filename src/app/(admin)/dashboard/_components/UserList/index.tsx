"use server";
import { fetchWrapper } from "@/app/_utils/fetchWrapper";
import Link from "next/link";
import { redirect } from "next/navigation";
import { json } from "stream/consumers";

export default async function UserList({ pageNo }: { pageNo: number }) {
  const res = await fetchWrapper("auth/get-all", {
    method: "POST",
    body: JSON.stringify({ page: pageNo, limit: 2 }),
  });
  const userList = await res.data.users;
  return (
    <div className="w-full  mx-auto px-4 md:px-5 py-5">
      <div className="flex justify-center">
        <div className="w-full  bg-white shadow-xl rounded-2xl">
          <div className="px-4 py-3 border-b border-slate-200">
            <h2 className="font-semibold text-slate-900">User List</h2>
          </div>
          <div className="p-3">
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                {/* Table header */}
                <thead className="text-[13px] text-slate-500/70">
                  <tr>
                    <th className="px-5 py-2 first:pl-3 last:pr-3 bg-slate-100 first:rounded-l last:rounded-r last:pl-5 last:sticky last:right-0">
                      <div className="font-medium text-left">#</div>
                    </th>
                    <th className="px-5 py-2 first:pl-3 last:pr-3 bg-slate-100 first:rounded-l last:rounded-r last:pl-5 last:sticky last:right-0">
                      <div className="font-medium text-left">First Name</div>
                    </th>
                    <th className="px-5 py-2 first:pl-3 last:pr-3 bg-slate-100 first:rounded-l last:rounded-r last:pl-5 last:sticky last:right-0">
                      <div className="font-medium text-left">Last Name</div>
                    </th>
                    <th className="px-5 py-2 first:pl-3 last:pr-3 bg-slate-100 first:rounded-l last:rounded-r last:pl-5 last:sticky last:right-0">
                      <div className="font-medium text-left">email</div>
                    </th>
                    <th className="px-5 py-2 first:pl-3 last:pr-3 bg-slate-100 first:rounded-l last:rounded-r last:pl-5 last:sticky last:right-0">
                      <div className="font-medium text-left">Phone Number</div>
                    </th>
                    <th className="px-5 py-2 first:pl-3 last:pr-3 bg-slate-100 first:rounded-l last:rounded-r last:pl-5 last:sticky last:right-0">
                      <div className="font-medium text-left"> </div>
                    </th>
                  </tr>
                </thead>
                {/* Table body */}
                <tbody className="text-sm font-medium">
                  {userList &&
                    userList.map((item: any, index: any) => {
                      return (
                        <tr key={item["_id"]}>
                          <td className="px-5 py-3 border-b border-slate-200 last:border-none first:pl-3 last:pr-3 last:bg-gradient-to-r last:from-transparent last:to-white last:to-[12px] last:pl-5 last:sticky last:right-0">
                            <div className="text-slate-500">{index + 1}</div>
                          </td>
                          <td className="px-5 py-3 border-b border-slate-200 last:border-none first:pl-3 last:pr-3 last:bg-gradient-to-r last:from-transparent last:to-white last:to-[12px] last:pl-5 last:sticky last:right-0">
                            <div className="flex items-center">
                              <div className="text-slate-900">
                                {item.firstName}
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-3 border-b border-slate-200 last:border-none first:pl-3 last:pr-3 last:bg-gradient-to-r last:from-transparent last:to-white last:to-[12px] last:pl-5 last:sticky last:right-0">
                            <div className="text-slate-500">
                              {item.lastName}
                            </div>
                          </td>
                          <td className="px-5 py-3 border-b border-slate-200 last:border-none first:pl-3 last:pr-3 last:bg-gradient-to-r last:from-transparent last:to-white last:to-[12px] last:pl-5 last:sticky last:right-0">
                            <div className="text-slate-900">{item.email}</div>
                          </td>
                          <td className="px-5 py-3 border-b border-slate-200 last:border-none first:pl-3 last:pr-3 last:bg-gradient-to-r last:from-transparent last:to-white last:to-[12px] last:pl-5 last:sticky last:right-0">
                            <div className="text-slate-900">
                              {item.phoneNumber}
                            </div>
                          </td>

                          <td className="px-5 py-3 border-b border-slate-200 last:border-none first:pl-3 last:pr-3 last:bg-gradient-to-r last:from-transparent last:to-white last:to-[12px] last:pl-5 last:sticky last:right-0">
                            <button className="h-8 whitespace-nowrap justify-center rounded-full px-3 py-1 text-sm font-medium text-blue-500 hover:text-white border border-slate-200 shadow-sm hover:bg-blue-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-300 transition-colors group">
                              View{" "}
                              <span className="text-slate-200 group-hover:text-blue-400 transition-colors">
                                /
                              </span>{" "}
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  {/* Row */}
                </tbody>
              </table>
              <div className=" justify-center flex align-middle items-center mt-4">
                <button className=" p-1 w-10 border-2 rounded-md ">{`<<`}</button>
                <Link
                  href={`dashboard?page=${pageNo - 1}`}
                  className=" p-1 w-10 border-2 rounded-md "
                >{`<`}</Link>
                <p className=" p-1 m-1 w-10 text-center">{pageNo}</p>
                <Link
                  className=" p-1 w-10 border-2 rounded-md "
                  href={`dashboard?page=${pageNo + 1}`}
                >{`>`}</Link>
                <button className=" p-1 w-10 border-2 rounded-md ">{`>>`}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
