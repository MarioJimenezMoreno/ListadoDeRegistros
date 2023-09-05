import { Badge, Button, DatePicker, TextInput, Subtitle } from "@tremor/react";
import { useCreateRecord } from "../hooks/useCreateRecord";

export function CreateRecord() {
  const { handleSubmit, result, dateValue, setDateValue } = useCreateRecord();

  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-4 gap-2 ">
      <DatePicker
        onValueChange={(e) => {
          setDateValue(e);
          console.log(dateValue);
        }}
        className="max-w-sm mx-auto"
      />
      <Subtitle color="slate">Empresa</Subtitle>
      <TextInput
        className="max-w-sm mx-auto"
        name="company"
        placeholder="Introduce la empresa"
      />
      <Subtitle color="slate">Puesto de trabajo</Subtitle>
      <TextInput
        className="max-w-sm mx-auto"
        name="position"
        placeholder="Introduce el puesto"
      />
      <TextInput
        className="max-w-sm mx-auto"
        name="offerlink"
        placeholder="Introduce el link de la oferta"
      />
      <TextInput
        className="max-w-sm mx-auto"
        name="offerweb"
        placeholder="Introduce la web de la empresa"
      />
      <Button className="mx-auto" type="submit" color="emerald">
        Crear registro
      </Button>
      {result === "completed" && (
        <Badge className="mx-auto" color="green">
          Guardado correctamente
        </Badge>
      )}
      {result === "missing" && (
        <Badge className="mx-auto" color="red">
          Faltan Datos
        </Badge>
      )}
    </form>
  );
}
