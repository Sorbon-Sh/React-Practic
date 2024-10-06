import { IUser } from "../Types/types";
import UserItem from "./UserItem";

interface UserListProps {
  //* Если указать скобки массива то созданные типы данных положутся в массив (массив объектов с типоми данных)
  users: IUser[];
}

const UserList = ({ users }: UserListProps) => {
  return (
    <div>
      {users.map((user) => (
        //* Создаем отдельный компонент для сисков пользователей и передаем данные
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
