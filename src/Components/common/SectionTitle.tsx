type SectionTitleProps = {
  children: string;
  id?: string;
};

const SectionTitle = ({ children, id }: SectionTitleProps) => {  return (
    <p className="text-center mx-auto text-3xl/6 md:text-4xl/6 font-bold p-5">
      {children}
    </p>
  );
};

export default SectionTitle;
