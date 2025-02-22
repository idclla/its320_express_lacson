
import User from '../models/userModel.js'


async function getUsers(req, res) {
    try {
        const users = await User.find();
        res.json(users); 
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Failed to fetch users" }); 
    }
}
async function createUser(req,res){
    const {username, email, password} = req.body;

    if (!username || !email || !password) {
        res.send('Please fill out all fields')
    }
    // const exists = User.findOne({username})
    // if (exists) {
    //     res.status(409).send('Username already exists')
    //     throw new Error('Username alreadty exists')
    // }

    const newUser = User.create({
        username, email, password
    })

    if (!newUser) {
        res.status(500).send('Error while creating user')
    }

    return res.status(200).send('User successfully created.')
}


export {createUser, getUsers};