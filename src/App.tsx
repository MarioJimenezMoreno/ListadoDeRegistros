import { RecordsList } from "./components/RecordsList";
import { Toaster } from "sonner";
import { ImportRecords } from "./components/ImportRecords";
import { CreateEditTabs } from "./components/CreateEditTabs";

function App() {
  return (
    <>
      <div className="flex">
        <div className="flex flex-col my-5 ml-5 mr-auto w-[20%]">
          <CreateEditTabs />
          <ImportRecords />
        </div>
        <RecordsList />
      </div>
      <Toaster richColors />
    </>
  );
}

export default App;
