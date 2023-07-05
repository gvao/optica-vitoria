export const generateToken = (size = 20) => {
    const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890'
    let token = ''

    for (let i = 0; i < size; i++) {
        const randomNumber = Math.round(Math.random() * charSet.length)
        token += charSet.charAt(randomNumber)
    }

    return token
}