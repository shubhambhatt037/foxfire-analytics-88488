interface FoxIconProps {
  className?: string;
}

export const FoxIcon = ({ className = "w-6 h-6" }: FoxIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 2L8 8L12 10L16 8L12 2Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M12 10L8 8L4 14L8 16L12 10Z"
        fill="currentColor"
        opacity="0.7"
      />
      <path
        d="M12 10L16 8L20 14L16 16L12 10Z"
        fill="currentColor"
        opacity="0.7"
      />
      <path
        d="M12 10L8 16L12 22L16 16L12 10Z"
        fill="currentColor"
        opacity="0.85"
      />
    </svg>
  );
};
