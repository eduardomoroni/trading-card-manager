import {
  createAppContainer,
  createSwitchNavigator,
  NavigationContainer,
} from 'react-navigation';
import { Welcome } from './screens/Welcome';
import { Home } from './screens/Home';
import { CardSearchFilter } from './screens/CardSearch/CardSearchFilter';
import { CardSearchResults } from './screens/CardSearch/CardSearchResults';
import { CardDetails } from './screens/CardSearch/CardDetails';

export const Navigator: NavigationContainer = createAppContainer(
  createSwitchNavigator(
    {
      Welcome,
      Home,
      CardSearchFilter,
      CardSearchResults,
      CardDetails,
    },
    {
      initialRouteName: 'CardSearchFilter',
      backBehavior: 'history',
    },
  ),
);

export const ROUTES = {
  WELCOME: 'Welcome',
  HOME: 'Home',
  CARD_SEARCH_FILTER: 'CardSearchFilter',
  CARD_SEARCH_RESULTS: 'CardSearchResults',
  CARD_DETAILS: 'CardDetails',
};
