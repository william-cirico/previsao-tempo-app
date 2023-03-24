import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import AutocompleteInput from "react-native-autocomplete-input";
import { City } from "../../types/City";
import { styles } from "./styles";
import { TextInputItem } from "./TextInputItem";

export function TextInputAutoComplete() {
    // const [data, setData] = useState<City[]>([]);
    const [query, setQuery] = useState("");

    function getCitiesByName(name: string): Promise<City[]> {
        return axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${name}`)
            .then(res => res.data?.results ?? []);
    }

    const { data, refetch } = useQuery({
        queryFn: () => getCitiesByName(query),
        queryKey: ["city", query],
        enabled: !!query.trim().length
    });

    useEffect(() => {
        if (query.trim()) {
            refetch();
        }
    }, [query]);

    return (
        <View style={styles.autocompleteContainer}>
            <AutocompleteInput
                data={data ?? []}
                value={query}
                onChangeText={setQuery}
                flatListProps={{
                    keyExtractor: city => String(city.id),
                    renderItem: ({ item }) => <TextInputItem city={item} />,
                }}
            />
        </View>
    );
}