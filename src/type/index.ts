export type FormFieldType = {
    default_value?: string | number;
    value?: string | number;
    validation?: string;
    min_value?: number;
    max_value?: number;
    options?: string[] | number[];
    type: "text" | "longtext" | "dropdown" | "number"
}
