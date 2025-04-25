const fs = require('fs');
const path = require('path');

const getLiveEvents = ()=>{
    const filePath = path.join(__dirname,'../data/liveEvents.json');
    const data = fs.readFileSync(filePath,'utf8');
    const parsedData = JSON.parse(data);
    return parsedData.liveEvents;
};

module.exports = { getLiveEvents }; 