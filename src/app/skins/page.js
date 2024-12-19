import React from 'react'
import Skin from '../components/Skin'

const Skins = async () => {
    const data = await fetch('https://fortnite-api.com/v2/cosmetics/new')
    const posts = await data.json()
    console.log(posts);
    
    
    return (
        <div>
            <Skin posts={posts}/>
        </div>
    )
}

export default Skins

