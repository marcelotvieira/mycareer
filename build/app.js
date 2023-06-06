"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class App {
    constructor() {
        this.app = express();
        this.config();
        this.app.get('/', (_req, res) => res.json({ message: 'ok' }));
        this.routes();
        this.errorConfig();
    }
    config() {
        this.app.use(express.json());
    }
    routes() {
    }
    errorConfig() {
    }
    start(PORT) {
        this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map