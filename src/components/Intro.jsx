const ranNum = Math.floor(Math.random() * 1000) + 1;
const imgSrc = `https://olbm.mypinata.cloud/ipfs/Qma6p2MdD9NveE211KxYmsf9W6jyVFZ3AVA7RqSqiidHDT/${ranNum}.png`;

const Intro = ({totalNft, mintedNft, myNft}) => {
  return (
    <div className="bg-gradient-to-b from-transparent  to-red-400 pt-10 px-4">
      <div className="max-w-screen-xl mx-auto relative">
        <div className="relative w-40 h-40">
          <img className="absolute z-10 rounded-full" src={imgSrc} alt="NFT" />
          <div className="w-40 h-40 rounded-full bg-white text-gray-950 absolute top-0 z-0 flex justify-center items-center text-xs">
            Loading...
          </div>
        </div>
        <div className="py-4 text-center flex">
          <div>
            <div className="font-bold">{totalNft}</div>
            <div className="text-gray-300">총 NFT</div>
          </div>
          <div className="ml-4">
            <div className="font-bold">{mintedNft}</div>
            <div className="text-gray-300">발행된 NFT</div>
          </div>
          <div className="ml-4">
            <div className="font-bold">{myNft}</div>
            <div className="text-gray-300">내 NFT</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
