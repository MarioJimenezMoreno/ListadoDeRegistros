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
  Button,
} from "@tremor/react";
import { useCalculateTime } from "../hooks/useCalculateTime";
import { useAppSelector } from "../hooks/store";
import { useRecordActions } from "../hooks/useRecordActions";

export function RecordsList() {
  const { timeDifference } = useCalculateTime();
  const records = useAppSelector((state) => state.records);

  const { removeRecord } = useRecordActions();

  return (
    <Card>
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
                <Text>{item.position}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.position}</Text>
              </TableCell>
              <TableCell>
                <Button onClick={() => removeRecord(item.id)}></Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
