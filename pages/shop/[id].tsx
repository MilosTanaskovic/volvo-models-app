import Head from "next/head";
import { Flex, View } from "vcc-ui";
import cars from '../../public/api/cars.json';
import { BackButton } from "../../src/components/atoms";
import { Car } from "../../src/interfaces/car";

const ShopPage = ({car}: {car: Car}) => {
    return (
        <>
            <Head>
                <title>Shop Page</title>
                <meta name="description" content="Shop page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <View
                as='main'
                extend={{
                  padding: 20,
                }}
            >
                <Flex>{car.modelType}</Flex>
                <BackButton
                    maxWidth={200}
                    path={`/learn/${car.id}`}
                    passHref={true}
                    collor={'destructive'}
                >
                    Go back to Learn
                </BackButton>
            </View>
        </>
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