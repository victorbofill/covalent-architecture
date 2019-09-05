function importAll(r) {
  return r.keys().map(r);
}

const washougal = importAll(require.context('./civic/City of Washougal City Hall Renovation', false, /\.(png|jpe?g|svg)$/));

const foodHall = importAll(require.context('./commercial/Camas Food Hall', false, /\.(png|jpe?g|svg)$/));
const creativeOfficeSpace = importAll(require.context('./commercial/Creative Office Space', false, /\.(png|jpe?g|svg)$/));
const momentumBlock = importAll(require.context('./commercial/Momentum Block', false, /\.(png|jpe?g|svg)$/));

const hobiesRidge = importAll(require.context('./homes/Hobie\'s Ridge', false, /\.(png|jpe?g|svg)$/));
const nakshatra = importAll(require.context('./homes/Nakshatra', false, /\.(png|jpe?g|svg)$/));

const camasStorage = importAll(require.context('./industrial/Camas Storage', false, /\.(png|jpe?g|svg)$/));
const columbiaRock = importAll(require.context('./industrial/Columbia Rock', false, /\.(png|jpe?g|svg)$/));

const suitesAndWalkups = importAll(require.context('./residential/Executive Suites and Walkups', false, /\.(png|jpe?g|svg)$/));
const hetherwood = importAll(require.context('./residential/Hetherwood', false, /\.(png|jpe?g|svg)$/));

export default {
  civic: { washougal: washougal },
  commercial: { foodHall: foodHall, creativeOfficeSpace: creativeOfficeSpace, momentumBlock: momentumBlock },
  homes: { hobiesRidge: hobiesRidge, nakshatra: nakshatra },
  industrial: { camasStorage: camasStorage, columbiaRock: columbiaRock },
  residential: { suitesAndWalkups: suitesAndWalkups, hetherwood: hetherwood },
};
