import React, { useState, memo } from "react";

interface IApp {
  name?: string;
}

const App: React.FC<IApp> = (props: IApp) => {
  // const [data, setData] = useState(0);

  return <div>123</div>;
};

export default memo(App);
