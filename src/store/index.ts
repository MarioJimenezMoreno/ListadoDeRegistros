import { type Middleware, configureStore } from "@reduxjs/toolkit";
import recordsReducer, {
  rollbackDeletedRecord,
  rollbackAddedRecord,
} from "./records/slice";
import { toast } from "sonner";

const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
  next(action);
  localStorage.setItem("records", JSON.stringify(store.getState()));
};

const syncWithDatabase: Middleware = (store) => (next) => (action) => {
  const { type, payload } = action;
  const previousState = store.getState();
  next(action);

  console.log(type);
  console.log(payload);

  if (type == "records/deleteRecordById") {
    const recordIdToRemove = payload;
    const recordToRemove = previousState.records.find(
      (record: any) => record.id == recordIdToRemove
    );

    fetch(`https://jsonplaceholder.typicode.com/users/${recordIdToRemove}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          toast.success("Registro eliminado correctamente");
        } else {
          toast.error("Ha habido un error");
          if (recordToRemove)
            store.dispatch(rollbackDeletedRecord(recordToRemove));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } else if (type == "records/addNewRecord") {
    fetch("https://jsonplaceholder.typicode.com/users", { method: "POST" })
      .then((res) => {
        if (res.ok) {
          toast.success("Registro guardado correctamente");
        } else {
          toast.error("Ha habido un error");
          console.log(payload);
          store.dispatch(rollbackAddedRecord(payload));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export const store = configureStore({
  reducer: {
    records: recordsReducer,
  },
  middleware: [localStorageMiddleware, syncWithDatabase],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
