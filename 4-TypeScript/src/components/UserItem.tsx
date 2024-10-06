import { IUser } from "../Types/types";

interface UserItemProps {
  //* Здесь передаем его как объект без [] - Потому что мы уже итерируем его из  "UserList"
  user: IUser;
}

const UserItem = ({ user }: UserItemProps) => {
  return (
    <div>
      {user.id}, {user.name}, {user.address.city}, {user.address.street}
    </div>
  );
};

export default UserItem;
