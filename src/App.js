import Header from "./components/UI/Header";
import InvestForm from "./components/InvestInput/InvestForm";
import ResultList from "./components/Result/ResultList";

function App() {
  return (
    <div>
      <Header />
      <InvestForm />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <ResultList />
    </div>
  );
}

export default App;
