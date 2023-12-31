import { useEffect, useState } from "react";
import { useAppSelector } from "./store";

export const useCalculateTime = () => {
  const records = useAppSelector((state) => state.records);
  const [timeDifference, setTimeDifference] = useState<number[]>([]);

  useEffect(() => {
    const fechaActual = new Date();
    const differences = records.map((record) => {
      console.log(record.time);
      const recordTime = new Date(record.time);
      console.log(recordTime);
      const millisecondDifference =
        fechaActual.getTime() - recordTime.getTime();
      return Math.floor(millisecondDifference / (1000 * 60 * 60 * 24));
    });
    setTimeDifference(differences);
  }, [records]);

  return { timeDifference };
};
