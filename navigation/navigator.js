import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from "../screen/login";
import Game from "../screen/gamescreen";
import Register from "../screen/register";
import Scoreboard from "../screen/scoreboard";
import GameMode from "../screen/gamemode";

const GamesNavigator = createStackNavigator({
  GameScreen: { screen: Game, navigationOptions: { headerShown: false } },
  LoginScreen: Login,
  RegisterScreen: Register,
  GameModeScreen: GameMode,
  ScoreBoardScreen: Scoreboard,
});

export default createAppContainer(GamesNavigator);
