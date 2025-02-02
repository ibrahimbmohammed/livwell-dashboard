interface WalletProps {
  className?: string;
}

function DottenIcon({ className }: WalletProps) {
  return (
    <svg
      className={className}
      width="6"
      height="6"
      viewBox="0 0 6 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="3" cy="3" r="3" fill="#D9D9D9" />
    </svg>
  );
}

export default DottenIcon;
