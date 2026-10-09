import Button from "./Button";

export default function FormSuccess({ title, text, onReset }) {
  return (
    <div className="form-success" role="status">
      <h3>{title}</h3>
      <p>{text}</p>
      <Button variant="ghost" icon="none" onClick={onReset}>
        Write another
      </Button>
    </div>
  );
}
