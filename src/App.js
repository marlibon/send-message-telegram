import React, { useEffect, useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Grid,
  theme,
  Flex,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { InputText } from './components/InputText';
import { sendTelegram } from './utils/api';
import SendedMsg from './components/SendedMsg';

function App () {
  const [arrSendedMsg, setArrSendedMsg] = useState([]) // массив объектов отправленных сообщений
  const [textButton, setTextButton] = useState('Отправить') // текст кнопки

  // прокидываем эту функцию как пропс для формы. Вызывает функцию отправки в телеграм, и обрабатывает в зависимости от результата и присваивает текст для кнопки
  function handleSubmit (value) {
    setTextButton('Отправка...')
    let sendedStatus;
    sendTelegram(value)
      .then(() => {
        sendedStatus = true;
        setTextButton('Отправлено!')
      })
      .catch(err => {
        console.log(err)
        sendedStatus = false;
        setTextButton('Не отправлено!')
      })
      .finally(() => {
        setArrSendedMsg([{ value, sended: sendedStatus }, ...arrSendedMsg])
      })
  }
  //возврат исходного текста для кнопки отправки
  useEffect(() => {
    setTimeout(() => {
      setTextButton('Отправить')
    }, 3000)
  }, [textButton])

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid
          direction={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          w={'100%'}
          gridTemplateColumns={'100%'}
        >
          <ColorModeSwitcher justifySelf="flex-end" />
          <Flex
            direction={'column'}
            align={'center'}
            justify={'center'}
            mt={'20%'}
          >
            <Text fontSize='xl' p={'10px 0 50px'}>Напиши нам что-нибудь :) Мы получим это в Telegram</Text>
            <InputText
              onSubmit={handleSubmit}
              textButton={textButton} />
            <SendedMsg array={arrSendedMsg} />
          </Flex>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
