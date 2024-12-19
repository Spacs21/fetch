"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Skin = ({posts}) => {
    const skins = posts?.data.items.br || []
    const router = useRouter()
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500 shadow-lg py-12 px-4 sm:px-6 lg:px-8">
        <div className='container mx-auto'>
            <h1 className="text-4xl font-bold text-white mb-8 text-center">New Fortnite Skins</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {skins.map(skin => (
                    <div key={skin.id} className="bg-purple-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-xl overflow-hidden border border-purple-400 transform transition duration-300 hover:scale-105">
                        <img 
                            src={skin.images.icon ? skin.images.icon : skin.images.smallIcon} 
                            alt={skin.name}
                            className="w-full h-56 object-contain"
                            onClick={()=> router.push(`/product/${skin.id}`)}
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-white mb-2">{skin.name}</h2>
                            <p className="text-sm text-purple-200 mb-2">{skin.description}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-yellow-300 font-medium">{skin.rarity.value}</span>
                                <span className="text-purple-200 text-sm">{skin.type.value}</span>
                            </div>
                            {skin.set && (
                                <p className="text-sm text-purple-300 mt-2">Set: {skin.set.value}</p>
                            )}
                            {skin.introduction && (
                                <p className="text-sm text-purple-300 mt-1">Introduced: {skin.introduction.text}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Skin