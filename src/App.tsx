import UserList from "./features/UserList/UserList";
import UserInfoCard from "./features/UserInfoCard/UserInfoCard";
import { useState } from "react";
import { UserDataType } from "./features/UserList/UserListSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./app/store";
import { useFetchUserListAndSave } from "./app/hooks";

import "./App.css";

function App() {
  const [isOpenUserOverview, setOpenUserOverview] = useState(false);
  const [selectedUserData, setSelectedUserData] = useState<UserDataType | null>(null);
  const userListData = useSelector((state: RootState) => state.userList.userListData)

  useFetchUserListAndSave()
  
  const handleSelectUser = (userData: UserDataType) => {
    setOpenUserOverview(true);
    setSelectedUserData(userData)
  }

  const handleCloseInfoCard = () => {
    setOpenUserOverview(false)
    setSelectedUserData(null)
  }

  return (
    <div className="App">
      {(isOpenUserOverview && selectedUserData) ? (
        <UserInfoCard
          userData={selectedUserData}
          onClose={handleCloseInfoCard}
        />
      ) : (
        <UserList userList={userListData} onSelectUser={handleSelectUser} />
      )}
    </div>
  );
}

export default App;
