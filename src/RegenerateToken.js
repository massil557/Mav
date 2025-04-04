import axios from "axios"
const regenerateTokenPost = async (url) => {
    let accessToken1
    try {
        const token = localStorage.getItem('refreshToken')
        const response = await axios.post('http://localhost:3000/token', {
            token,
        })
        console.log(response)
        const { accessToken } = response.data
        accessToken1 = accessToken
    } catch (error) {
        console.log(`this dude's error ${error}`)
    }

    try {
        const accessToken = accessToken1
        await axios.post(
            url,
            { token: localStorage.getItem('refreshToken') },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        )
        localStorage.setItem('accessToken', accessToken)

    } catch (error) {
        console.log(`bruhhh ${error}`)
    }
}

const regenerateTokenDelete = async (url) => {
    let accessToken1
    try {
        const token = localStorage.getItem('refreshToken')
        const response = await axios.post('http://localhost:3000/token', {
            token,
        })
        console.log(response)
        const { accessToken } = response.data
        accessToken1 = accessToken
    } catch (error) {
        console.log(`this dude's error ${error}`)
    }

    try {
        const accessToken = accessToken1
        await axios.delete(
            url,
            { token: localStorage.getItem('refreshToken') },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        )
        localStorage.setItem('accessToken', accessToken)

    } catch (error) {
        console.log(`bruhhh ${error}`)
    }
}



const regenerateTokenPut = async (url) => {
    let accessToken1
    try {
        const token = localStorage.getItem('refreshToken')
        const response = await axios.post('http://localhost:3000/token', {
            token,
        })
        console.log(response)
        const { accessToken } = response.data
        accessToken1 = accessToken
    } catch (error) {
        console.log(`this dude's error ${error}`)
    }

    try {
        const accessToken = accessToken1
        await axios.put(
            url,
            { token: localStorage.getItem('refreshToken') },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        )
        localStorage.setItem('accessToken', accessToken)

    } catch (error) {
        console.log(`bruhhh ${error}`)
    }
}

const regenerateTokenGet = async (url) => {
    let accessToken1
    try {
        const token = localStorage.getItem('refreshToken')
        const response = await axios.post('http://localhost:3000/token', {
            token,
        })
        console.log(response)
        const { accessToken } = response.data
        accessToken1 = accessToken
    } catch (error) {
        console.log(`this dude's error ${error}`)
    }

    try {
        const accessToken = accessToken1
        await axios.get(
            url,
            { token },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        )
        localStorage.setItem('accessToken', accessToken)

    } catch (error) {
        console.log(`bruhhh ${error}`)
    }
}


export { regenerateTokenPost, regenerateTokenDelete, regenerateTokenPut, regenerateTokenGet }