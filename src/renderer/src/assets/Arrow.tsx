interface ArrowProps {
  direction: 'top' | 'bottom'
}

export function Arrow({ direction }: ArrowProps) {
  const rotation = direction === 'bottom' ? 'rotate(180deg)' : ''

  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: rotation }}
    >
      <path
        d="M12.7612 19.4187V5.4187M12.7612 5.4187L6.76123 11.4187M12.7612 5.4187L18.7612 11.4187"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
