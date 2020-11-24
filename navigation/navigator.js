import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from "../screen/login";
import Game from "../screen/gamescreen";
import Register from "../screen/register";
import Scoreboard from "../screen/scoreboard";
import GameMode from "../screen/gamemode";
import Tutorial from "../screen/tutorial";
import easy from "../screen/Mode/easy";
import normal from "../screen/Mode/normal";
import hard from "../screen/Mode/hard";
import extreme from "../screen/Mode/extreme";
import checkLogin from "../screen/login";

const GamesNavigator = createStackNavigator({
  GameScreen: {
    screen: Game,
    navigationOptions: { headerShown: false },
  },
  checkLoginScreen: checkLogin,
  LoginScreen: Login,
  RegisterScreen: Register,
  GameModeScreen: {
    screen: GameMode,
    navigationOptions: { headerShown: false },
  },
  EasyScreen: {
    screen: easy,
    navigationOptions: { headerShown: true },
  },
  NormalScreen: {
    screen: normal,
    navigationOptions: { headerShown: true },
  },
  HardScreen: {
    screen: hard,
    navigationOptions: { headerShown: true },
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
