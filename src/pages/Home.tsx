import { FunctionComponent, useState, useEffect } from "react";

import { Header, Card, Footer, ProductLoader } from "../components";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { featchProducts } from "../redux/products/asyncAction";

const Home: FunctionComponent = () => {
  const [filterVal, setFilterVal] = useState("");

  const dispatch = useAppDispatch();
  const { items, status } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(featchProducts());
  }, []);

  const onChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterVal(e.target.value);
  };

  return (
    <div>
      <Header filterVal={filterVal} onChangeFilter={onChangeFilter} />

      <div className="content">
        {status === "loading" &&
          [...Array(8)].map((_, index) => <ProductLoader key={index} />)}
        {status === "success" &&
          items.map((item) => <Card key={item.id} item={item} />)}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
