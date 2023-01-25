import UserListItem from "../UserListItem/UserListItem";
import { UserDataType } from "./UserListSlice";
import styles from './UserList.module.css'

type UserListProps = {
  userList: UserDataType[];
  onSelectUser: (userData: UserDataType) => void
};

function UserList(props: UserListProps) {
  return (
    <div className={styles.root}>
      {props.userList.map((userData) => (
        <UserListItem
          key={userData.email}
          userData={userData}
          onClick={props.onSelectUser}
        />
      ))}
    </div>
  );
}

export default UserList;
