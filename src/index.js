import express from 'express'
import cors from 'cors'

import { Download } from '../utils/download.js'

async function main() {
    const app = express()
    const router = express.Router()
    app.use(express.json())
    app.use(cors())
    app.use(router)

    const port = process.env.PORT || 3000

    router.get('/download', async (req, res) => { Download(res) })

    app.listen(port, () => console.log(`Server running at http://localhost:${port}`))
}

main()