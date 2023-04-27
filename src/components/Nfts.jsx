import axios from "axios";
import {useEffect, useState} from "react";

const Nfts = ({page}) => {
  const [selectedPage, setSelectedPage] = useState(1);
  const [nfts, setNfts] = useState();

  const getNfts = async (p) => {
    try {
      let nftArray = [];

      setNfts();

      for (let i = 0; i < 10; i++) {
        const tokenId = i + 1 + (p - 1) * 10; // 1번부터 10번까지 불러오기

        let response = await axios.get(
          `https://olbm.mypinata.cloud/ipfs/QmU52T5t4bXtoUqQYStgx39DdXy3gLQq7KDuF1F9g3E9Qy/${tokenId}.json`
        );

        nftArray.push({tokenId, metadata: response.data});
      }

      setNfts(nftArray);
    } catch (error) {
      console.error(error);
    }
  };

  const pageComp = () => {
    let pageArray = [];

    for (let i = 0; i < page; i++) {
      pageArray.push(
        <button
          className={`${i !== 0 && "ml-4"} ${
            i + 1 === selectedPage ? "text-black" : "text-gray-500"
          }`}
          key={i}
          onClick={() => {
            setSelectedPage(i + 1);
          }}
        >
          {i + 1} 페이지
        </button>
      );
    }

    return pageArray;
  };

  useEffect(() => {
    //10개 가져오나 실행
    getNfts(1);
  }, []);

  useEffect(() => console.log(nfts), [nfts]);

  return (
    <div>
      <div>{pageComp()}</div>
    </div>
  );
};

export default Nfts;
