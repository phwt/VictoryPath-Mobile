import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from "../screen/login";
import Game from "../screen/gamescreen";
import Register from "../screen/register";
import Scoreboard from "../screen/scoreboard";
import GameMode from "../screen/gamemode";
import Tutorial from "../screen/tutorial";

const GamesNavigator = createStackNavigator({
  GameScreen: { screen: Game, navigationOptions: { headerShown: false } },
  LoginScreen: Login,
  RegisterScreen: Register,
  GameModeScreen: {
    screen: GameMode,
    navigationOptions: { headerShown: false },
  },
  ScoreBoardScreen: {
    screen: Scoreboard,
    navigationOptions: { headerShown: false },
  },
  TutorialScreen: {
    screen: Tutorial,
    navigationOptions: { headerShown: false },
  },
});

export default createAppContainer(GamesNavigator);
