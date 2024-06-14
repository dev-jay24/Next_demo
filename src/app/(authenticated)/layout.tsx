import Header from "../_components/Header";
import { withAuth } from "./withAuth";

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

export default withAuth(layout);
