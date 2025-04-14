type SectionTitleProps = {
  children: string;
  id?: string;
};

const SectionTitle = ({ children, id }: SectionTitleProps) => {
  return (
    <h2
      id={id}
      className="text-center mx-auto text-3xl/6 md:text-4xl/6 font-bold text-black dark:text-white"
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
