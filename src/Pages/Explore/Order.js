import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';




const Order = ({ handleClose, show, booking }) => {

    const{user} = useAuth();

    const { name, price } = booking;
    const { register, handleSubmit, reset } = useForm();

    const handleOrderSubmit =  data => {
        console.log(data);
        alert('k')
        handleClose();

        // e.preventDefault();
        axios.post('http://localhost:5000/orders', data)
            .then(res => {
                console.log(res)
                reset();
            })
    }

    return (
        <div>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(handleOrderSubmit)}>
                        <input {...register("name", { required: true })} placeholder='Your Name' />
                        <input {...register("email", { required: true , disabled: false})} placeholder={user.email} />
                        <input {...register("address", { required: true })} placeholder='Address' />
                        <input {...register("phone", { required: true })} placeholder='Phone' />
                        <input {...register("price", { required: true, disabled: false })} placeholder={price} />
                        {/* <input type="submit" className='post' /> */}
                        {/* <button type='submit'>Order</button> */}
                        <input type="submit" className='post'/>

                    </form>
                </Modal.Body>
               
            </Modal>


        </div >
    );
};

export default Order;