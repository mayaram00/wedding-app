import { useDispatch } from "react-redux";
import "./header.css";
import { Page, switchPage } from "../store/pageSlice";
import { useAppSelector } from "../app/hooks";
export function Header() {
  const dispatch = useDispatch();
  const selectedPage = useAppSelector((state) => state.pages?.selectedPage);
  const pages: Page[] = [
    "Home",
    "Our Journey",
    "Wedding Party",
    "Photos",
    "Schedule",
    "RSVP",
  ];

  const handleClick = (tab: any) => {
    dispatch(switchPage(tab.currentTarget.name));
  };

  return (
    <div className={`header ${selectedPage === "Home" ? "tall" : "small"}`}>
      {selectedPage === "Home" && (
        <img src={"/static/big-header.png"} className="image tall" />
      )}
      {selectedPage !== "Home" && (
        <img src={"/static/small-header.png"} className="image small" />
      )}
      <div className="tabs">
        {pages.map((page) => {
          return (
            <button
              key={page}
              onClick={handleClick}
              name={page}
              className={`${selectedPage === page ? "selected" : ""}`}
            >
              {page}
            </button>
          );
        })}
      </div>
    </div>
  );
}
