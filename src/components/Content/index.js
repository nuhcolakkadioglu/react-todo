import React from 'react'
import ContentFooter from '../ContentFooter'
import List from './List'

export default function index() {

    return (
        <>
            <section className="main">
                <input className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all">
                    Mark all as complete
                </label>

                <List />
            </section>
            <ContentFooter />
        </>

    )
}
