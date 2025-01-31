interface WalletProps {
  className?: string;
}

function CloudIcon({ className }: WalletProps) {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="32" height="32" fill="url(#pattern0_17_4872)" />
      <defs>
        <pattern
          id="pattern0_17_4872"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_17_4872" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_17_4872"
          width="100"
          height="100"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

export default CloudIcon;
