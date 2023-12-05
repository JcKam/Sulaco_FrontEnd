import { useState } from "react";

import Button from "../components/Button";
import Input from "../components/Input";

const ReactCounter = () => {
  const [count, setCount] = useState(0);
  const handleClickPlus = () => {
    setCount(count + 1);
  };
  const handleClickMoins = () => {
    setCount(count - 1);
  };

  const [count2, setCount2] = useState(0);

  return (
    <main>
      <h1>React Counter</h1>
      <section>
        <Button
          label="-"
          disabled={false}
          size="button-md"
          style="button-primary"
          type="button "
          state={count2}
          setState={setCount2}
          modifState="-"
        />
        <Input value={count2} />

        <Button
          label="Reset"
          disabled={false}
          size="button-md"
          style="button-secondary"
          type="button "
          state={count2}
          setState={setCount2}
        />
        <Button
          label="+"
          disabled={false}
          size="button-md"
          style="button-primary"
          type="button "
          state={count2}
          setState={setCount2}
          modifState="+"
        />
      </section>
      <section>
        <button onClick={handleClickMoins}>-</button>
        <p>{count}</p>
        <button onClick={handleClickPlus}>+</button>
      </section>
    </main>
  );
};

export default ReactCounter;
