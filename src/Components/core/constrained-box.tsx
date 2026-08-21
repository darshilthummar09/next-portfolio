import type { CoreComponentsProps } from "@/interfaces";

const ConstrainedBox = (props: Readonly<CoreComponentsProps>) => {
  const { children, classNames, onClick, id, elementRef, allowOverflow } = props;

  return (
    <div
      className={`relative flex flex-col w-full constrained-width p-0 mx-auto my-0 ${allowOverflow ? "overflow-visible" : "overflow-hidden"} transition duration-300 ease-in-out ${classNames}`}
      id={id}
      ref={elementRef}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default ConstrainedBox;
