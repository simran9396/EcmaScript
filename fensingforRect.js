  const fencingRect=(b,w,numberofwire,costperfeet)=>{
      const parimeter=b+w+b+w;
      const totalcost=parimeter*numberofwire*costperfeet;
      return totalcost;

  }
  console.log(` The total cost for fensing is Rs.${fencingRect(20,30,7,12)}`)