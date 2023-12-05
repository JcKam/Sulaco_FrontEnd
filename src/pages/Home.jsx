import { useState } from "react";

// Components
import Button from "../components/Button";
// import Input from "../components/Input";

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h2>Home</h2>

      <div className="card">
        <Button
          label="S'inscrire"
          disabled="disabled"
          size="button-lg"
          style="button-primary"
          type="submit"
        />
        <Button
          label="Button secondary"
          size="button-md"
          style="button-secondary"
          type="submit"
        />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </main>
  );
};
export default Home;
