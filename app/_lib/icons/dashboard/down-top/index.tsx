interface WalletProps {
  className?: string;
}

function DownTopIcon({ className }: WalletProps) {
  return (
    <svg
      className={className}
      width="16"
      height="8"
      viewBox="0 0 16 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.11098 1.54614L6.97195 7.06235C7.54953 7.60595 8.45047 7.60595 9.02805 7.06235L14.889 1.54614C15.1907 1.26225 15.205 0.787595 14.9212 0.485965C14.6373 0.184334 14.1626 0.169951 13.861 0.453838L8 5.97005L2.13903 0.453837C1.8374 0.16995 1.36274 0.184333 1.07885 0.485963C0.794965 0.787594 0.809349 1.26225 1.11098 1.54614Z"
        fill="#667185"
      />
    </svg>
  );
}

export default DownTopIcon;
