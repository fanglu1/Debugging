const storeOwners = [
  {Name: "Charles", Stores: 1 },
  {Name: "Sally", Stores: 1 },
  {Name: "Cassandra", Stores: 1 },
  {Name: "DannyShavez", Stores: 1, location: "in NM" },
];



const listNumberOfStores = function () {
    let total = 0
  for (let i = 0; i < storeOwners.length; i++) {
    total += storeOwners[i].Stores;
  }
  return total;
};
let totalLocations = listNumberOfStores();

function tellMeMyStores() {
  console.log("Hey, can you tell me how many stores you have?");
  if (totalLocations > 0) {
    console.log("Of course, we have " + totalLocations + " stores");
  }
}

function hasStore() {
  for (let i = 0; i < storeOwners.length-1; i++) {
      if (storeOwners[i].Stores > 0){
    console.log("Yes, " + storeOwners[i].Name + " has one");
  }
}
}
tellMeMyStores();
hasStore();

if (storeOwners[storeOwners.length - 1].Stores){
  console.log("Yes, " + storeOwners[storeOwners.length - 1].Name + " that lives " + storeOwners[storeOwners.length - 1].location + " owns one too.")
}