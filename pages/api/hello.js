// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { ethers } from "ethers";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "500kb",
    },
  },
};

export default async function handler(req, res) {
  const { method, body } = req;

  if (!body || !body.address) {
    res.status(400).end(`Bad Request: should contain address`);
    return;
  }

  if (method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${method} Not Allowed`);
    return;
  }

  if (body.address === ethers.constants.AddressZero) {
    await delay(2000);
    res
      .status(200)
      .json({ message: `Fallback data for ${ethers.constants.AddressZero}` });
    return;
  }

  res.status(200).json({ message: `Realtime data for ${body.address}` });
}

const delay = (timeout) =>
  new Promise((resolve) => setTimeout(resolve, timeout));
