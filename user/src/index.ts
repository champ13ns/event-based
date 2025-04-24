import express from 'express'
const app = express()
import UserRoutes from './routes/UserRoutes'


app.listen(4000, () => {
    console.log("User service started on port 4000");
})

app.use(UserRoutes)

