/** Abstract artwork made from the brand colors. variant is 0 through 5. */
export default function ArtPanel({ variant = 0, className = "" }) {
  return <div className={`art art-${variant} ${className}`.trim()} aria-hidden="true" />;
}
