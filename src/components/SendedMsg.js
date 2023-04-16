import { Flex, Heading, Stack } from "@chakra-ui/react"

const SendedMsg = ({ array }) => {
    if (array.length !== 0) return (
        <Flex
            maxH={500}
            mt={5}
            overflowY={'hidden'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'flex-start'}>
            <Stack spacing={3}>
                <Heading
                    mt={5}
                    p={4}
                    as={'h3'}
                    fontWeight={300}
                    size='x'>
                    Отправленные сообщения
                </Heading>
            </Stack >
            {array.map(({ value, sended }, index) => {
                return (
                    <Heading
                        mt={5}
                        p={4}
                        border={`1px solid ${sended ? '#319795' : 'red'}`}
                        color={`${sended ? '#319795' : 'red'}`}
                        borderRadius={15}
                        as='p'
                        fontWeight={400}
                        size='xs'
                        width={'fit-content'}
                        transition={'.5s ease'}
                        key={index}
                        _hover={{ color: '#1a202c', border: '1px solid #1a202c' }}>
                        {value}
                    </Heading>
                )
            })
            }
        </Flex >
    )
}
export default SendedMsg
