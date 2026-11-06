/** A labeled form control. Put an input, select, or textarea inside. */
export default function Field({ label, full = false, icon: Icon, children }) {
  return (
    <label className={full ? "field field-full" : "field"}>
      <span className="field-label">
        {Icon ? (
          <span className="field-label-icon" aria-hidden="true">
            <Icon />
          </span>
        ) : null}
        <span>{label}</span>
      </span>
      {children}
    </label>
  );
}
