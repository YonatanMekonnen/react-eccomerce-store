import {
  Box,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProductFormSChema } from "./form-schema";

export interface ICreateProductFormProps {}

export const CreateProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver<typeof createProductFormSChema>(
      createProductFormSChema
    ),
  });

  const onSubmit = (data: any) => {
    localStorage.setItem("products", JSON.stringify(data));
  };

  return (
    <Box m="5" p="5" borderColor="gray.300" borderWidth="2px">
      <Heading as="h2" size="lg">
        Create Product
      </Heading>

      <Divider bg="gray.300" my="3" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl my="5">
          <FormLabel color="gray.500">Product name</FormLabel>
          <Input {...register("name")} />

          {errors.name && (
            // @ts-ignore
            <Text color="red.500">{errors.name?.message}</Text>
          )}
        </FormControl>

        <FormControl my="5">
          <FormLabel color="gray.500">Product description</FormLabel>
          <Textarea {...register("description")} placeholder="description" />
          {errors.description && (
            // @ts-ignore
            <Text color="red.500">{errors.description?.message}</Text>
          )}
        </FormControl>

        <FormControl my="5">
          <FormLabel color="gray.500">Product category</FormLabel>
          <Select placeholder="Select product category">
            <option value="electronics">Electronics</option>
            <option value="clothe">Clothe</option>
          </Select>
        </FormControl>

        <FormControl my="5">
          <FormLabel color="gray.500">Picture URL</FormLabel>
          <Input {...register("pictureUrl")} placeholder="picture url" />

          {errors.pictureUrl && (
            // @ts-ignore
            <Text color="red.500">{errors.pictureUrl?.message}</Text>
          )}
        </FormControl>

        <FormControl my="5">
          <FormLabel color="gray.500">Price</FormLabel>
          <NumberInput>
            <NumberInputField {...register("price", { valueAsNumber: true })} />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>

          {/* @ts-ignore */}
          {errors.price && <Text color="red.500">{errors.root?.message}</Text>}
        </FormControl>

        <Button type="submit" colorScheme="linkedin">
          Save
        </Button>
      </form>
    </Box>
  );
};
