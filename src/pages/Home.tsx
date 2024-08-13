import { FunctionComponent, useState } from "react";
import { Header, Footer } from "../components";

const Home: FunctionComponent = () => {
  const [filterVal, setFilterVal] = useState("");

  const onChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterVal(e.target.value);
  };

  return (
    <div>
      <Header filterVal={filterVal} onChangeFilter={onChangeFilter} />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
