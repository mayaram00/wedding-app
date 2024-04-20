import "./photo-box.css";

export function PhotoBox({
  title,
  image,
  text,
  color,
}: {
  title: string;
  image: string;
  text: string;
  color: "purple" | "green" | "pink" | "yellow" | "orange" | "blue";
}) {
  return (
    <div className="photo-box-container">
      <div className={`background-box ${color}`}>
        <img src={image} className="image" />
        <div className="pic-title">{title}</div>
      </div>
      <div className={`background-box ${color} overlay`}>
        <div className="pic-text">{text}</div>
      </div>
    </div>
  );
}
