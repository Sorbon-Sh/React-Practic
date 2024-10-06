import { FC, ReactNode } from "react";
import UserList from "./UserList";
import { IUser } from "../Types/types";

export enum CardVariant {
  outline = "yellow",
  colorFone = "red",
}

interface CardProps {
  //* Здесь вопрасительный знак означает (не обязательные)
  width?: string;
  height?: string;
  children: ReactNode;
  variant: CardVariant;
}

const Card: FC<CardProps> = ({ width, height, children, variant }) => {
  //* Указываем что в переменной мпссив объектов и передаем созданные типы данных (массив объектов типов данных)
  //*   Как мы создали массив с объектами, также создаем такуюже структуру типыпов данных для них
  const users: IUser[] = [
    {
      id: 1,
      name: "Ethan",
      email: "email",
      address: { street: "Street", city: "City", zipcode: "enter" },
    },
    {
      id: 2,
      name: "Other",
      email: "email",
      address: { street: "Street", city: "City", zipcode: "code" },
    },
  ];

  return (
    <>
      <div
        draggable
        style={{
          width,
          height,
          background: variant === CardVariant.colorFone ? variant : "",
        }}
      >
        {children}
      </div>

      <UserList users={users} />
    </>
  );
};

export default Card;
