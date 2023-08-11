const { describe, it } = require("node:test");

const URL_BASE = 'http://localhost:3000'

describe('testando api', () => {


    it('should create a new pedido', async () => {

        const response = await fetch(`${URL_BASE}/api/pedidos`)
        const json = await response.json()

        console.log(json)
    })

    it('should new pedido', async () => {
        const fakeData = {
            value: 100.50,
            dioptria: {
                right: '2',
                left: '1.5',
            }
        }


        const response = await fetch(`${URL_BASE}/api/pedidos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authentication: 'test auth'
            },
            body: JSON.stringify(fakeData),

        })
        const json = await response.json()

        
        console.log(json)
    })
})