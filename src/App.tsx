import { RecordsList } from "./components/RecordsList";
import { CreateRecord } from "./components/CreateRecord";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <RecordsList />
      <CreateRecord />
      <Toaster richColors />
    </>
  );
}

export default App;
