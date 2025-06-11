
import './auth.css'


// Save a new user to localStorage
export const signupUser = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.find(u => u.email === email);

    if (exists) {
        return { success: false, message: "User already exists" };
    }

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    return { success: true };
};

// Log in user and store session info
export const loginUser = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = users.find(u => u.email === email && u.password === password);

    if (validUser) {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("currentUser", email);
        return { success: true };
    }

    return { success: false, message: "Invalid credentials" };
};

// Clear session info on logout
export const logoutUser = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("currentUser");
};

// Check if a user is still authenticated
export const isAuthenticated = () => {
    const flag = localStorage.getItem("isAuthenticated");
    const currentUser = localStorage.getItem("currentUser");
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Only true if user is flagged as logged in AND exists in localStorage
    return (
        flag === "true" &&
        currentUser &&
        users.some(user => user.email === currentUser)
    );
};
