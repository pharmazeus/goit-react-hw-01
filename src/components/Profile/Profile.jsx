import css from "./Profile.module.css";

export default function Profile({
  user: { username, tag, location, avatar, stats },
}) {
  return (
    <div>
      <div className={css.profileContainer}>
        <img className={css.image} src={avatar} alt={username} />
        <div className={css.profileAtrbtsList}>
          <p className={css.headingName}>{username}</p>
          <p className={css.headingName}>{tag}</p>
          <p className={css.headingName}>{location}</p>
          <ul>
            <li className={css.statUnit}>
              <span className={css.text}>Followers</span>
              <span className={css.text}>: {stats.followers}</span>
            </li>
            <li className={css.statUnit}>
              <span className={css.text}>Views</span>
              <span className={css.text}>: {stats.views}</span>
            </li>
            <li className={css.statUnit}>
              <span className={css.text}>Likes</span>
              <span className={css.text}>: {stats.likes}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
