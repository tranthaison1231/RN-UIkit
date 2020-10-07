import * as React from 'react';
import { Controller, ValidationRules } from 'react-hook-form';
import { TextInput, HelperText } from 'react-native-paper';
import { styleSpace, StyleSpaceProps } from '../helpers';
import { TextInputProps, View } from 'react-native';
import { useTheme } from 'react-native-paper';

interface FieldInputProps extends StyleSpaceProps, TextInputProps {
  form: any;
  name: string;
  label: string;
  mode?: 'flat' | 'outlined' | undefined;
  placeholder?: string;
  rules?: ValidationRules;
  bg?: string | undefined;
  disabled?: boolean | undefined;
  required?: boolean | undefined;
}

const FieldInput: React.FC<FieldInputProps> = ({
  form,
  name,
  label,
  mode,
  placeholder,
  rules,
  disabled,
  bg,
  required,
  style,
  ...props
}) => {
  const blockStyles = [bg && { backgroundColor: bg }, style];
  const { colors } = useTheme();
  return (
    // @ts-ignore
    <View style={[[...styleSpace(props)]]}>
      <Controller
        name={name}
        control={form.control}
        rules={{
          required: required && `${label} is required`,
          ...rules,
        }}
        render={inputProps => {
          return (
            <TextInput
              // @ts-ignore
              {...(inputProps, props)}
              // @ts-ignore
              style={blockStyles}
              error={form.errors[name]}
              label={label}
              mode={mode}
              onChangeText={value => {
                inputProps.onChange(value);
                form.trigger(name);
              }}
              placeholder={placeholder}
              disabled={disabled}
              right={
                form.errors[name] && (
                  <TextInput.Icon name="close" color={colors.error} />
                )
              }
            />
          );
        }}
      />
      {form.errors[name] && (
        // @ts-ignore
        <HelperText style={{ color: colors.error }}>
          {form.errors[name]?.message}
        </HelperText>
      )}
    </View>
  );
};

export default FieldInput;
