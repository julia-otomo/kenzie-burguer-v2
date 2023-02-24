import { forwardRef, InputHTMLAttributes } from 'react';
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMessage: string;
  type: string;
}

const Input = forwardRef<HTMLInputElement, iInputProps>(
  ({ label, type, errorMessage, ...rest }, ref) => (
    <fieldset>
      <StyledTextField label={label} type={type}>
        <input type={type} ref={ref} {...rest} />
      </StyledTextField>
      {errorMessage ? (
        <StyledParagraph fontColor='red'>{errorMessage}</StyledParagraph>
      ) : null}
    </fieldset>
  )
);

export default Input;
