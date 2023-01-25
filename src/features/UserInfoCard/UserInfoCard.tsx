import { UserDataType } from "../UserList/UserListSlice";
import { capitalizeFirstLetter } from "../../app/utils";
import styles from "./UserInfoCard.module.css";
import { FC } from "react";

type UserInfoCardProps = {
  userData: UserDataType;
  onClose: () => void;
};

function UserInfoCard(props: UserInfoCardProps) {
  return (
    <div className={styles.root}>
      <CloseButton onClose={props.onClose} />

      <MainInfoSection userData={props.userData} />

      <Divider />

      <PrivateInfoSection userData={props.userData} />

      <SendButton />
    </div>
  );
}

export default UserInfoCard;

const CloseButton: FC<{ onClose: () => void }> = ({ onClose }) => (
  <div
    className={styles.closeButton}
    onClick={onClose}
    data-testid="close-button"
  >
    x
  </div>
);

const MainInfoSection: FC<{ userData: UserDataType }> = ({ userData }) => (
  <div className={styles.userAboutContainer}>
    <img className={styles.photo} src={userData.photo} alt={userData.name} />
    <span className={styles.name}>{userData.name}</span>
    <span className={styles.position}>{userData.position}</span>
  </div>
);

const Divider = () => <div className={styles.divider} />;

const PrivateInfoSection: FC<{ userData: UserDataType }> = ({ userData }) => (
  <div className={styles.userPrivateInfoContainer}>
    {["phone", "url", "email"].map((itemName: string) => (
      <div className={styles.userPrivateInfoItem} key={itemName}>
        <span className={styles.privateInfoName}>
          {capitalizeFirstLetter(itemName)}
        </span>
        <span
          className={
            itemName !== "phone"
              ? `${styles.privateInfoValue + styles.blue} ${styles.blue}`
              : styles.privateInfoValue
          }
        >
          {userData[itemName as keyof UserDataType] ?? "No have a data"}
        </span>
      </div>
    ))}
  </div>
);

const SendButton = () => (
  <button className={styles.sendButton}>Send message</button>
);
