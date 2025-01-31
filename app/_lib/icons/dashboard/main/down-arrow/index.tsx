interface WalletProps {
  className?: string;
}

function DownArrowMainIcon({ className }: WalletProps) {
  return (
    <svg
      className={className}
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1.5L6 6.5L11 1.5"
        stroke="#6B788E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default DownArrowMainIcon;
