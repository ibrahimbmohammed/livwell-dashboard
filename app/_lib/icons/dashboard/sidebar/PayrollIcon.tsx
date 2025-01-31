// eslint-disable-next-line import/no-unresolved
import { IconProps } from './Icon.types';

function FinanceIcon({ className }: IconProps) {
  return (
    <svg
      className={`${className} `}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 7.00171C21.175 7.01382 22.3529 7.11027 23.1213 7.87865C24 8.75733 24 10.1715 24 13V19C24 21.8284 24 23.2426 23.1213 24.1213C22.2426 25 20.8284 25 18 25H12C9.17157 25 7.75736 25 6.87868 24.1213C6 23.2426 6 21.8284 6 19V13C6 10.1715 6 8.75733 6.87868 7.87865C7.64706 7.11027 8.82497 7.01382 11 7.00171"
        stroke=""
        stroke-width="1.5"
      />
      <path d="M11 17H19" stroke="" stroke-width="1.5" stroke-linecap="round" />
      <path
        d="M10 13.5H20"
        stroke=""
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M12 20.5H18"
        stroke=""
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M11 6.5C11 5.67157 11.6716 5 12.5 5H17.5C18.3284 5 19 5.67157 19 6.5V7.5C19 8.32843 18.3284 9 17.5 9H12.5C11.6716 9 11 8.32843 11 7.5V6.5Z"
        stroke=""
        stroke-width="1.5"
      />
    </svg>
  );
}

export default FinanceIcon;

// #6B788E
