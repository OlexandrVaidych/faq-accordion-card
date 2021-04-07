import Illustrations from "./Illustrations";
import Accordion from "./Accordion";
import questionsAnswers from "../questions";
import Attributions from "./Attributions";

function App() {
  return (
      <div className="container">
        <div className="component">
            <Illustrations />
            <Accordion questionsAnswers={questionsAnswers} />
        </div>
          <Attributions />
      </div>
  );
}

export default App;
