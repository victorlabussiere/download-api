import path from 'path'

export async function Download(res) {
    const file = await path.join('./static', 'curriculo-victor.pdf')

    try {
        if (!res) throw new Error()
        res.download(file)
            .catch(err => new Error({ message: err.message, error: err }))

        return res.status(200)

    } catch (err) {
        return {
            message: 'Não foi possível realizar o download',
            error: err
        }
    }
}