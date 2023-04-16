import { Button, Input, Stack } from '@chakra-ui/react'
import { useState } from 'react'

export const InputText = ({ onSubmit, textButton }) => {
    const [value, setValue] = useState('')
    const [valid, setValid] = useState(false)

    const handleInputChange = (e) => {
        setValid(e.target.validity.valid);
        const inputValue = e.target.value
        setValue(inputValue)

    }
    function handleSubmit (event) {
        event.preventDefault();
        onSubmit(value)
        setValue('')
        setValid(false);
    }
    return (
        <>
            <Stack
                spacing={4}
                direction='column'
                align='center'
                minWidth={'320px'}
                width={'40%'}>
                <form onSubmit={handleSubmit}>
                    <Input
                        placeholder='Введите сообщение'
                        value={value}
                        onChange={handleInputChange}
                        w={'100%'}
                        required
                        minLength={2}
                        maxLength={1500}
                        borderRadius={15}
                        border={'2px solid #319795'}
                        colorScheme='teal'
                    />
                    <Button isDisabled={!valid} type='submit' mt={15} colorScheme='teal' size='lg'>
                        {textButton}
                    </Button>
                </form>
            </Stack>
        </>
    )
}