import React from 'react'
import { SelectInput } from 'vcc-ui'

interface Props {
    selectedModel?: string;
    modelChange: (event: any) => void;
}

export const ModeFilter: React.FC<Props> = ({selectedModel, modelChange}) => {
    return (
        <SelectInput label={'Choose favorite Model'} value={selectedModel} onChange={modelChange} >
            <option value="">All</option>
            <option value="suv">Suv</option>
            <option value="estate">Estate</option>
            <option value="sedan">Sedan</option>
        </SelectInput>
    )
}
