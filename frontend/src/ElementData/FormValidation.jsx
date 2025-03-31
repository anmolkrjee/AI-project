export const validateForm = (formData) => {
    // console.log(formData.name)
    const alphaRegex = /^[a-zA-Z]+$/;
    const numRegex = /^[0-9]+$/;
    const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

    if (formData.name.length < 3) 
        return "Name is Invalid";

    if (!numRegex.test(formData.number)) 
        return "Phone Number is invalid";

    if (formData.password.length < 8) 
        return "Password should be at least 8 characters long";

    if (!/[a-z]/.test(formData.password)) 
        return "Password should contain at least one lowercase letter";

    if (!/[A-Z]/.test(formData.password)) 
        return "Password should contain at least one uppercase letter";

    if (!/[0-9]/.test(formData.password)) 
        return "Password should contain at least one digit";

    if (!specialCharRegex.test(formData.password)) 
        return "Password should contain at least one special character";

    if (formData.password !== formData.confirmPassword) 
        return "Password did not match";

    return "1"; // Success
};