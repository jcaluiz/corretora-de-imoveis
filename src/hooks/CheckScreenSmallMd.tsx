'use client';
import { Context } from "@/store/context/Context";
import { useContext, useEffect, useState } from "react";

export default function CheckScreenSmallMd() {
    const {state, dispatch} = useContext(Context);
    const [isScreenSmallMd, setIsScreenSmallMd] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmallMd(window.innerWidth < 768 ? true : false);
      const check = window.innerWidth < 768 ? true : false;
      dispatch({type: 'SCREENMD', payload: check})
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(state.isScreenSmallMd);
  return (
    <></>
  )
}