import React from "react";
import Login from "./login";
import { fireEvent, render } from "@testing-library/react-native";
import {
  initializeFirebase,
  setupDemoUser,
  teardownDemoUser,
} from "../modules/FirebaseHelpers";

beforeAll(async () => {
  initializeFirebase();
  await setupDemoUser();
});

afterAll(async () => {
  await teardownDemoUser();
});

describe("Login Screen", () => {
  it.skip("supplied with valid credentials, user will be able to login", async () => {
    const navigation = {
      navigate: jest.fn(),
    };

    const { getByPlaceholderText, getByText } = render(
      <Login navigation={navigation} />
    );

    fireEvent.changeText(
      getByPlaceholderText("Your email   [ ex.123@gmail.com ]"),
      "jesttestuser@test.com"
    );
    fireEvent.changeText(getByPlaceholderText("Your password"), "P@ssw0rd");
    fireEvent.press(getByText("test"));

    await new Promise((r) => setTimeout(r, 3000));
    expect(navigation.navigate).toBeCalled();
  });
});
