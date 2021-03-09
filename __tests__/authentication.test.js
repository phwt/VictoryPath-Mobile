import { checkLogin } from "../screen/login";
import { firebaseConfig } from "../App";
import firebase from "firebase";

const loginWrapper = async (username, password) => {
  let response;
  try {
    response = await checkLogin(username, password);
  } catch (e) {
    response = e;
  }
  return response;
};

beforeAll(async () => {
  if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

  // Create user for testing
  await firebase
    .auth()
    .createUserWithEmailAndPassword("jesttestuser@test.com", "P@ssw0rd");
  await firebase.auth().signOut();
});

afterAll(async () => {
  await checkLogin("jesttestuser@test.com", "P@ssw0rd");
  await firebase.auth().currentUser.delete();
});

describe("Firebase Authentication - Login", () => {
  test("login of a user that does exists", async () => {
    expect(await checkLogin("jesttestuser@test.com", "P@ssw0rd")).toBe(true);
  });

  test("login of an invalid email", async () => {
    const response = await loginWrapper("InvalidEmail", "Hey");
    expect(response.code).toBe("auth/invalid-email");
  });

  test("login with incorrect password", async () => {
    const response = await loginWrapper(
      "jesttestuser@test.com",
      "NotAPassword"
    );
    expect(response.code).toBe("auth/wrong-password");
  });

  test("login of a user that does not exists", async () => {
    const response = await loginWrapper(
      "userthatdoesnotexist@test.com",
      "NotAPassword"
    );
    expect(response.code).toBe("auth/user-not-found");
  });
});