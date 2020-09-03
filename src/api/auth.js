import Auth from '@aws-amplify/auth';

const getUser = async () => {
  const user = await Auth.currentAuthenticatedUser();
  return user ?? null;
};

const register = async ({ email, birthdate, password }) => {
  try {
    await Auth.signUp({
      username: email,
      password,
      attributes: {
        birthdate,
      },
    });
  } catch (error) {
    console.log('sign up failed');
  }
};

const confirmRegistration = async ({ email, password, verificationCode }) => {
  try {
    await Auth.confirmSignUp(email, verificationCode);
    await Auth.signIn(email, password);
    console.log({ verificationCode });
  } catch (error) {
    console.log(error);
    throw new Error(' sign in confirm failed');
  }
};

const login = async ({ email, password }) => await Auth.signIn(email, password);

const logout = async () => {
  try {
    await Auth.signOut();
  } catch (error) {
    throw new Error(' sign out failed');
  }
};

export { register, confirmRegistration, getUser, login, logout };
