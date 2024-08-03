import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, onEatSushi }) {
  const [sushiIndex, setSushiIndex] = useState(0);

  //console.log(sushis);

  const fourSushis = sushis
    .slice(sushiIndex, sushiIndex + 4)
    .map(sushi => <Sushi key={sushi.id} sushi={sushi} eatSushi={onEatSushi}/>);

  // console.log(fourSushis);
  // console.log(sushiIndex);

  function handleClickMore() {
    if (sushiIndex < 96) {
      setSushiIndex(sushiIndex + 4);
    } else {
      setSushiIndex(0);
    }
  }

  return (
    <div className="belt">
      {fourSushis}
      <MoreButton onClickMore={handleClickMore} />
    </div>
  );
}

export default SushiContainer;
