import { PillProps } from "@/utils/types";

const Pill: React.FC<PillProps> = ({
  label,
  isSelected,
  onClick,
  onSelect,
}) => {
  const handleClick = () => {
    onClick(label);
    onSelect(label);
  };

  return (
    <button
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
        isSelected
          ? "bg-green-900 text-white"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
      }`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Pill;
