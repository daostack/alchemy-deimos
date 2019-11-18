import React from "react";
import {TouchableOpacity, FlatList, StyleSheet, Text} from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Proposal",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Proposal",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Proposal",
  },
  {
    id: "58694a0f-3da1-171f-bd96-145571e29d72",
    title: "Third Proposal",
  },
  {
    id: "58694a0f-3da1-271f-bd96-145571e29d72",
    title: "Third Proposal",
  },
  {
    id: "58694a0f-3da1-371f-bd96-145571e29d72",
    title: "Third Proposal",
  },
  {
    id: "58694a0f-3da1-571f-bd96-145571e29d72",
    title: "Third Proposal",
  },
  {
    id: "58694a0f-3da1-411f-bd96-145571e29d72",
    title: "Third Proposal",
  },
  {
    id: "58694a0f-3da1-421f-bd96-145571e29d72",
    title: "Third Proposal",
  },
];

function ProposalCard({id, title, selected, onSelect}) {
  function onPressHandler() {
    onSelect(id);
  }
  return (
    <TouchableOpacity
      onPress={onPressHandler}
      style={[
        styles.proposalCard,
        {backgroundColor: selected ? "blue" : "orange"},
      ]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const ProposalList = () => {
  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected],
  );

  function renderItem({item}){
    return <ProposalCard
      id={item.id}
      title={item.title}
      selected={!!selected.get(item.id)}
      onSelect={onSelect}
    />;
  }
  function keyExtractor(proposal) {
    return proposal.id;
  }
  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      extraData={selected}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  proposalCard: {
    backgroundColor: "red",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    fontFamily: "monospace",
  },
  title: {
    fontSize: 20,
    fontFamily: "monospace",
  },
});

export default ProposalList;
