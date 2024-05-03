const Register = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;
        // Check if the user already exists in the database
        if (!fullName || !email || !password) {
            return res.status(401).json({ 
                message: "Invalid data",
                success: false 
            });
        }
        const user = await User.findOne({ email});
        if (user) {
            return res.status(401).json({ 
                message: "User with this email address already exists",
                success: false 
            });
        }
        // Create a new user
        await User.create({ 
            fullName, 
            email, 
            password 
        });

        return res.status(201).json({ 
            message: "User registered successfully",
            success: true 
        });

    } catch (error) {
        console.log(error);
    }
}