import { RecordsList } from "./components/RecordsList";
import { CreateRecord } from "./components/CreateRecord";
import { Toaster } from "sonner";
import { ImportRecords } from "./components/ImportRecords";

function App() {
  return (
    <>
      <div className="flex justify-evenly">
        <CreateRecord />
        <ImportRecords />
      </div>
      <RecordsList />
      <Toaster richColors />
    </>
  );
}

export default App;
