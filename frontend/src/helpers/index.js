import axios from "axios";

// ------------- Validation

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
    if (!password.match(/^.*(?=.{6,})(?=.*\d)(?=.*[a-z])(?=.*[a-z]).*$/)) {
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

// ------------- Items

export const departmentsArray = () => {
  const res = [
    { id: 0, title: "IT", key: "departments" },
    { id: 1, title: "Marketing", key: "departments" },
    { id: 2, title: "Sales", key: "departments" },
    { id: 3, title: "Finance", key: "departments" },
    { id: 4, title: "Human Resourses", key: "departments" },
  ];

  return res;
};

export const prioritiesArray = () => {
  const res = [
    { id: 0, title: "Low", key: "priorities" },
    { id: 1, title: "Medium", key: "priorities" },
    { id: 2, title: "High", key: "priorities" },
  ];

  return res;
};

// ------------- Token

export const authToken = (token) => {
  if (token) {
    axios.defaults.headers.common["authorization"] = token;
  } else {
    delete axios.defaults.headers.common["authorization"];
  }
};
