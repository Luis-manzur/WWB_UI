import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import { useParams } from 'react-router-dom';
import { useNavigate, Link } from 'react-router-dom'
import Spinner from '../../Components/Spinner';
import "react-datepicker/dist/react-datepicker.css";
import "./Payments.css"

const Payment = () => {

    const { id } = useParams();

    const [expirationDate, setExpirationDate] = useState(new Date());
    const [reservation, setReservation] = useState(null);
    const [loading, setLoading] = useState(true);

    const [error, setError] = useState({
        generic: ''
    });

    const navigate = useNavigate()
    const pay = () => {
        navigate('/payment/success')
    }
    useEffect(() => {
        setLoading(true);
        fetch('http://142.93.61.14:9000/reservations/' + id + '/', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') },
        }).then(data => {
            if (!data.ok) {
                throw data
            }
            return data.json()
        })
            .then(
                data => {
                    setReservation(data)

                    setLoading(false);
                }
            ).catch(error => {
                error.json().then((body) => {
                    let generic = ''
                    if (body.non_field_errors) {
                        generic = body.non_field_errors[0]
                    }
                    if (body.detail == "Authentication credentials were not provided.") {
                        localStorage.removeItem('token')
                        localStorage.removeItem('user')
                        navigate('/login')
                    }
                    setError({ generic: generic })
                })
            })
    }, []);    


    if (loading) {
        return (
            <Spinner />
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                <form className="col-md-10 mx-auto col-12 card shadow-lg border-0 p-4">
                    <div>
                        <h1 className="display-4 BlackText">Payment</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12 my-auto">
                            <table className="table">
                                <thead className="thead-light">
                                    <tr>
                                        <th>Reserved by</th>
                                        <td>{localStorage.getItem('name')}</td>
                                        <th>Total </th>
                                        <td>{parseInt(reservation.adults) * parseInt(reservation.plan.adult_price) + parseInt(reservation.kids) * parseInt(reservation.plan.children_price)} daily</td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-md-6 col-12">
                            <div className="form-group">
                                <label htmlFor="Fromdate" className="font-weight-bolder mr-3">Card Holder </label>
                                <input type="text" className="form-control" required/>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="form-group">
                                <label htmlFor="Todate" className="font-weight-bolder mr-3">Card Number </label>
                                <input type="text" className="form-control" maxLength='16' minLength='16' required/>
                            </div>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-md-6 col-12">
                            <div className="form-group">
                                <label htmlFor="Fromdate" className="font-weight-bolder mr-3">Expiration Date </label>
                                <DatePicker selected={expirationDate} name='startDate' onChange={(date) => setExpirationDate(date)} className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="form-group">
                                <label htmlFor="Todate" className="font-weight-bolder mr-3">CVV</label>
                                <input type="text" name="cvv" id="cvv" className="form-control" maxLength='3' minLength='3' required/>
                            </div>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-md-12 col-12">
                            <div className="form-group">
                                <label htmlFor="payment" className="font-weight-bolder">Plan</label>
                                <input type='text' className="form-control" id="plan" value={reservation.plan.name} disabled />

                            </div>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-md-6 col-12">
                            <div className="form-group">
                                <label htmlFor="Fromdate" className="font-weight-bolder mr-3">Adults</label>
                                <input type='number' name='adults' value={reservation.adults} className="form-control" disabled />
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="form-group">
                                <label htmlFor="Fromdate" className="font-weight-bolder mr-3">kids</label>
                                <input type='text' name='kids' value={reservation.kids} className="form-control" disabled />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-12 my-auto">
                        <div className="col-md-12 col-12 float-right">
                            <input type="submit" className="btn btn-reservation" data-toggle="modal" data-target="#thanks" onClick={pay} value="Confirm Payment" />
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )


}

export default Payment