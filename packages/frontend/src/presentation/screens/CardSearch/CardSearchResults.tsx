import React from 'react';
import { Action } from '@reduxjs/toolkit';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import {
  CompositeNavigationProp,
  NavigationHelpers,
  ParamListBase,
  RouteProp,
} from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { Card } from '../../../domain/entities/Card';
import { RootParamList, ROUTES } from '../../Navigator';
import { styles } from './styles';
import { ManaCost } from '../../components/ManaCost';
import { useDispatch } from 'react-redux';
import { listTypes, updateList } from '../../../domain/ducks/cardListReducer';

interface Props {
  navigation: CompositeNavigationProp<
    StackNavigationProp<ParamListBase, ROUTES.CARD_SEARCH_RESULTS>,
    NavigationHelpers<ParamListBase>
  >;
  route: RouteProp<RootParamList, ROUTES.CARD_SEARCH_RESULTS>;
}

export const CardSearchResults: React.FC<Props> = (props: Props) => {
  const { cardsFiltered } = props.route.params;

  function navigateTo(card: Card) {
    return (): void => {
      props.navigation.navigate(ROUTES.CARD_DETAILS, { card });
    };
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        bounces={false}
        keyExtractor={(item): string => item.uuid}
        data={cardsFiltered}
        renderItem={({ item }): React.ReactElement => (
          <CardSearchResultItem card={item} onClick={navigateTo(item)} />
        )}
      />
    </SafeAreaView>
  );
};

interface CardSearchResultItemProps {
  card: Card;
  onClick: () => void;
}

const CardSearchResultItem: React.FC<CardSearchResultItemProps> = (
  props: CardSearchResultItemProps,
) => {
  const dispatch = useDispatch();
  const onLongPress = (): void =>
    Alert.alert('Wish List', 'Add card to your wish list', [
      {
        text: 'Want',
        onPress: (): Action =>
          dispatch(
            updateList({
              listType: listTypes.TRADE_WANT,
              cardId: props.card.id,
            }),
          ),
      },
      {
        text: 'Have',
        onPress: (): Action =>
          dispatch(
            updateList({
              listType: listTypes.TRADE_HAVE,
              cardId: props.card.id,
            }),
          ),
      },
      {
        text: 'Buy',
        onPress: (): Action =>
          dispatch(
            updateList({
              listType: listTypes.BUY,
              cardId: props.card.id,
            }),
          ),
      },
    ]);

  return (
    <TouchableOpacity
      style={styles.searchResult}
      onPress={props.onClick}
      onLongPress={onLongPress}
    >
      <View style={styles.header}>
        <Text>{props.card.name}</Text>
        <ManaCost manaCost={props.card.manaCost} />
      </View>
      <Text>{props.card.text}</Text>
    </TouchableOpacity>
  );
};
