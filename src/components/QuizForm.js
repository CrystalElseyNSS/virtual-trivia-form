import React, { useRef, useContext, useState } from 'react';
import { Button, Form, FormGroup, Card } from 'reactstrap';
import { Context } from '../providers/DataProvider';
import "../app/App.css";

export const QuizForm = () => {
    const { addQuiz } = useContext(Context)
    const [showForm, setShowForm] = useState(true)
    const exhibitorName = useRef()
    const exhibitorId  = useRef()
    const qOne = useRef()
    const qOne_aOne = useRef()
    const qOne_aTwo = useRef() 
    const qOne_aThree = useRef()
    const qOne_aFour = useRef()
    const qOneCorrect = useRef()
    const qTwo = useRef()
    const qTwo_aOne = useRef()
    const qTwo_aTwo = useRef() 
    const qTwo_aThree = useRef()
    const qTwo_aFour = useRef()
    const qTwoCorrect = useRef()
    const qThree = useRef()
    const qThree_aOne = useRef()
    const qThree_aTwo = useRef()
    const qThree_aThree = useRef()
    const qThree_aFour = useRef()
    const qThreeCorrect = useRef()
    const qFour = useRef()
    const qFour_aOne = useRef()
    const qFour_aTwo = useRef()
    const qFour_aThree = useRef()
    const qFour_aFour = useRef()
    const qFourCorrect = useRef()
    
    const constructQuiz = () => {
        addQuiz({
            exhibitorName: exhibitorName.current.value,
            exhibitorId: exhibitorId.current.value,
            qOne: qOne.current.value,
            qOne_aOne: qOne_aOne.current.value, 
            qOne_aTwo: qOne_aTwo.current.value,
            qOne_aThree: qOne_aThree.current.value,
            qOne_aFour: qOne_aFour.current.value,
            qOneCorrect: qOneCorrect.current.value,
            qTwo: qTwo.current.value,
            qTwo_aOne: qTwo_aOne.current.value, 
            qTwo_aTwo: qTwo_aTwo.current.value,
            qTwo_aThree: qTwo_aThree.current.value,
            qTwo_aFour: qTwo_aFour.current.value,
            qTwoCorrect: qTwoCorrect.current.value,
            qThree: qThree.current.value,
            qThree_aOne: qThree_aOne.current.value, 
            qThree_aTwo: qThree_aTwo.current.value,
            qThree_aThree: qThree_aThree.current.value,
            qThree_aFour: qThree_aFour.current.value,
            qThreeCorrect: qThreeCorrect.current.value,
            qFour: qFour.current.value,
            qFour_aOne: qFour_aOne.current.value, 
            qFour_aTwo: qFour_aTwo.current.value,
            qFour_aThree: qFour_aThree.current.value,
            qFour_aFour: qFour_aFour.current.value,
            qFourCorrect: qFourCorrect.current.value,
        })
        setShowForm(false)
    }

    return (
        <>
            <h1>Virtual Booth Trivia Form</h1>
            <Card className="card">
            { showForm ? 
                <form onSubmit={(evt) => {
                    evt.preventDefault()
                    constructQuiz()
                }}>
                    <FormGroup>
                        <p className="flex">
                            <label>Exhibitor Name:</label>
                            <input required type="text" ref={exhibitorName}></input>
                        </p>
                    </FormGroup>
                    <FormGroup className="border">
                        <p className="flex">
                            <label>Exhibitor Attendee Id:</label>
                            <input required type="text" ref={exhibitorId}></input>
                        </p>
                    </FormGroup>
                    
                    <FormGroup>
                        <p className="flex">
                            <label>Question One:</label>
                            <input required type="text" maxLength="96" ref={qOne} name="qOne"></input>
                        </p>
                    </FormGroup>
                    <FormGroup>
                        <p className="flex">
                            <label className="answer">Answer A:</label>
                            <input required type="text" maxLength="24" ref={qOne_aOne} name="qOne_aOne"></input>
                        </p>
                    </FormGroup>
                    <FormGroup>
                        <p className="flex">
                            <label className="answer">Answer B:</label>
                            <input required type="text" maxLength="24" ref={qOne_aTwo} name="qOne_aTwo"></input>
                        </p>
                    </FormGroup>
                    <FormGroup>
                        <p className="flex">
                            <label className="answer">Answer C:</label>
                            <input required type="text" maxLength="24" ref={qOne_aThree} name="qOne_aThree"></input>
                        </p>
                    </FormGroup>
                    <FormGroup>
                        <p className="flex">
                            <label className="answer">Answer D:</label>
                            <input required type="text" maxLength="24" ref={qOne_aFour} name="qOne_aFour"></input>
                        </p>
                    </FormGroup>
                    <FormGroup className="border">
                        <p className="flex">
                            <label>Correct Answer (A/B/C/D):</label>
                            <input required type="text" maxLength="1" ref={qOneCorrect} name="qOneCorrect"></input>
                        </p>
                    </FormGroup>

                    <FormGroup>
                        <p className="flex">
                            <label>Question Two:</label>
                            <input required type="text" maxLength="96" ref={qTwo} name="qTwo"></input>
                        </p>
                    </FormGroup>
                    <FormGroup>
                        <p className="flex">
                            <label className="answer">Answer A:</label>
                            <input required type="text" maxLength="24" ref={qTwo_aOne} name="qTwo_aOne"></input>
                        </p>
                    </FormGroup>
                    <FormGroup>
                        <p className="flex">
                            <label className="answer">Answer B:</label>
                            <input required type="text" maxLength="24" ref={qTwo_aTwo} name="qTwo_aTwo"></input>
                        </p>
                    </FormGroup>
                    <FormGroup>
                        <p className="flex">
                            <label className="answer">Answer C:</label>
                            <input required type="text" maxLength="24" ref={qTwo_aThree} name="qTwo_aThree"></input>
                        </p>
                    </FormGroup>
                    <FormGroup>
                        <p className="flex">
                            <label className="answer">Answer D:</label>
                            <input required type="text" maxLength="24" ref={qTwo_aFour} name="qTwo_aFour"></input>
                        </p>
                    </FormGroup>
                    <FormGroup className="border">
                        <p className="flex">
                            <label>Correct Answer (A/B/C/D):</label>
                            <input required type="text" maxLength="1" ref={qTwoCorrect} name="qTwoCorrect"></input>
                        </p>
                    </FormGroup>

                    <FormGroup>
                        <p className="flex">
                            <label>Question Three:</label>
                            <input required type="text" maxLength="96" ref={qThree} name="qThree"></input>
                        </p>
                    </FormGroup>
                    <FormGroup>
                        <p className="flex">
                            <label className="answer">Answer A:</label>
                            <input required type="text" maxLength="24" ref={qThree_aOne} name="qThree_aOne"></input>
                        </p>
                    </FormGroup>
                    <FormGroup>
                        <p className="flex">
                            <label className="answer">Answer B:</label>
                            <input required type="text" maxLength="24" ref={qThree_aTwo} name="qThree_aTwo"></input>
                        </p>
                    </FormGroup>
                    <FormGroup>
                        <p className="flex">
                            <label className="answer">Answer C:</label>
                            <input required type="text" maxLength="24" ref={qThree_aThree} name="qThree_aThree"></input>
                        </p>
                    </FormGroup>
                    <FormGroup>
                        <p className="flex">
                            <label className="answer">Answer D:</label>
                            <input required type="text" maxLength="24" ref={qThree_aFour} name="qThree_aFour"></input>
                        </p>
                    </FormGroup>
                    <FormGroup className="border">
                        <p className="flex">
                            <label>Correct Answer (A/B/C/D):</label>
                            <input required type="text" maxLength="1" ref={qThreeCorrect} name="qThreeCorrect"></input>
                        </p>
                    </FormGroup>

                    <FormGroup>
                        <p className="flex">
                            <label>Question Four:</label>
                            <input required type="text" maxLength="96" ref={qFour} name="qFour"></input>
                        </p>
                    </FormGroup>
                    <FormGroup>
                        <p className="flex">
                            <label className="answer">Answer A:</label>
                            <input required type="text" maxLength="24" ref={qFour_aOne} name="qFour_aOne"></input>
                        </p>
                    </FormGroup>
                    <FormGroup>
                        <p className="flex">
                            <label className="answer">Answer B:</label>
                            <input required type="text" maxLength="24" ref={qFour_aTwo} name="qFour_aTwo"></input>
                        </p>
                    </FormGroup>
                    <FormGroup>
                        <p className="flex">
                            <label className="answer">Answer C:</label>
                            <input required type="text" maxLength="24" ref={qFour_aThree} name="qFour_aThree"></input>
                        </p>
                    </FormGroup>
                    <FormGroup>
                        <p className="flex">
                            <label className="answer">Answer D:</label>
                            <input required type="text" maxLength="24" ref={qFour_aFour} name="qFour_aFour"></input>
                        </p>
                    </FormGroup>
                    <FormGroup>
                        <p className="flex">
                            <label>Correct Answer (A/B/C/D):</label>
                            <input required type="text" maxLength="1" ref={qFourCorrect} name="qFourCorrect"></input>
                        </p>
                    </FormGroup>

                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            :
            <div id="thankYou">
                <p>Thank you!</p>
                <p>Your information has been submitted.</p> 
            </div>
            }
            </Card>
        </>
    )
}