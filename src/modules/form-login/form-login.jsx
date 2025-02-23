import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";

import { FormField, FormFeedback, Input } from "components";
import { delay } from "utils";

import { schemaResolver } from "./schema";

export const FormLogin = () => {
  const [formFeedback, setFormFeedback] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onBlur",
    resolver: schemaResolver,
  });

  const onSubmit = async (data) => {
    setFormFeedback(null);
    console.log(data);
    try {
      await delay(1500);
      setFormFeedback({
        status: "success",
        message: "Acesso autorizado",
      });
    } catch {
      setFormFeedback({
        status: "error",
        message: "Oops! Algo deu errado. Tente novamente mais tarde.",
      });
    }
  };

  return (
    <Flex
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      gap={5}
      direction="column"
      p={12}
      bg="purple.50"
      borderRadius={8}
    >
      <Heading as="h1" align="center">
        <Text as="span" color="purple.600">
          Progra
        </Text>
        <Text as="span" color="teal.300">{`{m}`}</Text>
        <Text as="span" color="purple.600">
          aria
        </Text>
        <Text as="span" color="purple.800" display="block">
          Summit 2022
        </Text>
      </Heading>
      <Text color="gray.800" fontSize="lg">
        Faça login para acompanhar o evento
      </Text>
      <FormField
        error={errors.email?.message}
        isInvalid={Boolean(errors.email)}
        name="email"
        label="E-mail"
      >
        <Input
          id="email"
          option="email"
          placeholder="ada@lovelace.com"
          {...register("email", { required: true })}
        />
      </FormField>
      <FormField
        error={errors.password?.message}
        isInvalid={Boolean(errors.password)}
        name="password"
        label="Senha"
      >
        <Input
          id="password"
          option="password"
          {...register("password", { required: true })}
        />
      </FormField>
      <Text decoration="underline" align="right" color="gray.600">
        Esqueci minha senha
      </Text>
      <Button
        type="submit"
        isLoading={isSubmitting}
        mt={2}
        colorScheme="purple"
        loadingText="Entrando..."
      >
        Entrar
      </Button>
      {formFeedback?.status && <FormFeedback {...formFeedback} />}
    </Flex>
  );
};
