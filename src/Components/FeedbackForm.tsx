import React, {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";


/*
type ResultObjectType = {
    start: 0 | number
    result: 0 | number
    difference: 0 | number
}
*/

export const FeedbackForm = () => {

    let [personName, setPersonName] = useState('')
    let [phoneNumber, setPhoneNumber] = useState('')
    const ERROR_MESSAGE = 'Some error'
    const SUCCESS_MESSAGE = 'Message was sent'

    const changePersonNameHandleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPersonName(e.target.value)
    }

    const changePhoneNumberHandleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value)
    }

    const onSubmitButtonHandler = async () => {
        const TOKEN = '7811729204:AAEm6p-TeNiMMI97hdakUDNMDUckqtZ7QYI'
        const CHAT_ID = '-1002298636407'
        const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

        let message = ` <b>Test info: </b> 
                        <b>Имя - ${personName}</b> 
                        <b>Телефон - ${phoneNumber}</b>`
        console.log('Message was sent')

        let response = await fetch(URI_API, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
                parse_mode: 'html'
            })
        })

        let result = await response.json()

        if (result.ok) {

        } else {
            console.log(result)
        }
    }
    return <>
        <Box
            component="form"
            sx={{'& .MuiTextField-root': {m: 1, width: '25ch'}}}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    id="PersonName"
                    label="Имя"
                    helperText="Введите имя"
                    variant="outlined"
                    value={personName}
                    onChange={changePersonNameHandleClick}
                />
                <TextField
                    id="PersonPhoneNumber"
                    label="Телефон"
                    helperText="Введите номер телефона"
                    variant="outlined"
                    value={phoneNumber}
                    onChange={changePhoneNumberHandleClick}
                />

            </div>
            <Button variant="contained" onClick={onSubmitButtonHandler}>Отправить </Button>
        </Box>
    </>
}
