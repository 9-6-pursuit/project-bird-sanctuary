
export default function Cart({birdCart}){
    const birds = birdCart.map(bird => {
        return (
        <div key={bird.id}>
            <ol>{bird.name}</ol>
            <h4>{bird.amount}</h4>
        </div>
        )
    })

    // const extras = extraItems.map((item) => {
    //     return (
    //       <div key={item.id}>
    //         <ol>{item.name}</ol>
    //         <h4>{item.amount}</h4>
    //       </div>
    //     );
    //   });
    
    const total = birdCart.reduce((acc, bird) => acc + bird.amount, 0);
    const discount = birdCart.length >= 3 ? 10 : 0;
    const totalWithDiscount = total * (1 - discount / 100);

    return (
      <div className="Cart">
        {birds}
        <h4>{totalWithDiscount.toFixed(2)}</h4>
      </div>
    );
  }
