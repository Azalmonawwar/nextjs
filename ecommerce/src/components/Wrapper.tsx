import React from 'react'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="container px-5 mx-auto">
            {children}
        </section>
    )
}

export default Wrapper