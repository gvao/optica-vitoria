import { Input } from "./input"
import { Button } from "../button"
import { Root } from "./root"
import { Title } from "./title"

export const FormComponent = {
    Root,
    Input,
    Button,
    Title,
}

export function getInputs<T>(target: EventTarget) {
    const inputs = (target as Element).querySelectorAll('input')
    const inputsArr = Array.from(inputs)
    const reduce = inputsArr.reduce((acc, { id, value, type, checked }) => {
        if (type === 'checkbox') return acc = { ...acc, [id]: checked }

        return acc = { ...acc, [id]: value }
    }, {})

    return reduce
}
