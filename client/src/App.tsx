import { useState } from "react";
import { ProfileForm } from "./components/formDefinition";
import Navbar from "./components/Navbar";
import { GridBackgroundDemo } from "./components/ui/background";
import LoadingAnimation from "./components/ui/LoadingAnimation";

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <LoadingAnimation onComplete={handleLoadingComplete} />}{" "}
      <Navbar />
      <GridBackgroundDemo elements={<ProfileForm />} />
    </>
  );
}

export default App;
