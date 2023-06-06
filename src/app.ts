import * as express from 'express';
import UserRouter from './routes/user.route';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
    this.app.get('/', (_req, res) => res.json({ message: 'ok' }));
    this.routes();
    this.errorConfig();
  }

  private config(): void {
    this.app.use(express.json());
  }

  private routes(): void {
    this.app.use(UserRouter);
  }

  private errorConfig(): void {

  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export default App;