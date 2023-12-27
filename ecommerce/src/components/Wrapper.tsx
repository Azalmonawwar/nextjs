import React from 'react'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="container md:p-4 p-2 md:mt-[80px] mt-[60px] mx-auto ">
            {children}
        </section>
    )
}

export default Wrapper