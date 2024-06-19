import Link from "next/link";

const layout = async ({
  children,
  sidebar,
  topbar,
}: //
Readonly<{
  children: React.ReactNode;
  sidebar: React.ReactNode;
  topbar: React.ReactNode;
}>) => {
  return (
    <>
      <nav>
        <Link href="/fetch/model">Open modal</Link>
      </nav>
      {children}
      <div>{sidebar}</div>
      <div>{topbar}</div>
    </>
  );
};

export default layout;
