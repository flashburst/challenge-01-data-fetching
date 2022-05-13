import { useState, useEffect } from "react";
import { ethers } from "ethers";
import * as DataService from "../services/data";
import { useEthers } from "@usedapp/core";

export const ChallengeUI = () => {
  const [data, setData] = useState({});
  const { account } = useEthers();

  useEffect(() => {
    const address = account || ethers.constants.AddressZero;

    const payload = {
      address,
    };

    const url = "/api/hello";

    DataService.getData(url, payload).then(setData).catch(console.error);
  }, [account]);

  return (
    <>
      <h1>Data from API</h1>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};
