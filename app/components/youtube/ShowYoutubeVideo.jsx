import React from 'react'

export default function ShowYoutubeVideo({youtubeLink}) {
  return (
    <iframe 
    width="300" 
    height="170" 
    src={`https://www.youtube.com/embed/${youtubeLink}`}
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen
    style={{
      borderRadius: '0.5rem',
    }}
    >

    </iframe>
  )
}
