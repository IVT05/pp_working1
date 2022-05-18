import React, {Component} from 'react';
import {Container, Form, Button, FormCheck} from "react-bootstrap";
import { useForm } from "react-hook-form";

function Contacts() {
    const { register, handleSubmit} = useForm();
    const onSubmit = async (data, e) => {
        console.log(data);
        let res = await fetch("http://localhost:8080/Contacts",
            {
                method: "POST",
                body: JSON.stringify({
                    email: data.email,
                    text: data.text,
                    check: data.check,
                }),
            });
        let resJson = await res.json();
        if (resJson.status === 200) alert("Ваш отзыв принят"); else alert("Произошла ошибка");
    };
    const onError = (errors, e) => console.log(errors, e);
        return (

            <Container className={"Contacts"} style={{width:"500px"}}>
                <h1> Связаться с нами. </h1>
                <Form onSubmit={handleSubmit(onSubmit, onError)}>
                    <Form.Group controlId={"formBasicEmail"}>
                        <Form.Label> Адрес электронной почты: </Form.Label>
                        <Form.Control {...register("email")} type="email" placeholder="Введите адрес эл. почты" style={{border: "solid #056efd 1px"}}/>
                        <Form.Text style={{color: "black"}}>
                            Мы обязательно ответим! (нет)
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId={"formBasicPassword"}>
                        <Form.Label> Опишите проблему: </Form.Label>
                        <Form.Control {...register("text")} as={"textarea"} rows={"3"} style={{border: "solid #056efd 1px"}}/>
                    </Form.Group>

                    <Form.Group controlId={"formBasicCheckBox"}>
                        <Form.Check {...register("check")} type={"checkbox"} label={"Поддерживаю Путина"}/>
                    </Form.Group>

                    <Button variant={"outline-primary"} style={
                        {
                            borderRadius: "20px", marginBottom: "10px",
                        }} type={"submit"}>Отправить</Button>
                </Form>
            </Container>

        );
    }




export default Contacts;