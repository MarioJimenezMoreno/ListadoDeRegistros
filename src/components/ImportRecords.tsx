import { Button, Card, TextInput, Title } from "@tremor/react";
import { UploadIcon } from "./Icons";
import { useReadFile } from "../hooks/useReadFile";
import { useUploadRecords } from "../hooks/useUploadRecords";

export function ImportRecords() {
  const { fileContent, handleFileChange } = useReadFile();
  const { uploadRecords } = useUploadRecords();

  return (
    <header className="flex justify-center">
      <Card className="m-5 max-w-md flex flex-col text-center">
        <Title className="text-4xl">Importa un documento de registros</Title>
        <form className="flex flex-col p-4 gap-2">
          <TextInput
            //@ts-ignore
            type="file"
            className="max-w-xl mx-auto"
            name="fileInput"
            placeholder="Selecciona un archivo TXT"
            onChange={handleFileChange}
          />
        </form>
        <Button
          disabled={!fileContent}
          icon={UploadIcon}
          color="purple"
          onClick={uploadRecords}
        >
          Subir
        </Button>
        {/* {fileContent && (

        )} */}
      </Card>
    </header>
  );
}
