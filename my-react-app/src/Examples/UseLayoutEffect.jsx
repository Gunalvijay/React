import { useState, useLayoutEffect, useRef } from "react";

function Layout(){

  const boxRef = useRef();
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(boxRef.current.offsetWidth);
  }, []);

  return(
    <div>

      <div
        ref={boxRef}
        style={{width:"200px",background:"lightblue"}}
      >
        Box
      </div>

      <p>Width: {width}</p>

    </div>
  );
}

export default Layout;