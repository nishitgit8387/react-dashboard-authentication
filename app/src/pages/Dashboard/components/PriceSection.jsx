import {
  HStack,
  Icon,
  Stack,
  Text,
  Button,
  Flex,
  Image,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import { CustomCard } from "../../../Chakra/CustomCard";
import { BsArrowUpRight } from "react-icons/bs";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const PriceSection = () => {
  const timeStemps = ["7:15 pm", "8:15 pm", "9:15 pm", "10:15 pm", "11:15 pm"];

  return (
    <CustomCard>
      <Flex justify="space-between" align="start">
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balances</Text>
          </HStack>
          <HStack
            spacing={4}
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{ base: "column", sm: "row" }}
          >
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                22.39401000
              </Text>{" "}
              <HStack fontWeight="medium" color="green.500">
                <Icon as={BsArrowUpRight} />
                <Text fontSize="sm" fontWeight="medium">
                  22%
                </Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button leftIcon={<Icon as={AiFillPlusCircle} />}>Buy</Button>
          <Button leftIcon={<Icon as={AiFillMinusCircle} />}>Sell</Button>
        </HStack>
      </Flex>
      <Tabs variant="soft-rounded">
        <Flex justify="end">
          <TabList bg="black.5" p="3px">
            {["1H", "1D", "1W", "1M"].map((tab) => (
              <Tab
                _selected={{
                  bg: "white",
                }}
                key={tab}
                fontSize="sm"
                p="6px"
                borderRadius="4"
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image w="100%" src="/graph.svg" mt="48px" />
            <HStack justify="space-between">
              {timeStemps.map((timestamp) => (
                <Text key={timestamp} fontSize="sm" color="black.80">
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PriceSection;
