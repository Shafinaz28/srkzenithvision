import { Link } from "react-router-dom";
import { ArrowIcon, EyeIcon } from "./Icons";

const icons = {
  arrow: <ArrowIcon />,
  eye: <EyeIcon />,
  none: null,
};

/** Gold or outline button. Use `to` for a page link, or leave it off for a form button. */
export default function Button({
  to,
  children,
  variant = "gold",
  type = "button",
  onClick,
  icon = "arrow",
  className = "",
}) {
  const cls = `btn btn-${variant} ${className}`.trim();
  const inner = (
    <>
      {children}
      {icons[icon]}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cls}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick}>
      {inner}
    </button>
  );
}
