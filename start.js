const PORT = process.env.PORT || 3000;
let app = express();

app.listen(PORT, () => { console.log('Server listening on port ${PORT}'); });