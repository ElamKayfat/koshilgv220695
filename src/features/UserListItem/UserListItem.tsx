import { UserDataType } from "../UserList/UserListSlice";
import styles from "./UserListItem.module.css";

type UserListItemProps = {
  userData: UserDataType;
  onClick: (userData: UserDataType) => void;
};

function UserListItem(props: UserListItemProps) {
  return (
    <div className={styles.root}>
      <div className={styles.mainInfoContainer}>
        <img
          className={styles.avatar}
          src={props.userData.photo}
          alt={props.userData.name}
        />

        <div className={styles.wrapper}>
          <span className={styles.name}>{props.userData.name}</span>
          <span className={styles.nickName}>{props.userData.nickname}</span>
        </div>
      </div>

      <button
        className={styles.button}
        onClick={() => props.onClick(props.userData)}
        data-testid={`${props.userData.name} view button`}
      >
        View
      </button>
    </div>
  );
}

export default UserListItem;
