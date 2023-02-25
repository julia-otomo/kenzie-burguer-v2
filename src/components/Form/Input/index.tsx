import { forwardRef } from 'react';
import { TextFieldProps } from '@mui/material';
import { FieldError } from 'react-hook-form';
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

type iInputProps = {
  label: string;
  errorMessage?: FieldError;
  type: string;
} & TextFieldProps;

const Input = forwardRef<HTMLInputElement, iInputProps>(
  ({ label, type, errorMessage, ...rest }, ref) => (
    <fieldset>
      <StyledTextField label={label} type={type} ref={ref} {...rest} />
      {errorMessage ? (
        <StyledParagraph fontColor='red'>
          {errorMessage.message}
        </StyledParagraph>
      ) : null}
    </fieldset>
  )
);

export default Input;
