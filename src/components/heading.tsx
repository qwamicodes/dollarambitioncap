type props = {
  title: string;
  description?: string;
};

const Heading = ({ title, description }: props) => {
  return (
    <>
      <h1 className="uppercase text-[3.2rem] font-bold text-center">{title}</h1>
      <span className="h-[3px] bg-[#0AA92F] w-[50px]" />
      {description && (
        <p className="text-center tablet:text-left">{description}</p>
      )}
    </>
  );
};

export default Heading;
