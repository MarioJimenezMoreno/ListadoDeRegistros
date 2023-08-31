import { Badge, Button, Card, TextInput, Title } from "@tremor/react";
import { useState } from "react";
import { useRecordActions } from "../hooks/useRecordActions";

export function CreateRecord() {
  const { addRecord } = useRecordActions();
  const [result, setResult] = useState<"ok" | "ko" | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setResult(null);

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const id = crypto.randomUUID() as string;
    const time = formData.get("time") as string;
    const company = formData.get("company") as string;
    const position = formData.get("position") as string;

    if (!time || !company || !position) {
      return setResult("ko");
    }

    addRecord({ id, time, company, position });
    setResult("ok");
    form.reset();
  };

  return (
    <Card style={{ marginTop: "16px" }}>
      <Title>Crear nuevo registro</Title>

      <form onSubmit={handleSubmit} className="">
        <TextInput name="time" placeholder="Aquí time" />
        <TextInput name="company" placeholder="Aquí company" />
        <TextInput name="position" placeholder="Aquí position" />

        <div>
          <Button type="submit" style={{ marginTop: "16px" }}>
            Crear registro
          </Button>
          <span>
            {result === "ok" && (
              <Badge color="green">Guardado correctamente</Badge>
            )}
            {result === "ko" && <Badge color="red">Ha habido un error</Badge>}
          </span>
        </div>
      </form>
    </Card>
  );
}
