import * as express from 'express';
import { Request, Response } from 'express';
import { createConnection } from 'typeorm';
import { Post } from './entities/Post';
import ormConfig from '../ormconfig';
// import cors from 'cors';
const cors = require('cors');

// create typeorm connection
createConnection(ormConfig)
  .then(connection => {
    // connection.runMigrations();
    const postRepository = connection.getRepository(Post);

    const app = express();

    app.use([express.json(), cors()]);
    // app.use(cors())

    app.get('/posts', async (req: Request, res: Response) => {
      const posts = await postRepository.find();
      res.json(posts);
    });

    app.put('/posts/update/:id', async (req: Request, res: Response) => {
      const { title, content } = req.body;

      const id = req.params.id;
      const post = await Post.findOne(Number(id));
      if (!post) {
        res.json({
          code: 1,
          message: `找不到 id 为 ${id} 的 post`
        });
      }

      post.title = title;
      post.content = content;
      post.save();
      res.json(post);
    });

    app.post('/post/create', async (req: Request, res: Response) => {
      const { title, content } = req.body;
      const post = new Post();
      post.title = title;
      post.content = content;
      await post.save();
      res.json(post);
    });

    app.listen(3001, () => {
      console.log('Server running on port http://localhost:3001');
    });
  })
  .catch(err => {
    console.log('createConnection error: ', err);
  });
