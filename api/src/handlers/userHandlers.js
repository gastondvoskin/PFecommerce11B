const { getUserByEmailController } = require('../controllers/userControllers/getUserByEmailController');
const { getAllUsersController } = require('../controllers/userControllers/getAllusersController.js');       /* Djear getAllusersController en minúscula para que coincida con el archivo */
const { postUserController } = require('../controllers/userControllers/postUserController');
const { putUserController } = require('../controllers/userControllers/putUserController');






const getUserHandler = async (req, res) => {

    const { email } = req.query;
    try {
        if (email) {
            const userByEmail = await getUserByEmailController(email);      /* ir returns null in case the email doesn't exist in the DB */
            res.status(200).send(userByEmail);
        } else {
            const allUsers = await getAllUsersController();
            res.status(200).send(allUsers);
        }
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

const postUserHandler = async (req, res) => {
    const { name, email, type, status, address } = req.body;
    try {
        const newUser = await postUserController(name, email, type, status, address);
        res.status(201).send(newUser);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};


const putUserHandler = async (req, res) => {
    try {
        console.log('req.body: ', req.body);
        
        const { email } = req.params;
        console.log('email: ', email);

        const { name, /* email,  */ type, status, address } = req.body;
        console.log('status: ', status);
        await putUserController(/* id,  */name, email, type, status, address);
        res.status(200).send('Modificación exitosa');
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};





module.exports = { getUserHandler, postUserHandler, putUserHandler };