import React from 'react'

const Card = () => {
    
  return (
    <>
        <div className="card w-full bg-slate-50 shadow-xl relative mt-4">
              <div className="card-actions justify-end relative">

                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute m-2 cursor-pointer" fill="black" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>

              </div>
              <div className="card-body">

                <h2 className="card-title">Hero Section
                  <div className="badge badge-secondary">NEW</div>

                </h2>
                <p>Navbar and CTA</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline bg-violet-700 text-white">Front-End</div>

                </div>

              </div>

            </div>
    </>
  )
}

export default Card