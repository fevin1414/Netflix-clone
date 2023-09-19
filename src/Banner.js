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
<div className='banner_title'>
</div>
</div>
    </header>
  )
}

export default Banner
