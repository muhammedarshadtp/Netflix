export const CheckValidation = (email, password, name, isSignUp) => {
    if (isSignUp && !/^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{5,}$/.test(name)) {
        return  "Name is not valid" 
    }
    if (!/^[a-z0-9._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.)+[a-z]{2,16}$/.test(email)) {
        return  "Email is not valid" 
    }
   
    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
        return "Password is not valid." 
    }
   
    return  null
};
