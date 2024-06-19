import Header from "../_components/Header";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      {" "}
      <Header />
      {children}
      {/* {model} */}
    </>
  );
};

export default layout;
