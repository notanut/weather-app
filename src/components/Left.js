import { useContext } from "react";
import { Context } from "../context/Context";
import Display from "./Display";
import Search from "./Search";

const Left = () => {
  const context = useContext(Context)
  return (
      <section className="left">
        {context.searchOpen ? <Search /> : <Display />}
      </section>
  )
};

export default Left;
