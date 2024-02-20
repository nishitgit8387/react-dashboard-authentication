import {
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Tag,
} from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import { AiOutlineDownload } from "react-icons/ai";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TransactionTable from "./components/TransactionTable";
import { BsSearch } from "react-icons/bs";

const Transaction = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Widthdrew",
      count: 55,
    },
    {
      name: "Trade",
      count: 50,
    },
  ];
  return (
    <DashboardLayout title="Transactions">
      <Flex justify={{ base: "center", xl: "end" }} mt="6" mb={3}>
        <Button leftIcon={<Icon as={AiOutlineDownload} />}>Export CSV</Button>
      </Flex>
      <Card borderRadius="16px">
        <Tabs>
          <TabList
            pt={4}
            display="flex"
            justifyContent="space-between"
            flexDir={{ base: "column", xl: "row" }}
          >
            <HStack>
              {tabs.map((tab) => (
                <Tab key={tab.name} display="flex" gap="2" pb={4}>
                  {tab.name}{" "}
                  <Tag colorScheme="gray" borderRadius="full">
                    {tab.count}
                  </Tag>
                </Tab>
              ))}
            </HStack>

            <InputGroup
              maxW={{
                base: "full",
                xl: "200px",
              }}
              pr={2}
              m={{ base: "4", sm: "0" }}
            >
              <InputLeftElement pointerEvents="none">
                <Icon as={BsSearch} />
              </InputLeftElement>
              <Input type="tel" placeholder="Search by ID or destination" />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default Transaction;
