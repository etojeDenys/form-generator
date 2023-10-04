import React from "react";
import './style.css'
import {FormFieldType} from "../../type";

type Props = FormFieldType & {
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void
}

export const FormField: React.FC<Props> = ({onChange,name,max_value,default_value,value,validation,min_value, type, options}) => {


    switch (type) {
        case "dropdown":
            return (
                <select
                name={name}
                onChange={onChange}
                className="field"
                defaultValue={default_value}
                value={value}
            >
                {options?.map(o => (<option value={o} key={o}>{o}</option>))}
            </select>
            )
        case "longtext":
            return (
                <textarea
                    onChange={onChange}
                    name={name}
                    className="field"
                    defaultValue={default_value}
                    value={value}
                ></textarea>
            )
    }

    return (
        <input
            onChange={onChange}
            name={name}
            className="field"
            pattern={validation}
            type={type}
            max={max_value}
            min={min_value}
            defaultValue={default_value}
            value={value}
        />
    )
}