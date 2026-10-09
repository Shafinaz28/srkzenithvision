export function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" className="btn-icon" aria-hidden="true">
      <path
        d="M4 10h12M12 5l5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="btn-icon" aria-hidden="true">
      <path
        d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" className="btn-icon" aria-hidden="true">
      <path
        fill="currentColor"
        d="M10 2.2l1.8 4.6 5 .4-3.8 3.2 1.2 4.8L10 12.8 5.8 15.2l1.2-4.8L3.2 7.2l5-.4L10 2.2z"
      />
    </svg>
  );
}

export function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="btn-icon" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="btn-icon" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
