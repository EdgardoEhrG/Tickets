export const validateInput = (userData, setError) => {
  const { username, password, role } = userData;

  let errorMsg = {
    usernameError: "",
    passwordError: "",
    roleError: "",
  };

  let formValid = true;

  if (!username) {
    formValid = false;
    errorMsg.usernameError = "Please enter a username";
  }

  if (typeof username !== undefined) {
    if (username.length <= 3 || username.length > 10) {
      formValid = false;
      errorMsg.usernameError = "Username must be between 4 and 10 characters";
    }
  }

  if (!password) {
    formValid = false;
    errorMsg.passwordError = "Please enter a password";
  }

  if (typeof password !== undefined) {
    if (
      !password.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/)
    ) {
      formValid = false;
      errorMsg.passwordError = "Password requires at least 6 characters";
    }
  }

  if (role === "") {
    formValid = false;
    errorMsg.roleError = "Please select a role";
  }

  setError(errorMsg);

  return formValid;
};
