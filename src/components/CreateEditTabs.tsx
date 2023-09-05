import {
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Card,
} from "@tremor/react";
import { CreateRecord } from "./CreateRecord";
import { EditRecord } from "./EditRecord";

export function CreateEditTabs() {
  return (
    <Card className="sticky w-md flex flex-col text-center">
      <TabGroup>
        <TabList variant="solid">
          <Tab>Crear Registro</Tab>
          <Tab>Editar Registro</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <CreateRecord />
          </TabPanel>
          <TabPanel>
            <EditRecord />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Card>
  );
}
