const DTMark = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 120 120"
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 26 Q24 18 32 18 L42 18 C74 18 96 34 96 60 C96 86 74 102 42 102 L32 102 Q24 102 24 94 Z
         M48 40 H88 V52 H48 Z
         M62 52 H76 V80 H62 Z"
    />
  </svg>
);

export default DTMark;
