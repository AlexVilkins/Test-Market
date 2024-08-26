import { FunctionComponent, memo } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

import { TabsItem } from "../components";
import { useAppSelector } from "../redux/hooks";
import { Product } from "../redux/products/types";
import { useAppDispatch } from "../redux/hooks";
import { delFavorite } from "../redux/favorite/slice";
import box from "../assets/empty_box.png";

const Favorite: FunctionComponent = () => {
  const favorites = useAppSelector((state) => state.favorite.favorites);
  const dispatch = useAppDispatch();

  const CloseIcon = memo(() => <FaArrowLeft />);

  const deleteItem = (item: Product) => {
    dispatch(delFavorite(item));
  };

  return (
    <div className="container">
      <Link to="/">
        <button className="basketClose">
          <CloseIcon />
        </button>
      </Link>

      <h1>Закладки</h1>

      {favorites.length > 0 ? (
        favorites.map((item) => (
          <TabsItem key={item.id} item={item} deleteItem={deleteItem} />
        ))
      ) : (
        <div className="emptyBox">
          <img src={box} alt="emptyBox" />
          <p>Закладок нет!</p>
        </div>
      )}
    </div>
  );
};

export default Favorite;
