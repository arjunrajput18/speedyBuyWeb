export const newAccountHandler=async (user,setIsLoggedIn,dispatch,navigate)=>{
        if (user.firstName && user.lastName && user.email && user.password ) {
          try {
            const response = await fetch("/api/auth/signup", {
              method: "POST",
              body: JSON.stringify(user),
            });
            console.log(response);
            const data = await response.json();
            // console.log(a, "a");
            const {createdUser,encodedToken}=data
            setIsLoggedIn(true);
            // console.log(createdUser);
            localStorage.setItem("user",JSON.stringify(createdUser))
            // localStorage.setItem("token",encodedToken)
            dispatch({type:"SET_TOKEN",payload:encodedToken});
            navigate("/productlisting")
          } catch (error) {
            console.log(error);
          }
        }
      };



      export const guestLoginhandler=async (setEmail,setPassword,setIsLoggedIn,dispatch,location,navigate)=>{
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
            const data = await response.json(); //readable format convert //if not await used promise is pending
            // console.log( await response.json()) readiable format convert into .json()
            // console.log( await response.json())
      
            const { foundUser, encodedToken } = data;
            // console.log(foundUser.email)
            setIsLoggedIn(true);
            localStorage.setItem("user", JSON.stringify(foundUser)); //foundUse is object[obj,obj]
            const encoded=localStorage.setItem("token", encodedToken);
            dispatch({type:"SET_TOKEN",payload:encodedToken});
            // console.log(location);
            console.log("login guest click");
            console.log(location);
            navigate(location?.state?.from?.pathname);
          } catch (error) {
            console.log(error);
          }
      }
