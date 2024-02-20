import {
  Center,
  Text,
  Button,
  Stack,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Container,
  useToast,
} from "@chakra-ui/react";
import Card from "../../../components/Card";
import { Formik, Form, Field } from "formik";
import { object, ref, string } from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { verfiyForgotToken } from "../../../api/query/userQuery";

const resetValidationSchema = object({
  password: string()
    .min(6, "password must be at 6 characters")
    .required("Password is required"),
  repeatpassword: string()
    .oneOf([ref("password"), null], "Password must match")
    .required("Repeat password is required"),
});
const ResetPassword = () => {
  const toast = useToast();
  const { token } = useParams();
  const navigate = useNavigate();
  const { mutate, isSuccess, isLoading } = useMutation({
    mutationKey: ["verify-forgot-token"],
    mutationFn: verfiyForgotToken,
    enabled: !!token,
    onError: (error) => {
      toast({
        title: "Signup Error",
        description: error.message,
        status: "error",
      });
      navigate("/signup");
    },
    onSettled: () => {
      navigate("/reset-success");
    },
  });
  if (isLoading)
    return (
      <Center h="100vh">
        <Spinner />
      </Center>
    );
  return (
    <Container>
      <Center minH="100vh">
        <Card>
          <Text mt="4" textStyle="h1" fontWeight="medium">
            Reset Password
          </Text>
          <Text textStyle="p2" color="black.60" mt={4}>
            Enter your new password.
          </Text>
          <Formik
            initialValues={{
              password: "",
              repeatpassword: "",
            }}
            onSubmit={(values) => {
              mutate({ token, password: values.password });
            }}
            validationSchema={resetValidationSchema}
          >
            {() => (
              <Form>
                <Stack mt={8} spacing={6}>
                  <Field name="password">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel>New Password</FormLabel>
                        <Input
                          {...field}
                          name="password"
                          type="password"
                          placeholder="Enter Your Password"
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="repeatpassword">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel>Repeat new Password</FormLabel>
                        <Input
                          {...field}
                          name="repeatpassword"
                          type="password"
                          placeholder="Enter Your Repeat Password"
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Button w="full" type="submit">
                    Reset Password
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Card>
      </Center>
    </Container>
  );
};

export default ResetPassword;
