# Challenge 01

## Problem

The real data for the connected wallet address is being overriden by the fallback data

## Requirements

- If wallet is not connected, make the request by sending `0x0000000000000000000000000000000000000000` to the API to fetch and display the fallback data
- If wallet is connected, display the data for the connected wallet address
- Create 2 solutions
  - using `.then()` and `.catch()` methods
  - using `async` and `await`
