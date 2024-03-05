import express from "express";
const router = express.Router();
router.get('/signup', (req, res) => {
    res.json({ 'data': 'hello world' });
});
export default router;
//# sourceMappingURL=auth.router.js.map