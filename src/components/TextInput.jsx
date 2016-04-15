import React from 'react'

const TextInput = ({ field, onChange }) => {
    return (
        <div {...field.wrapperAttributes}>
            <label htmlFor={field.attributes.id}>{field.label}</label>
            <input
                type="text"
                {...field.attributes}
                onChange={onChange}
            />
        </div>
    )
}

export default TextInput
