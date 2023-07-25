import { useState } from "react";

import Header from "./components/UI/Header";
import InvestForm from "./components/InvestInput/InvestForm";
import ResultList from "./components/Result/ResultList";

function App() {
  const [infos, setInfos] = useState(null);
  const getFormData = (_info) => {
    setInfos(_info);
  };
  return (
    <div>
      <Header />
      <InvestForm getFormData={getFormData} />
      <ResultList infos={infos} />
    </div>
  );
}

export default App;
