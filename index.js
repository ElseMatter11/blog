import express from "express";
import { registerValidator,loginValidator } from "./validators/auth.js";
import * as model from "./models/models.js" ;
import authCheck from "./midlwares/authCheck.js";
import { registration,login,getUser} from "./controllers/UserController.js";
import sequelize from './db.js';
import { postValidation } from "./validators/post.js";
import { createPost, deletePost, getAllPosts, getOnePost, updatePost } from "./controllers/PostController.js";
import multer from "multer";

const {User,Post} = model;

const PORT = process.env.PORT || 5000;

const app = express();

const storage = multer.diskStorage({
    destination: (_, __, cb) => {
        cb(null, 'uploads');
    },
    filename: (_, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({storage});

app.use(express.json());
app.use('/uploads', express.static('uploads'))

app.get('/', (req, res) => {
    res.send('Hj');
    res.json({
        st:1
    })
});

app.post('/auth/login', loginValidator, login);
app.post('/auth/registration', registerValidator, registration );
app.get('/auth/user', authCheck, getUser);

app.post('/upload', authCheck, upload.single('image'), (req, res) => {
    res.json({
        url: `/uploads/${req.file.originalname}`
    });
});

app.post('/post', authCheck, postValidation, createPost);
app.get('/post/:id', getOnePost);
app.get('/post', getAllPosts);
app.patch('/post/:id', authCheck, updatePost);
app.delete('/post/:id',authCheck,deletePost);

const start = async () => {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, (err) => {
        if (err) {
            return console.log(err);
        }
    
        console.log('Server is running on port 5000')
    });
}

start();