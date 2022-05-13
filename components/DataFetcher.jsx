import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { useEthers } from '@usedapp/core';

// small case for first letter since this is not a component
import * as dataService from '../services/data';

export const ChallengeUI = () => {
  const [data, setData] = useState({});
  const { account } = useEthers();

  useEffect(() => {
    const address = account || ethers.constants.AddressZero;

    dataService
      .getData('/api/hello', { address })
      .then(setData)
      .catch((e) => {
        // rethrowed error can be catched here
        console.log(e);

        // notifyError(e.message)
      });
  }, [account]);

  return (
    <>
      <h1>Data from API</h1>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};
