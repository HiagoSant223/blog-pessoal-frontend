function Grid() {
  return (
    <div className="grid grid-cols-12">
      <div className="bg-red-300 col-span-2">
        Container 1 - Servidores
      </div>

      <div className="bg-green-300 col-span-3">
        Container 2 - Canais
        </div>

      <div className="bg-yellow-300 col-span-4">
        Container 3 - Feed
        </div>

      <div className="bg-black text-white col-span-3">
        Container 4 - Membros
      </div>
    </div>
  )
}

export default Grid
