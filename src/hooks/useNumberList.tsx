import { useState } from "react";

const useNumberList = (initialArray: number[]) => {
  // TODO
  // refer readme.md for what to return
  const [list, setList] = useState(initialArray);

  const pushstart = (param: number) => {
    list.unshift(param);
    setList([...list]);
  };

  const popend = () => {
    list.pop();
    setList([...list]);
  };

  const pushend = (param: number) => {
    let newlist = [];
    list.map((elm, i) => {
      newlist.push(elm);
    });
    newlist.push(param);
    setList([...newlist]);
    return list;
  };

  const popstart = () => {
    list.shift();
    setList([...list]);
  };

  const clear = () => {
    setList([]);
  };

  const reset = () => {
    setList([...initialArray]);
    // return list;
  };

  return [
    list,
    setList,
    { pushstart, pushend, popstart, popend, clear, reset },
  ];
};

export default useNumberList;
