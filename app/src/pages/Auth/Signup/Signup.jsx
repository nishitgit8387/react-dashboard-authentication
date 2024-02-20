import {
  Button,
  Center,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { object, string, ref } from "yup";
import Card from "../../../components/Card";
import { useMutation } from "@tanstack/react-query";
import { signupUser } from "../../../api/query/userQuery";
import { useState } from "react";

const signupValidationSchema = object({
  name: string().required("Name is required"),
  surname: string().required("Surname is required"),
  email: string().email("Email is invalid").required("Email is required"),
  password: string()
    .min(6, "password must be at 6 characters")
    .required("Password is required"),
  repeatpassword: string()
    .oneOf([ref("password"), null], "Password must match")
    .required("Repeat password is required"),
});

const Signup = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const toast = useToast();
  const { mutate, isLoading } = useMutation({
    mutationKey: ["signup"],
    mutationFn: signupUser,

    onSuccess: (data) => {
      console.log(email);
      if (email !== "") {
        navigate(`/register-email-verify/${email}`);
      }
    },
    onError: (error) => {
      toast({
        title: "signup error",
        description: error.message,
        status: "error",
      });
    },
  });
  return (
    <Container>
      <Center minH="100vh">
        <Card>
          <Text textStyle="h1" fontWeight="medium">
            Welcome to Crypto App
          </Text>
          <Text textStyle="p2" color="black.60" mt={4}>
            Create a free account by filling data below.
          </Text>
          <Formik
            initialValues={{
              name: "",
              surname: "",
              email: "",
              password: "",
              repeatpassword: "",
            }}
            onSubmit={(values) => {
              setEmail(values.email);
              mutate({
                firstName: values.name,
                lastName: values.surname,
                email: values.email,
                password: values.password,
              });
            }}
            validationSchema={signupValidationSchema}
          >
            {() => (
              <Form>
                <Stack mt={10} spacing={6}>
                  <Flex gap={4}>
                    <Field name="name">
                      {({ field, meta }) => (
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                          <FormLabel>Name</FormLabel>
                          <Input
                            {...field}
                            name="name"
                            placeholder="Enter Your Name..."
                          />
                          <FormErrorMessage>{meta.error}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="surname">
                      {({ field, meta }) => (
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                          <FormLabel>Surname</FormLabel>
                          <Input
                            {...field}
                            name="surname"
                            placeholder="Enter Your Surname..."
                          />
                          <FormErrorMessage>{meta.error}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Flex>
                  <Field name="email">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel>Email</FormLabel>
                        <Input
                          {...field}
                          name="email"
                          type="email"
                          placeholder="Enater Your Email..."
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="password">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel>Password</FormLabel>
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
                        <FormLabel>Repeat Password</FormLabel>
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

                  <Checkbox>
                    <Text textStyle="p3">
                      I agree with{" "}
                      <Text as="span" color="P.purple">
                        Terms and Conditions
                      </Text>
                    </Text>
                  </Checkbox>
                  <Button isLoading={isLoading} type="submit">
                    Create Account
                  </Button>
                  <Text textStyle="p3" color="black.60" textAlign="center">
                    Already have an account?{" "}
                    <Link to="/signin">
                      <Text as="span" color="P.purple">
                        Log In
                      </Text>
                    </Link>
                  </Text>
                </Stack>
              </Form>
            )}
          </Formik>
        </Card>
      </Center>
    </Container>
  );
};

export default Signup;
