import css from "./Background.module.css";

export default function Background({ children }) {
  return (
    <div className={css.backgroundContainer}>
      <div className={css.backgroundOverlay}></div>
      <div className={css.content}>{children}</div>
    </div>
  );
}
