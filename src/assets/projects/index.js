function importAll(r) {
  return r.keys().map(r);
}

const camas = importAll(require.context('./civic/camas', false, /\.(png|jpe?g|svg)$/));
const food = importAll(require.context('./commercial/food', false, /\.(png|jpe?g|svg)$/));
const momentum = importAll(require.context('./commercial/momentum', false, /\.(png|jpe?g|svg)$/));
const office = importAll(require.context('./commercial/office', false, /\.(png|jpe?g|svg)$/));
const storage = importAll(require.context('./industrial/storage', false, /\.(png|jpe?g|svg)$/));
const byebee = importAll(require.context('./planning/byebee', false, /\.(png|jpe?g|svg)$/));
const dawson = importAll(require.context('./residential/dawson', false, /\.(png|jpe?g|svg)$/));
const hetherwood = importAll(require.context('./residential/hetherwood', false, /\.(png|jpe?g|svg)$/));

export default {
  civic: { camas: camas },
  commercial: { food: food, momentum: momentum, office: office },
  industrial: { storage: storage },
  planning: { byebee: byebee },
  residential: { dawson: dawson, hetherwood: hetherwood },
};
