import cx from "classnames";

const Button = ({ title, secondary }) => {
  const btnClass = cx(
    "px-4 py-2 font-medium text-sm md:text-lg rounded-full  cursor-pointer",
    {
      "bg-transparent border-solid border border-orange text-orange hover:bg-white/20":
        secondary,
      "bg-orange text-white hover:bg-orange-hover": !secondary,
    }
  );

  return (
    <button type="button" className={btnClass}>
      {title}
    </button>
  );
};

export default Button;
