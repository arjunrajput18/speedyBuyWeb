import { success } from "../Toast/ToastServices";

export const newAccountHandler = async (
  user,
  setIsLoggedIn,
  dispatch,
  navigate
) => {
  if (user.firstName && user.lastName && user.email && user.password) {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(user),
      });
      console.log(response);
      const data = await response.json();
      const { createdUser, encodedToken } = data;
      setIsLoggedIn(true);
      localStorage.setItem("user", JSON.stringify(createdUser));
      localStorage.setItem("token", encodedToken);
      navigate("/productlisting");
      success("Login Successfully!");
    } catch (error) {
      console.log(error);
    }
  }
};

export const guestLoginhandler = async (
  setEmail,
  setPassword,
  setIsLoggedIn,
  dispatch,
  location,
  navigate
) => {
  const creds = {
    email: "arjun@gmail.com",
    password: "rajput",
  };
  setEmail(creds.email);
  setPassword(creds.password);
  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(creds),
    });
    const data = await response.json();

    const { foundUser, encodedToken } = data;
    setIsLoggedIn(true);
    localStorage.setItem("user", JSON.stringify(foundUser));
    localStorage.setItem("token", encodedToken);
    const newPath = location?.state?.from?.pathname;
    if (newPath === "/login") {
      navigate("/productlisting");
      success("Login Successfully!");
    } else if (newPath === undefined) {
      navigate("/productlisting");
      success("Login Successfully!");
    } else {
      navigate(newPath);
      success("Login Successfully!");
    }
  } catch (error) {
    console.log(error);
  }
};

export const loginHandler = async (
  email,
  password,
  setIsLoggedIn,
  navigate,
  dispatch,
  location
) => {
  if (email && password) {
    const creds = {
      email,
      password,
    };

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(creds),
      });

      const { foundUser, encodedToken } = await response.json();
      if (response.status === 200) {
        setIsLoggedIn(true);
        localStorage.setItem("user", JSON.stringify(foundUser));
        localStorage.setItem("token", encodedToken);

        navigate(location?.state?.from?.pathname);
        success("Login Successfully!");
      } else {
        alert(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }
};
