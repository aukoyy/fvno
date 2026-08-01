// https://svgomg.net/

import classNames from "classnames";

interface EmailIconProps {
  className?: string;
}

export const EmailIcon = (props: EmailIconProps) => {
  const { className = 'w-12' } = props;
  return (
    <svg
      className={classNames(className, 'p-1')}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m4 7 6.2 4.65a3 3 0 0 0 3.6 0L20 7"
      />
      <rect
        width="18"
        height="14"
        x="3"
        y="5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        rx="2"
        fill="none"
      />
    </svg>
  );
}