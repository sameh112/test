import React, { useState } from 'react';
import AuctionList from '../prodact/components/input';
 const AuctionList2 = () => {
  // Initialize the list of auctions with some sample data
  const [auctions, setAuctions] = useState([
    {
      id: 1,
      startingPrice: 100,
      currentPrice: 150,
      endTime: new Date('2023-05-04T01:31:00Z'),
      status: 'active',
      bids: [
        {
          bidder: 'John Doe',
          bidAmount: 150,
          bidTime: new Date('2023-05-30T19:00:00Z'),
        },
        {
          bidder: 'Jane Smith',
          bidAmount: 125,
          bidTime: new Date('2023-05-29T18:00:00Z'),
        },
      ],
    },
   
  ]);

  // Function to handle the bidding process
  const handleBid = (auctionId, bidderName) => {
    // Find the auction with the given ID
    const auction = auctions.find((auction) => auction.id === auctionId);

    // Prompt the user to enter a new bid
    const newBid = prompt(`Enter your bid for ${auction.title}:`, auction.currentPrice + 1);

    // Ensure that the new bid is greater than the current bid and the minimum bid price
    if (newBid && parseInt(newBid) > auction.currentPrice && parseInt(newBid) >= auction.startingPrice + 50) {
      // Update the current price of the auction with the new bid
      const updatedAuctions = auctions.map((auction) => {
        if (auction.id === auctionId) {
          return {
            ...auction,
            currentPrice: parseInt(newBid),
            bids: [
              ...auction.bids,
              {
                bidder: bidderName,
                bidAmount: parseInt(newBid),
                bidTime: new Date(),
              },
            ],
          };
        } else {
          return auction;
        }
      });

      // Update the state with the updated auctions list
      setAuctions(updatedAuctions);
    } else if (newBid) {
      alert('The bid must be greater than the current bid and the minimum bid price');
    }
  };

  return (
    <div>
      <h1>Auctions</h1>
      <ul>
        {auctions.map((auction) => (
           <li key={auction.id}>
            <h2>{auction.title}</h2>
            <p>{auction.description}</p>
            <p>  Starting price: {auction.startingPrice}</p>
            <p>  Current price: {auction.currentPrice}</p>
            <p>  End time: {auction.endTime.toString()}</p>
            <p>  Status: {auction.status}</p>
            <h3>  Bid history:</h3>
            <ul>
              {auction.bids.map((bid, index) => (
                <li key={index}>
                  {bid.bidder} bid ${bid.bidAmount} at {bid.bidTime.toString()}
                </li>
              ))}
             </ul>
            {auction.status === 'closed' && (
              <p>
                Winner: {auction.bids.reduce((max, bid) => (bid.bidAmount > max ? bid.bidAmount : max), 0)}
              </p>
            )}
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuctionList2;


