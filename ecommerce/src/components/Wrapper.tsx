import React from 'react'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="container p-4 mt-[80px] mx-auto ">
            {children}
        </section>
    )
}

export default Wrapper