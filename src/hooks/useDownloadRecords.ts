import { useAppSelector } from "./store";

export const useDownloadRecords = () => {
  const records = useAppSelector((state) => state.records);

  const downloadRecords = () => {
    const contenidoTXT = JSON.stringify(records);
    const blob = new Blob([contenidoTXT], { type: "text/plain" });

    const enlaceDescarga = document.createElement("a");
    enlaceDescarga.href = URL.createObjectURL(blob);
    enlaceDescarga.download = "registros.txt";

    enlaceDescarga.click();
  };

  return { downloadRecords };
};
