import React from 'react'
import "./Banner.css"
function Banner() {
  return (
    <header className="banner" style={{
      backgroundSize:"cover",
    backgroundPosition:"center center",
    backgroundImage:`url('https://images.thedirect.com/media/article_full/netflix-one-piece.jpg?imgeng=cmpr_75/')`
    }}>
<div className='banner_contents'>
<h1 className='banner_title'>Movie Name</h1>
<div className='banner_button'>
  <button className='banner_button'>Play</button>
  <button className='banner_button'>My List</button>

</div>
<h1 className='banner_description'>This is a test description</h1>

</div>
<div className='banner--fadeBottom'/>
    </header>
  )
}

export default Banner
