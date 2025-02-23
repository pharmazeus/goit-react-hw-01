import clsx from "clsx";
import css from "./FriendsListItem.module.css";

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  const statusClsx = clsx(css.text, isOnline ? css.online : css.offline);

  return (
    <div>
      <div className={css.friendUnit}>
        <img src={avatar} alt={name} width="48" />
        <p className={css.text}>{name}</p>
        <p className={css.text}></p>
        <p className={statusClsx}>{isOnline ? "Online" : "Offline"}</p>
      </div>
    </div>
  );
}
