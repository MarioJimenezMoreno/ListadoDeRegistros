import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
  Icon,
  Button,
} from "@tremor/react";
import { useCalculateTime } from "../hooks/useCalculateTime";
import { useAppSelector } from "../hooks/store";
import { useRecordActions } from "../hooks/useRecordActions";
import { DownloadIcon, TrashIcon } from "./Icons";
import { useDownloadRecords } from "../hooks/useDownloadRecords";

export function RecordsList() {
  const records = useAppSelector((state) => state.records);
  const { timeDifference } = useCalculateTime();
  const { downloadRecords } = useDownloadRecords();
  const { removeRecord } = useRecordActions();

  return (
    <Card className="max-w-full w-fit mx-auto flex flex-col">
      <section className="ml-auto flex gap-3">
        <Button icon={DownloadIcon} color="purple" onClick={downloadRecords} />
      </section>
      <Title>Lista de Registros</Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Fecha de envío</TableHeaderCell>
            <TableHeaderCell>Posición</TableHeaderCell>
            <TableHeaderCell>Empresa</TableHeaderCell>
            <TableHeaderCell>Link Oferta</TableHeaderCell>
            <TableHeaderCell>Link Web</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {records.map((item, index) => (
            <TableRow key={item.id}>
              <TableCell>
                {timeDifference[index] < 1
                  ? "Hoy"
                  : `Hace ${timeDifference[index]} ${
                      timeDifference[index] === 1 ? "día" : "días"
                    }`}
              </TableCell>
              <TableCell>
                <Text>{item.company}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.position}</Text>
              </TableCell>
              <TableCell>
                <Text color="blue">
                  <a target="_blank" href={`${item.offerlink}`}>
                    {item.offerlink}
                  </a>
                </Text>
              </TableCell>
              <TableCell>
                <Text color="blue">
                  {" "}
                  <a target="_blank" href={`${item.offerweb}`}>
                    {item.offerweb}
                  </a>
                </Text>
              </TableCell>
              <TableCell>
                <Icon
                  className="cursor-pointer"
                  tooltip="Borrar registro"
                  color="red"
                  onClick={() => removeRecord(item.id)}
                  icon={TrashIcon}
                ></Icon>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
