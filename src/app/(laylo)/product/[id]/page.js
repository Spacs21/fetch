import React from 'react'

const Detail = async ({params}) => {
  const data = await fetch(`https://fortnite-api.com/v2/cosmetics/br/${params.id}`)
  const posts = await data.json()
  const skin = posts.data
  console.log(skin);
  
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={skin.images.icon || skin.images.smallIcon}
              alt={skin.name}
              className="w-full h-auto rounded-lg"
            />
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Additional Images</h2>
              <div className="grid grid-cols-2 gap-4">
                {skin.images.featured && (
                  <img src={skin.images.featured} alt="Featured" className="w-full h-auto rounded-lg" />
                )}
                {skin.images.other && Object.entries(skin.images.other).map(([key, value]) => (
                  <img key={key} src={value} alt={key} className="w-full h-auto rounded-lg" />
                ))}
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">{skin.name}</h1>
            <p className="text-xl mb-4">{skin.description}</p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-bold mb-2">Details</h2>
                <p><span className="font-semibold">Rarity:</span> {skin.rarity.value}</p>
                <p><span className="font-semibold">Type:</span> {skin.type.value}</p>
                {skin.set && <p><span className="font-semibold">Set:</span> {skin.set.value}</p>}
                {skin.introduction && <p><span className="font-semibold">Introduced:</span> {skin.introduction.text}</p>}
                <p><span className="font-semibold">ID:</span> {skin.id}</p>
                {skin.series && <p><span className="font-semibold">Series:</span> {skin.series.value}</p>}
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Gameplay</h2>
                  <p>No gameplay tags available</p>
              </div>
            </div>
            {skin.variants && skin.variants.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Variants</h2>
                <div className="grid grid-cols-2 gap-4">
                  {skin.variants.map((variant, index) => (
                    <div key={index} className="bg-purple-800 bg-opacity-50 p-4 rounded-lg">
                      <p className="font-semibold text-lg mb-2">{variant.type}</p>
                      <ul>
                        {variant.options.map((option, optionIndex) => (
                          <li key={optionIndex}>{option.name}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {skin.searchTags && skin.searchTags.map((tag, index) => (
                  <span key={index} className="bg-purple-600 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
                {skin.metaTags && skin.metaTags.map((tag, index) => (
                  <span key={index} className="bg-purple-500 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Lore</h2>
              <p className="italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis suscipit ipsa totam esse quasi doloremque sunt maiores culpa velit consequuntur veritatis vero commodi quos, vel, animi similique in, exercitationem quidem dignissimos. Suscipit cumque officia laborum cupiditate ex! Ratione totam dicta exercitationem nisi est quo deleniti numquam odit, sequi non quae rem, et maxime fugiat quod laboriosam distinctio atque modi perferendis perspiciatis porro. Illo deleniti atque ipsam eius officiis nisi quasi velit molestias odio! Ab repellendus placeat rem itaque et praesentium enim ducimus quibusdam dolorum aperiam odit quam suscipit distinctio doloribus aspernatur, quas sapiente fugiat accusamus animi qui molestias. Est, voluptatem!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail

