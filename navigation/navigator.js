import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import Login from "../screen/login";
import Game from "../screen/game";
import Register from "../screen/register";
import Scoreboard from "../screen/scoreboard";

const GamesNavigator = createStackNavigator(
  {
    // กำหนด RouteConfigs (Slide 14)
    GameScreen: {screen: Game, navigationOptions:{headerShown:false}},
    LoginScreen: Login,
    RegisterScreen: Register,
    // ScoreScreen: Scoreboard,
  },
  {
    // กำหนด defaultNavigationOptions (Slide 23-24)
    defaultNavigationOptions: {
    backgroundColor: "#4a148c",
    }
  }
);

export default createAppContainer(GamesNavigator);
