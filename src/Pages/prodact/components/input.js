import { useState } from "react";

export const AboutPage = () => {
  const [auctions, setAuctions] = useState([
    {
      id: 1,
      startingPrice: 100,
      currentPrice: 150,
      endTime: new Date('2023-05-06T20:25:00'),
      status: 'active',
      bids: [],
    },
  ]);

  const handleBid = (auctionId, bidderName) => {
    const auction = auctions.find((auction) => auction.id === auctionId);
    if (new Date() > auction.endTime) {
      const winnerAmount = auction.bids.reduce((max, bid) => (bid.bidAmount > max ? bid.bidAmount : max), 0);
      const winner = auction.bids.find((bid) => bid.bidAmount === winnerAmount).bidder;
      const newBid = prompt(`Enter your bid for ${auction.title}:`, auction.currentPrice + 1);
      const updatedAuctions = auctions.map((auction) =>
      
        auction.id === auctionId
          ? {

              ...auction,
              status: 'closed',
              bids: [
                ...auction.bids,
                {
                  bidder: bidderName,
                  bidAmount: parseInt(newBid),
                  bidTime: new Date(),
                },
              ],
            }
          : auction
      );
      setAuctions(updatedAuctions);
      alert(`The auction is closed. The winner is ${winner} with a bid of $${winnerAmount}.`);
    } else {
      const newBid = prompt(`Enter your bid for ${auction.title}:`, auction.currentPrice + 1);

      if (newBid && parseInt(newBid) > auction.currentPrice && parseInt(newBid) >= auction.startingPrice + 50) {
        const updatedAuctions = auctions.map((auction) =>
          auction.id === auctionId
            ? {
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
              }
            : auction
        );
        setAuctions(updatedAuctions);
      } else if (newBid) {
        alert('The bid must be greater than the current bid and the minimum bid price');
      }
    }
  };

  return (
    <div>
      <h1 className="titel2">Auctions</h1>
      <ul>
        {auctions.map((auction) => (
          <li key={auction.id} className="dd">
            <p>Starting price: {auction.startingPrice}</p>
            <p>Current price: {auction.currentPrice}</p>
            <p>End time: {auction.endTime.toString()}</p>
            <p>Status: {auction.status}</p>
            <h3>Bid history:</h3>
            <ul>
              {auction.bids.map((bid, index) => (
                <li key={index}>
                  {bid.bidder} bid ${bid.bidAmount} at {bid.bidTime.toString()}
                </li>
              ))}
            </ul>
            {auction.status === 'closed' && (
              <p>Winner: {auction.bids.reduce((max, bid) => (bid.bidAmount > max ? bid.bidAmount : max), 0)}</p>
            )}
            {auction.status === 'active' && (
              <button onClick={() => handleBid(auction.id, 'John Doe')} className="input">Bid now</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};