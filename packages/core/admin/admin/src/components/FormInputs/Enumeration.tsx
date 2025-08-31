import { forwardRef, memo, useEffect } from 'react';

import { SingleSelect } from '../../../mixin/SingleSelect.mixin';
import { Field, SingleSelectOption, useComposedRefs } from '@strapi/design-system';
import { useIntl } from 'react-intl';

import { useFocusInputField } from '../../hooks/useFocusInputField';
import { useField } from '../Form';

import { EnumerationProps } from './types';

const EnumerationInput = forwardRef<HTMLDivElement, EnumerationProps>(
  ({ name, required, label, hint, labelAction, options = [], ...props }, ref) => {
    const { formatMessage } = useIntl();
    const field = useField(name);
    const fieldRef = useFocusInputField<HTMLDivElement>(name);

    const composedRefs = useComposedRefs(ref, fieldRef);

    useEffect(() => {
      /** @ts-ignore */
      if (!window.MuesAgent) return;

      /** @ts-ignore */
      return window.MuesAgent.signals.on('valueChangeIntent', (el: HTMLElement, value: string) => {
        field.onChange(name, value);
        // const reactKey = Object.keys(el).find(
        //   (key) => key.startsWith('__reactEventHandlers$') || key.startsWith('__reactProps$')
        // );

        // // eslint-disable-next-line @typescript-eslint/no-explicit-any
        // const props: any =
        //   reactKey != null && reactKey in el ? el[reactKey as keyof typeof el] : null;

        // if (props?.onChange) {
        //   const syntheticEvent = new Event('input', { bubbles: true });
        //   Object.defineProperty(syntheticEvent, 'target', {
        //     writable: false,
        //     value: el,
        //   });
        //   props.onChange(syntheticEvent);
        // } else {
        //   el.dispatchEvent(new Event('input', { bubbles: true }));
        //   el.dispatchEvent(new Event('change', { bubbles: true }));
        // }
      });
    }, []);

    return (
      <Field.Root error={field.error} name={name} hint={hint} required={required}>
        <Field.Label action={labelAction}>{label}</Field.Label>
        <SingleSelect
          ref={composedRefs}
          onChange={(value) => {
            console.log('Change', value);
            field.onChange(name, value);
          }}
          value={field.value}
          {...props}
        >
          <SingleSelectOption value="" disabled={required} hidden={required}>
            {formatMessage({
              id: 'components.InputSelect.option.placeholder',
              defaultMessage: 'Choose here',
            })}
          </SingleSelectOption>
          {options.map(({ value, label, disabled, hidden }) => {
            return (
              <SingleSelectOption key={value} value={value} disabled={disabled} hidden={hidden}>
                {label ?? value}
              </SingleSelectOption>
            );
          })}
        </SingleSelect>
        <Field.Hint />
        <Field.Error />
      </Field.Root>
    );
  }
);

const MemoizedEnumerationInput = memo(EnumerationInput);

export { MemoizedEnumerationInput as EnumerationInput };
