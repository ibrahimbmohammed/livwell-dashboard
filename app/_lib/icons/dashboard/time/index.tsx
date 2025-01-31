interface WalletProps {
  className?: string;
}

function TimeHourGlassIcon({ className }: WalletProps) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 12L9.63387 14.3431C7.29587 16.6584 6.12688 17.816 6.45415 18.8148C6.48228 18.9007 6.51721 18.9842 6.55862 19.0646C7.04039 20 8.6936 20 12 20C15.3064 20 16.9597 20 17.4414 19.0646C17.4828 18.9842 17.5178 18.9007 17.5459 18.8148C17.8732 17.816 16.7042 16.6584 14.3662 14.3431L12 12ZM12 12L14.3662 9.65685C16.7042 7.3416 17.8732 6.18397 17.5459 5.18519C17.5178 5.09934 17.4828 5.01582 17.4414 4.93541C16.9597 4 15.3064 4 12 4C8.6936 4 7.04039 4 6.55862 4.93541C6.51721 5.01582 6.48228 5.09934 6.45415 5.18519C6.12688 6.18397 7.29587 7.3416 9.63387 9.65685L12 12Z"
        stroke="white"
        stroke-width="1.5"
      />
      <path
        d="M10.4 6.79999H13.6"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M10.4 17.2H13.6"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
}

export default TimeHourGlassIcon;
