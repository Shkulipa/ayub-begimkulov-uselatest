import { memo, useCallback, useState, useRef, useLayoutEffect} from "react";

function useLatest(value) {
  const valueRef = useRef(value);

  useLayoutEffect(() => {
    valueRef.current = value;
  }, [value])

  return value;
}

const Button = memo(({ text, onClick }) => {
  console.log("button is rendered");
  return <button onClick={onClick}>{text}</button>
})

function App() {
  const [text, setText] = useState("");
  const latestText = useLatest(text);

  const onClick = useCallback(() => {
    console.log("save text:", latestText.current);
  }, [latestText])

  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)} />
      <Button text="submit" onClick={onClick}/>
    </div>
  );
}

export default App;
