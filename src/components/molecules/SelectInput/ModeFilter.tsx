import React from 'react'
import { SelectInput } from 'vcc-ui'
import { Car } from '../../../interfaces/car'

interface Props {
    selectedModel?: string;
    modelChange: (event: any) => void;
    cars: Car[];
}

export const ModeFilter: React.FC<Props> = ({selectedModel, modelChange, cars}) => {
    let modelTypes = cars.map(car => car.bodyType);
    let uniqueModelTypes = Array.from(new Set(modelTypes));
    return (
        <SelectInput label={'Choose favorite Model'} value={selectedModel} onChange={modelChange} >
            {
                uniqueModelTypes.map((modelType) => {
                    return(
                        <option 
                            key={modelType} 
                            value={modelType}
                        >
                            {modelType.toUpperCase()}
                        </option>
                    )
                })
            }
        </SelectInput>
    )
}
