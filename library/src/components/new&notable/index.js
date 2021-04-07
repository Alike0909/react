import React, { useState } from 'react'
import './index.css'
import Card from '../card'

function NewAndNotable() {

    const sources = [
        { img: "https://scientia.themerex.net/wp-content/uploads/2019/06/8pr-copyright-500x500.png", title: "The Life Lessons", desc: "The Life Lessons is the book about self education and...", price: 65.00},
        { img: "https://scientia.themerex.net/wp-content/uploads/2019/06/1pr-copyright-500x500.png", title: "The Untold Tales", desc: "One of the biggest art projects in the world of...", price: 62.00 },
        { img: "https://scientia.themerex.net/wp-content/uploads/2019/06/2pr-copyright-500x500.png", title: "Hobbye Lobbye", desc: "A great story about politicians and their secret private life...", price: 49.00 },
        { img: "https://scientia.themerex.net/wp-content/uploads/2019/06/7pr-copyright-500x500.png", title: "Where They Sing", desc: "The best selling novel of all times about love and...", price: 58.00 },
    ]

    const sourceItems = sources.map((item, i) => <Card key={i} book={item}></Card>)

    return (
        <>
            <section className="NewAndNotable">
                <h1>New&Notable</h1>
                <div className="new-container">
                    {sourceItems}
                </div>
            </section>
        </>
    )
}

export default NewAndNotable