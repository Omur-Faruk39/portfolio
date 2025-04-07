import React from "react";

function useScrollHandler() {
  const [count, setCount] = React.useState(0);

  if (!count) {
    window.scrollTo({
      top: "-138px",
    });
    setCount(1);
  }
}

export default useScrollHandler;
