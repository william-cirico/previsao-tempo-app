import { Pressable, Text } from "react-native";
import { SvgUri } from "react-native-svg";
import { City } from "../../../types/City";
import { styles } from "./styles";

export function TextInputItem({ city }: { city: City }) {
    const { selectCity } = useCity();

    return (
        <Pressable style={styles.container} onPress={() => selectCity(city)}>
            <SvgUri
                style={styles.image}
                width={36}
                height={36}
                uri={`https://assets.open-meteo.com/images/country-flags/${city.country_code}.svg`}
            />
            <Text>{city.name} </Text>
            <Text>{city.admin1} ({city.latitude.toFixed(2)}ºE {city.longitude.toFixed(2)}ºN)</Text>
        </Pressable>
    );
}