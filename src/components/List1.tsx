import useNumberList from "./../hooks/useNumberList";

type List1Props = {
  // TODO
  initalValues: Array<number>;
  label: string;
};

const List1 = (props: List1Props) => {
  const [list, setList, { pushstart, popend, clear, reset }]: any =
    useNumberList(props.initalValues);
    console.log(list)

  return (
    <div data-testid="list1">
      <h3 data-testid="list1-label">
        {/* Label */}
        {props.label}
      </h3>

      {/* Iterate List and wrap the element div below inside */}
      {list.map((el: any, index: any) => {
        return (
          <div key={index} data-testid="list1-element">
            {/* Each element in a list */} {el}
          </div>
        );
      })}

      <input
        data-testid="list1-input"
        type="number"
        onChange={(e) => setList(e.target.value)}
      />

      <button onClick={() => pushstart()} data-testid="list1-btn-append-start">
        {/* Append to start of list btn */}PushStart
      </button>

      <button onClick={() => popend()} data-testid="list1-btn-pop-end">
        {/* po last element btn */}PopEnd
      </button>

      <button onClick={() => clear()} data-testid="list1-btn-clear">
        {/* clear list and set empty button */}Clear
      </button>

      <button onClick={() => reset()} data-testid="list1-btn-reset">
        {/* Reset list to default value btn */}Reset
      </button>
    </div>
  );
};

export default List1;
