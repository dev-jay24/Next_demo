import React, { useState } from "react";

interface IProps {
  open?: boolean;
  title: string;
  children: React.ReactNode;
}

const Collapsible: React.FC<IProps> = ({ open, children, title }) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="p-3 border-b-2 justify-content-between justify-between flex ">
          <h6 className="font-weight-bold inline-flex">{title}</h6>

          <button type="button" className="btn " onClick={handleFilterOpening}>
            Options
          </button>
        </div>

        <div className="border-bottom">
          <div>
            {isOpen && (
              <div className="p-3 transition-all duration-700">{children}</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Collapsible;
