import {
  Center,
  Icon,
  VStack,
  Text,
  Button,
  Box,
  Container,
} from "@chakra-ui/react";
import Card from "../../../components/Card";
import { BsPatchCheckFill } from "react-icons/bs";
import { useParams } from "react-router-dom";

const ForgotPasswordSent = () => {
  const params = useParams();
  const { email } = useParams();
  return (
    <Container>
      <Center minH="100vh">
        <Card
          p={{
            base: "4",
            md: "10",
          }}
          showCard={true}
        >
          <VStack spacing={6}>
            <Icon as={BsPatchCheckFill} boxSize="48px" color="green" />
            <Text textStyle="h4" fontWeight="medium" color="P.black">
              Successfully Sent
            </Text>
            <Text textAlign="center" textStyle="p2" color="black.60">
              We have sent instructions on how to reset your password to{" "}
              <Box as="b" color="P.black">
                {email}
              </Box>
              . Please follow the instructions from the email.
            </Text>
          </VStack>
        </Card>
      </Center>
    </Container>
  );
};

export default ForgotPasswordSent;
