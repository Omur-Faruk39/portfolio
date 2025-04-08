import React from "react";
import useScrollHandler from "../../lib/useScrollHandler";

function NotFoundPage() {
  const [windowHeight, setWindowHeight] = React.useState(window.innerHeight);

  useScrollHandler();

  React.useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{ marginTop: "139px", paddingBottom: `${windowHeight - 139}px` }}
    >
      <h1 className="text-2xl text-red-700 text-center">404</h1>
      <p className="text-center">page not found</p>
    </div>
  );
}

export default NotFoundPage;
