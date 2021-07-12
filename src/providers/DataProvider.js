import React from "react"

export const Context = React.createContext()

export const DataProvider = (props) => {

    const addQuiz = (quiz) => {
        return fetch("https://us-central1-sw-booth-trivia.cloudfunctions.net/addQuiz", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(quiz)
        })
    }

    return (
        <Context.Provider value={{ addQuiz }}>
            {props.children}
        </Context.Provider>
    )
}