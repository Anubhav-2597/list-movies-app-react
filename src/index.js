import React from 'react'
import ReactDOM from 'react-dom'
import Cards from './Cards'
import './index.css'
import Sdata from './Sdata'

ReactDOM.render(
  <>

    <h1 className='heading_style'>List of top 3 series on Netflix in 2022</h1>

    {Sdata.map((val) =>{
      console.log(val)
      return(
        <Cards 
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.link}
        />
      )
    }

    )}

  </>,
  document.getElementById('root')
)
