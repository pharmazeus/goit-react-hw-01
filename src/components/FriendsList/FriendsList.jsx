import FriendsListItem from "../FriednsListItem/FriendsListItem.jsx";
import css from "./FriendsList.module.css";

export default function FriendsList({ friends }) {
  return (
    <ul className={css.friendsContainer}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendsListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}
