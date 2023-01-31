import './index.css'
function App() {

  return (
    <>
      <header className='w-full h-24 p-6 px-72'>
        <h1 className='text-4xl font-bold text-black'>Kanban Board</h1>
      </header>
      <section className='w-full h-screen px-72 flex justify-between'>
        <div className='w-72 h-screen '>
          <div className='flex flex-row justify-between'>
            <div className='w-20 h-10 bg-slate-800 rounded-full text-xl text-white px-4 pt-1'>ToDo</div>
            <svg className='cursor-pointer' width="34" height="34" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="13.3333" cy="32" r="5" fill="grey" />
              <circle cx="32" cy="32" r="5" fill="grey" />
              <circle cx="50.6665" cy="32" r="5" fill="grey" />
            </svg>

          </div>
          <div className="cards ">
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
                  <div className="badge badge-outline bg-green-800 text-white">Back-End</div>

                </div>

              </div>

            </div>
          </div>
        </div>
        <div className='w-72 h-screen '>
          <div className='flex flex-row justify-between'>
            <div className='w-28 h-10 bg-green-600 rounded-full text-white text-xl px-4 pt-1'>Inprogess</div>
            <svg className='cursor-pointer' width="34" height="34" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="13.3333" cy="32" r="5" fill="grey" />
              <circle cx="32" cy="32" r="5" fill="grey" />
              <circle cx="50.6665" cy="32" r="5" fill="grey" />
            </svg>
          </div>
        </div>
        <div className='w-72 h-screen '>
          <div className='flex flex-row justify-between'>
            <div className='w-20 h-10 bg-red-600 rounded-full text-xl text-white px-4 pt-1'>Done</div>
            <svg className='cursor-pointer' width="34" height="34" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="13.3333" cy="32" r="5" fill="grey" />
              <circle cx="32" cy="32" r="5" fill="grey" />
              <circle cx="50.6665" cy="32" r="5" fill="grey" />
            </svg>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
