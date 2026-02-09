type SectionTitleProps = {
  children: string;
  id?: string;
};

const SectionTitle = ({ children, id }: SectionTitleProps) => {
  return (
    <div className="text-center mx-auto mb-10" id={id}>
      <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
        <span className="gradient-text font-display">{children}</span>
      </h2>
      <span className="block w-16 h-[3px] bg-[var(--primaryColor)] rounded-full mx-auto mt-4 opacity-80" />
    </div>
  );
};

export default SectionTitle;
