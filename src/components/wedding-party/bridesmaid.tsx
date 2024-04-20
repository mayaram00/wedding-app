import "./wedding-party.css";
import "./bridesmaid.css";

import { PhotoBox } from "./photo-box";
export function Bridesmaid({ name }: { name: string }) {
  const text =
    " Holly and I used to throw monthly parties at our apartment. This is from our May party to celebrate our graduation!";
  return (
    <div className="bridesmaid-container">
      <div className="intro">
        <div className="name">
          <div className="label">{name}</div>
        </div>
        <div className="info-box blue">
          <div className="image">
            <img src={"/static/wedding-party/holly2.jpg"} />
          </div>
          <div className="label">Fighting On Forever</div>
        </div>
      </div>
      <div className="pics">
        <div className="row">
          <PhotoBox
            image="/static/wedding-party/holly2.jpg"
            title="Always Hosting"
            text={text}
            color="purple"
          ></PhotoBox>

          <PhotoBox
            image="/static/wedding-party/holly2.jpg"
            title="Always Hosting"
            text={text}
            color="green"
          ></PhotoBox>
          <PhotoBox
            image="/static/wedding-party/holly2.jpg"
            title="Always Hosting"
            text={text}
            color="blue"
          ></PhotoBox>
        </div>
        <div className="row">
          <PhotoBox
            image="/static/wedding-party/holly2.jpg"
            title="Always Hosting"
            text={text}
            color="orange"
          ></PhotoBox>

          <PhotoBox
            image="/static/wedding-party/holly2.jpg"
            title="Always Hosting"
            text={text}
            color="yellow"
          ></PhotoBox>
          <PhotoBox
            image="/static/wedding-party/holly2.jpg"
            title="Always Hosting"
            text={text}
            color="pink"
          ></PhotoBox>
        </div>
      </div>
    </div>
  );
}
