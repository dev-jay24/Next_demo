"use server";

import QustionList from "./_components/QustionList";
import UserList from "./_components/UserList";

const Page = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  let pageNo = 1;
  if (searchParams?.page && +searchParams?.page > 0) {
    pageNo = +searchParams?.page;
  }
  return (
    <div>
      <QustionList />
      <UserList pageNo={pageNo} />
    </div>
  );
};

export default Page;
