import "./Title.css";

export default function Title({ text }) {
  return (
    <div className="titleBar">
      <h1>{text}</h1>
    </div>
  );
}
