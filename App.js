import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SearchScreen from "./src/screens/search-screen";
import ResultsShowScreen from "./src/screens/results-show-screen";

const navigator = createStackNavigator(
  {
    search: SearchScreen,
    resultsShow: ResultsShowScreen
  },
  {
    initialRouteName: "search",
    defaultNavigationOptions: {
      title: "Buscador de comida"
    }
  }
);

export default createAppContainer(navigator);
