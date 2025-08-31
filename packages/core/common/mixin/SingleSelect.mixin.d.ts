/// <reference types="react" />
export declare const SingleSelect: import("react").ForwardRefExoticComponent<Omit<Omit<import("@strapi/ui-primitives/dist/components/Select/Select").SingleSelectProps, "value"> & Pick<import("@strapi/ui-primitives/dist/components/Select/Select").SelectContentImplProps, "onCloseAutoFocus"> & Pick<import("@strapi/design-system/dist/components/Select/SelectParts").TriggerProps, "id" | "name" | "size" | "startIcon" | "hasError" | "onClear" | "clearLabel"> & Pick<import("@strapi/design-system/dist/components/Select/SelectParts").ValueProps, "placeholder"> & {
    customizeContent?(value?: string | number | undefined): string;
    onChange?: ((value: string | number) => void) | undefined;
    onReachEnd?: ((entry: IntersectionObserverEntry) => void) | undefined;
    value?: string | number | null | undefined;
} & {
    'aria-label'?: string | undefined;
    'aria-describedby'?: string | undefined;
} & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
