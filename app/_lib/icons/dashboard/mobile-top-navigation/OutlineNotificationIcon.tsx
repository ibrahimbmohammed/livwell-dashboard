interface IOutlineNotificationIconProps {
  className: string;
}

function OutlineNotificationIcon({ className }: IOutlineNotificationIconProps) {
  return (
    <svg
      className={className}
      width="26"
      height="26"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.6188 15.1519L15.4736 13.3631C14.9456 12.5375 14.6663 11.5925 14.6663 10.6294V9.0625C14.6663 6.65064 12.5724 4.68751 9.99991 4.68751C7.42742 4.68751 5.33355 6.65064 5.33355 9.0625V10.6294C5.33355 11.5925 5.05422 12.5375 4.52626 13.3631L3.38098 15.1519C3.31899 15.2481 3.31765 15.3688 3.37633 15.4663C3.43567 15.5644 3.54697 15.625 3.66697 15.625H16.3328C16.4528 15.625 16.5641 15.5644 16.6235 15.4663C16.6821 15.3687 16.6808 15.2481 16.6188 15.1519ZM4.25562 15L5.09756 13.6844C5.68818 12.7619 6.00016 11.7056 6.00016 10.6294V9.0625C6.00016 6.99438 7.79405 5.3125 9.99991 5.3125C12.2058 5.3125 13.9997 6.99438 13.9997 9.0625V10.6294C13.9997 11.7056 14.3116 12.7619 14.9016 13.6844L15.7442 15H4.25562Z"
        fill="#0D9589"
      />
      <path
        d="M10.0013 2.5C9.26596 2.5 8.668 3.06062 8.668 3.75001V5.00002C8.668 5.17249 8.81733 5.3125 9.00132 5.3125C9.18531 5.3125 9.33465 5.17249 9.33465 4.99999V3.75001C9.33465 3.40501 9.63328 3.12502 10.0013 3.12502C10.3692 3.12502 10.6679 3.40501 10.6679 3.75001V5.00002C10.6679 5.17249 10.8172 5.3125 11.0012 5.3125C11.1852 5.3125 11.3345 5.17249 11.3345 4.99999V3.75001C11.3345 3.06062 10.7366 2.5 10.0013 2.5Z"
        fill="#0D9589"
      />
      <path
        d="M11.4431 15.1544C11.3491 15.0056 11.1457 14.9569 10.9864 15.0425C10.8271 15.13 10.7738 15.3219 10.8671 15.4706C10.9538 15.6087 11.0011 15.7744 11.0011 15.9375C11.0011 16.4544 10.5525 16.875 10.0012 16.875C9.44986 16.875 9.00124 16.4544 9.00124 15.9375C9.00124 15.7744 9.04858 15.6087 9.13523 15.4706C9.22788 15.3212 9.17457 15.13 9.01589 15.0425C8.85525 14.9569 8.65257 15.0056 8.55926 15.1544C8.41193 15.3906 8.33394 15.6612 8.33394 15.9375C8.33397 16.7994 9.08123 17.5 10.0005 17.5C10.9198 17.5 11.6671 16.7994 11.6684 15.9375C11.6684 15.6612 11.5904 15.3906 11.4431 15.1544Z"
        fill="#0D9589"
      />
      <path
        d="M16.167 10.3416C16.167 11.8028 15.0932 12.9098 13.8601 12.9098C12.6269 12.9098 11.5531 11.8028 11.5531 10.3416C11.5531 8.88044 12.6269 7.77344 13.8601 7.77344C15.0932 7.77344 16.167 8.88044 16.167 10.3416Z"
        stroke="white"
      />
    </svg>
  );
}

export default OutlineNotificationIcon;
