interface PillProps {
  label: string;
  isSelected: boolean;
  onClick: (label: string) => void;
  onSelect: (label: string) => void; // New prop
}

const Pill: React.FC<PillProps> = ({
  label,
  isSelected,
  onClick,
  onSelect,
}) => {
  const handleClick = () => {
    onClick(label);
    onSelect(label); // Notify parent about the selection
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
