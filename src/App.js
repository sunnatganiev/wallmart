import { useState } from "react";
import Delivery from "./components/Delivery";
import Content from "./layout/Content";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";

function App() {

  const [showDelivery, setShowDelivery] = useState(false)

  const handleShowDelivery = (condition) => {
    setShowDelivery(condition)
  }

  return (
    <div className="App">
      <Header delivery={handleShowDelivery} />
      <Sidebar />
      <Content />
      {showDelivery && <Delivery delivery={handleShowDelivery} show={showDelivery} />}
    </div>
  );
}

export default App;
