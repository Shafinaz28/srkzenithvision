/** A labeled form control. Put an input, select, or textarea inside. */
export default function Field({ label, full = false, children }) {
  return (
    <label className={full ? "field field-full" : "field"}>
      <span>{label}</span>
      {children}
    </label>
  );
}
