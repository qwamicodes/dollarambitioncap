type props = {
  title: string;
  description?: string;
};

const Heading = ({ title, description }: props) => {
  return (
    <>
      <h1 className="uppercase md:text-[3.2rem] text-4xl font-bold text-center leading-tight">{title}</h1>
      <span className="h-[3px] bg-[#0AA92F] w-[50px]" />
      {description && (
        <p className="text-center tablet:text-left">{description}</p>
      )}
    </>
  );
};

export default Heading;
