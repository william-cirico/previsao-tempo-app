import { useState } from "react";
import { Text, View } from "react-native";
import AutocompleteInput from "react-native-autocomplete-input";
import { City } from "../../types/City";
import { styles } from "./styles";

export function TextInputAutoComplete() {
    const [data, setData] = useState<City[]>([]);
    const [query, setQuery] = useState("");

    return (
        <View style={styles.autocompleteContainer}>
            <AutocompleteInput
                data={data}
                value={query}
                onChangeText={setQuery}
                flatListProps={{
                    keyExtractor: city => String(city.id),
                    renderItem: ({ item }) => <Text>{item.name}</Text>,
                }}
            />
        </View>
    );
}