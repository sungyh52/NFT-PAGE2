import Web3 from "web3";
import Intro from "../components/Intro";
import {CONTRACT_ABI, CONTRACT_ADDRESS} from "../web3.config";
import {useEffect, useState} from "react";
import Nfts from "../components/Nfts";

const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

const Main = ({account}) => {
  const [totalNft, setTotalNft] = useState(0);
  const [mintedNft, setMintedNft] = useState(0);
  const [myNft, setMyNft] = useState(0);
  const [page, setPage] = useState(1);

  const getTotalNft = async () => {
    // 1000개를 넘어갈 수 없도록
    try {
      if (!contract) return;

      const response = await contract.methods.totalNft().call();

      console.log(response);

      setTotalNft(response);
    } catch (error) {
      console.error(error);
    }
  };

  const getMintedNft = async () => {
    try {
      if (!contract) return;

      const response = await contract.methods.mintedNft().call();

      console.log(response);

      setMintedNft(response);
      setPage(parseInt((parseInt(response) - 1) / 10) + 1);
    } catch (error) {
      console.error(error);
    }
  };

  const getMyNft = async () => {
    try {
      if (!contract || !account) return; //내가 가진 계정이 아니면 nft 안 보여주도록

      const response = await contract.methods.balanceOf(account).call();

      console.log(response);

      setMyNft(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTotalNft();
    getMintedNft();
  }, []); // 현재 상태 변화없기 때문에 dependecy X

  useEffect(() => {
    getMyNft();
  }, [account]); // 계정이 바뀔 때마다 변화

  return (
    // intro로 내려줌
    <div>
      <Intro totalNft={totalNft} mintedNft={mintedNft} myNft={myNft} />
      <Nfts page={page} />
    </div>
  );
};

export default Main;
