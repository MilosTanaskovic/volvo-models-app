import { View } from "vcc-ui";
import cars from '../../public/api/cars.json';
import { BackButton } from "../../src/components/atoms";
import { Car } from "../../src/interfaces/car";

const ShopPage = ({car}: {car: Car}) => {
    return (
        <View>
            <div>{car.modelType}</div>
            <BackButton
                maxWidth={200}
                path={`/learn/${car.id}`}
                passHref={true}
                collor={'destructive'}
            >
                Go back to Learn
            </BackButton>
        </View>
    )
}

export const getStaticPaths = async () => {
    const paths = cars.map((car) => ({
        params: { id: String(car.id)},
    }))
    return { paths, fallback: false }
}

export const getStaticProps = async ({params}: { params: {id: string}}) => {
    const carModels = cars.filter(p => p.id.toString() === params.id)
    return {
        props: {
            car: carModels[0],
        }
    }
}

export default ShopPage;