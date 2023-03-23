import { View } from "react-native";
import AutocompleteInput from "react-native-autocomplete-input";
import { styles } from "./styles";

export function TextInputAutoComplete() {
    return (
        <View style={styles.autocompleteContainer}>
            <AutocompleteInput
                data={data}
                value={query}
                onChangeText={(text) => this.setState({ query: text })}
                flatListProps={{
                    keyExtractor: (_, idx) => idx,
                    renderItem: ({ item }) => <Text>{item}</Text>,
                }}
            />
        </View>
    );
}