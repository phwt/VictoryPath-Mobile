import { initializeFirebase } from "../modules/FirebaseHelpers";
import { register } from "../screen/register";
import firebase from "firebase";

beforeAll(async () => {
  initializeFirebase();
});

describe("Firebase Authentication - Register", () => {
  it("register with valid email and password", async () => {
    expect(await register("validemail@test.com", "P@ssw0rd")).toBe(true);
    await firebase.auth().currentUser.delete();
  });
});
