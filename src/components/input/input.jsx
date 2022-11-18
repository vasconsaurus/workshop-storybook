import React, { useState } from "react";

import {
  Input as ChakraInput,
  forwardRef,
  Icon,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { Key, Mail, Eye, EyeOff } from "react-feather";

export const Input = forwardRef((props, ref) => {
  const { option, ...inputProps } = props;
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((show) => !show);

  const options = {
    email: {
      leftIcon: Mail,
      type: "email",
      placeholder: "ada@lovelace.com",
    },
    password: {
      leftIcon: Key,
      type: showPassword ? "text" : "password",
      rightIcon: showPassword ? EyeOff : Eye,
    },
  };

  return (
    <InputGroup>
      {options[option].leftIcon && (
        <InputLeftElement>
          <Icon as={options[option].leftIcon} boxSize={5} color="teal.300" />
        </InputLeftElement>
      )}
      <ChakraInput
        bg="white"
        type={options[option].type}
        placeholder={options[option].placeholder}
        ref={ref}
        {...inputProps}
      />
      {options[option].rightIcon && (
        <InputRightElement onClick={togglePassword}>
          <Icon as={options[option].rightIcon} boxSize={5} color="teal.300" />
        </InputRightElement>
      )}
    </InputGroup>
  );
});
