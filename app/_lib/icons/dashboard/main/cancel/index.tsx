interface WalletProps {
  className?: string;
}

function CanCleIcon({ className }: WalletProps) {
  return (
    <svg
      className={className}
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.87571 1.19679C1.55028 0.871358 1.02264 0.871357 0.697203 1.19679C0.371766 1.52223 0.371766 2.04987 0.697203 2.37531L4.82199 6.5001L0.697203 10.6249C0.371766 10.9503 0.371766 11.478 0.697203 11.8034C1.02264 12.1288 1.55028 12.1288 1.87571 11.8034L6.0005 7.67861L10.1253 11.8034C10.4507 12.1288 10.9784 12.1288 11.3038 11.8034C11.6292 11.478 11.6292 10.9503 11.3038 10.6249L7.17902 6.5001L11.3038 2.37531C11.6292 2.04987 11.6292 1.52223 11.3038 1.19679C10.9784 0.871358 10.4507 0.871358 10.1253 1.19679L6.0005 5.32158L1.87571 1.19679Z"
        fill="white"
      />
    </svg>
  );
}

export default CanCleIcon;
