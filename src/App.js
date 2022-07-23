import { memo, useCallback, useState, useRef, useLayoutEffect} from "react";

const Button = memo(({ text, onClick }) => {
  console.log("button is rendered");
  return <button onClick={onClick}>{text}</button>
})

function App() {
  const [text, setText] = useState("");
  const textRef = useRef(text);

  useLayoutEffect(() => {
    textRef.current = text;
  }, [text])

  const onClick = useCallback(() => {
    console.log("save text:", textRef.current);
  }, [])

  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)} />
      <Button text="submit" onClick={onClick}/>
    </div>
  );
}

export default App;
