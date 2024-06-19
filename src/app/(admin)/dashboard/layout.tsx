import Link from "next/link";

const layout = async ({
  children,
  model,
}: Readonly<{
  children: React.ReactNode;
  model: React.ReactNode;
}>) => {
  return (
    <>
      {model}
      <div className="relative">{children}</div>
    </>
  );
};

export default layout;
