// eslint-disable-next-line import/no-unresolved
import { IconProps } from './Icon.types';

function InventoryIcon({ className }: IconProps) {
  return (
    <svg
      className={`${className}`}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_17_4678)">
        <path
          d="M24 16C24 20.9706 19.9706 25 15 25C10.0294 25 6 20.9706 6 16C6 11.0294 10.0294 7 15 7C19.9706 7 24 11.0294 24 16Z"
          stroke=""
          stroke-width="1.5"
        />
        <path
          d="M15 16V12"
          stroke=""
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13 5H17"
          stroke=""
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_17_4678">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default InventoryIcon;

// #6B788E
