import classNames from "classnames";

type ButtonProps = {
  children: React.ReactNode;
  variant: "default" | "primary" | "secondary";
};

const Button = ({ children, variant }: ButtonProps) => {
  const buttonClassnames = classNames({
    "capitalize font-medium text-xl px-8 py-4 rounded-lg bg-[#0AA92F] hover:bg-[#195E00] transition-all duration-500 text-white":
      variant === "default",
    "uppercase text-xl font-bold rounded-full px-10 py-4 transition-all duration-300 bg-[#0AA92F] hover:bg-[#195E00] hover:scale-90":
      variant === "secondary",
    "font-bold text-2xl bg-[#0AA92F] text-white px-10 tablet:px-16 py-4 transition-all duration-500 hover:bg-[#195E00] rounded-full uppercase":
      variant === "primary",
  });

  return <button className={buttonClassnames}>{children}</button>;
};

export default Button;
