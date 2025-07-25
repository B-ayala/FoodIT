import { generationToken } from "../utils/jwt.js"; 

const default_user = {
    id: 1,
    email: "admin@admin.com",
    password: "password123",
};
export const login = (req, res) => {
    const { email, password } = req.body;
    if (email === default_user.email && password === default_user.password) {
        const token = generationToken(default_user);
        res.status(200).json({
            message: 'Login successful',
            token: token,
            user: default_user
        });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
};

export default { login };