import React, { forwardRef } from "react";
import { Container, Wrapper, Icon } from "./style";

export const Input = forwardRef(
  (
    {
      type,
      value,
      name,
      width,
      height,
      placeholder,
      defaultValue,
      onChange,
      icon,
    },
    ref
  ) => {
    return (
      <Wrapper width={width}>
        <Icon>{icon}</Icon>
        <Container
          ref={ref}
          icon={icon}
          value={value}
          name={name}
          onChange={onChange}
          type={type}
          width={width}
          height={height}
          defaultValue={defaultValue}
          placeholder={placeholder}
        />
      </Wrapper>
    );
  }
);

export default Input;
