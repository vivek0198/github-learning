function login(email, password) {

    if (!email || !password) {
        throw new Error("Email and password required");
    }

    if (!email.includes("@")) {
        throw new Error("Invalid email");
    }

    return "Login successful";
}