import React from "react";

import Loadable from "react-loadable";



// 加载动画
const loadingComponent = () => {
  return <div>
    <div>loading</div>
  </div>;
};

// 当不传加载动画时候使用默认的加载动画
 const loadable =  (loader, loading = loadingComponent) => {
  return Loadable({
    loader,
    loading,
  });
};
export default loadable