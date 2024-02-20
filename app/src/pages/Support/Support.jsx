import DashboardLayout from "../../components/DashboardLayout";
import ContectCard from "./components/ContectCard";
import SupportCard from "./components/SupportCard";
import { IoMdMail } from "react-icons/io";
import { AiTwotoneMessage } from "react-icons/ai";
import InfoCard from "../Dashboard/components/InfoCard";
import { Stack } from "@chakra-ui/react";

const Support = () => {
  return (
    <DashboardLayout>
      <Stack spacing="5rem">
        <SupportCard
          icon={IoMdMail}
          leftComponent={<ContectCard />}
          title="Contact Us"
          text=" Have a question or just want to know more? Feel free to reach out to
          us."
        />
        <SupportCard
          icon={AiTwotoneMessage}
          leftComponent={
            <InfoCard
              inverted={true}
              imgUrl="/grid_bg.svg"
              text="Chat with us now"
              tagText="Chatbot"
            />
          }
          title="Live Chat"
          text="Don’t have time to wait for the answer? Chat with us now."
        />
      </Stack>
    </DashboardLayout>
  );
};

export default Support;
