import React from 'react'
import Header from '../components/Header'
import Board from '../components/Board'
const Kanban:React.FC = () => {
  return (
    <>
        <Header />
        <section className='w-full overflow-x-auto h-screen md:px-72 flex justify-between'>
            <Board title='Todo' color='slate' />
            <Board title='Inprogress' color='red' />
            <Board title='Done' color='green'/>
        </section>
    </>
  )
}

export default Kanban