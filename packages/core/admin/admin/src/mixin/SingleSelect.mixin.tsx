import {
  SingleSelectOption as SingleSelectOptionOriginal,
  SingleSelect as SingleSelectOriginal,
} from '@strapi/design-system';
import {
  Children,
  ComponentProps,
  ComponentRef,
  forwardRef,
  isValidElement,
  useState,
} from 'react';

export const SingleSelect = forwardRef<
  ComponentRef<typeof SingleSelectOriginal>,
  ComponentProps<typeof SingleSelectOriginal>
>((props, ref) => {
  const [open, setOpen] = useState(props.open ?? false);

  return (
    <div onClick={() => setOpen(true)}>
      <SingleSelectOriginal ref={ref} {...props} open={open} onOpenChange={setOpen}>
        {Children.map(props.children, (child) =>
          isValidElement(child) && child.type === SingleSelectOptionOriginal ? (
            <div
              onClick={() => {
                props.onChange?.(child.props.value ?? '');
              }}
            >
              {child}
            </div>
          ) : (
            child
          )
        )}
      </SingleSelectOriginal>
    </div>
  );
});
