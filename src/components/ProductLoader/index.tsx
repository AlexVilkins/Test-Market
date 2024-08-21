import ContentLoader from "react-content-loader";
import { FunctionComponent } from "react";

const ProductLoader: FunctionComponent = () => {
  return (
    <ContentLoader
      speed={2}
      width={240}
      height={300}
      viewBox="0 0 290 430"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="30" y="0" rx="10" ry="10" width="180" height="160" />
      <rect x="15" y="210" rx="5" ry="5" width="210" height="20" />
      <rect x="15" y="240" rx="5" ry="5" width="150" height="20" />
      <rect x="150" y="290" rx="5" ry="5" width="25" height="25" />
      <rect x="190" y="290" rx="5" ry="5" width="25" height="25" />
      <rect x="15" y="280" rx="10" ry="10" width="100" height="40" />
    </ContentLoader>
  );
};

export default ProductLoader;
