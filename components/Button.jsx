const Button = ({ title }) => {
  return (
    <button
      type="button"
      className="px-3 py-2 bg-orange text-white text-sm md:text-lg rounded-md hover:bg-orange-hover cursor-pointer"
    >
      {title}
    </button>
  );
};

export default Button;
