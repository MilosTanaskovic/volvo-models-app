import { Car } from "../interfaces/car";

export const filterByModel = (selectedModel: string, filteredData: Car[]) => {
    // Avoid filter for empty string
    if (!selectedModel) return filteredData;

    const filteredCars = filteredData.filter((car) => 
        car.bodyType === selectedModel
    );

    return filteredCars;
}
