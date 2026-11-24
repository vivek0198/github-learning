function login(email, password) {

    if (!email || !password) {
        return "Email and password required";
    }

    return "Login successful";
}

console.log(login("test@gmail.com", "123456"));