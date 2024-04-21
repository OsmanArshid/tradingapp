// Basically all the logic of server

// func that are called in server for data input
import { app } from "./app.js";

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const passwordMatch = password === user.password;

        if (passwordMatch) {
            return res.status(200).json({ 
                message: 'Login successful',
                username :user.username,
            });
        } else {
            return res.status(401).json({ message });
        }
    } catch (error) {
        res.status(500).json({ message});
    }
});

// app.post('/Signup', async (req, res) => {
//     const { username, password } = req.body;
//         const existingUser = await User.findOne({ username });
//         if (existingUser) {
//             return res.status(400).json({ message: "User already exists" });
//         }
  
//         const user = new User({ username, password });
//         await user.save();
  
//         res.status(201).json({ message: "User created successfully" });
//
//   });
app.post('/signup', async (req, res) => {
    const { username, password } = req.body;
  
    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
  
        const user = new User({ username, password });
        await user.save();
  
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Error creating user" });
    }
  });
  
  // Home route
  app.get('/', (req, res) => {
      res.json({ message: 'Welcome to the app' });
  });
  
  export default app;
  