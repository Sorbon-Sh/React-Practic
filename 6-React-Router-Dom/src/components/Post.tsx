import { Link } from "react-router-dom";

type Props = {
  id: number;
  title: string;
  category: string;
  image: string;
};

const Post = ({ id, title, category, image }: Props) => {
  return (
    // id элементов из итерации (при клике на конкретный элемент получаем его id)
    <Link to={`/${id}`}>
      <img src={image} alt="" />
      <div>
        <h1>Text</h1>
        <p>Category: {category}</p>
      </div>
    </Link>
  );
};

export default Post;
