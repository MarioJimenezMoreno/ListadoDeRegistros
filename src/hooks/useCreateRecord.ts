import { DatePickerValue } from "@tremor/react";
import { useState } from "react";
import { format } from "date-fns";
import { useRecordActions } from "./useRecordActions";

export const useCreateRecord = () => {
  const { addRecord } = useRecordActions();
  const [result, setResult] = useState<"completed" | "missing" | null>(null);
  let time: string = "";
  const [dateValue, setDateValue] = useState<DatePickerValue>(undefined);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setResult(null);

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const id = crypto.randomUUID() as string;

    if (dateValue) {
      time = format(dateValue, "MM/dd/yyyy");
    }

    const company = formData.get("company") as string;
    const position = formData.get("position") as string;
    const offerlink = formData.get("offerlink") as string;
    const companyweb = formData.get("companyweb") as string;

    if (!time || !company || !position) {
      setResult("missing");
    }

    addRecord({ id, time, company, position, offerlink, companyweb });
    setResult("completed");
    form.reset();
  };

  return { result, handleSubmit, dateValue, setDateValue };
};
