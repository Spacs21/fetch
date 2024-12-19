export default async function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500 shadow-lg py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-white ">
        <div className="text-center flex flex-col gap-4 justify-center items-center">
          <h2 className="text-5xl">Fortnite API</h2>
          <p className="text-2xl text-[#ffffffd7]">Bugungi vazifada fortnite-api'ni topib shuni yordamida bajardim, skins qismida malumotlar fetch qilingan va Detail Page bor!</p>
          <img src="https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_download_software_1/2x1_NSwitchDS_Fortnite.jpg" className="rounded-lg h-[400px] object-contain"/>
        </div>
      </div>
    </div>
  );
}
