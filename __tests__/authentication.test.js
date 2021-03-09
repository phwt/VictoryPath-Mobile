import { checkLogin } from "../screen/login";
import {
  initializeFirebase,
  setupDemoUser,
  teardownDemoUser,
} from "../modules/FirebaseHelpers";

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
  initializeFirebase();
  await setupDemoUser();
});

afterAll(async () => {
  await teardownDemoUser();
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
