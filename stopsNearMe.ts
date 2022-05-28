import * as fs from "fs";

 /*                                                                                                                            
        +/- 0.025 of long from curr location                                                                                          
        +/- 0.008 of lat from curr location                                                                                           
        populate the static data like bus stops and schedules in next 30 min?                                                         
        */     

function stopsNearMe(lat: any, lon: any)  {
    //console.log("hi");
    
    var result = fs.readFileSync('static/stops.txt', { encoding: 'utf-8' });
    
    //arr of stops
    var stopInfo = result.split(",0,");

    var stops : string[] = [];

    //var infoEle = '';
    stopInfo.forEach(element => {
        var infoEle = element.split(",");

        //check lat and long
        if(checkLatInRange(lat, parseFloat(infoEle[4]), 0.008)){
            if(checkLongInRange(lon, parseFloat(infoEle[5]), 0.025)){
                stops.push(element); //add stop to arr
            }
        }

    });

    return stops;
}

function checkLatInRange(lat: any, lat_: any, no = 0.008){

    var diff = lat - lat_;
    if ((diff < no) && (diff > (no * -1)))
        return true;
    else
        return false;

}

function checkLongInRange(lon: any, lon_: any, no = 0.025){

    //remove -ve signs
    lon = lon * -1;
    lon_ = lon_ * -1;
    var diff = lon - lon_;
    if ((diff < no) && (diff > (no * -1)))
        return true;
    else
        return false;

}
    //console.log(result.split(",0,")[3]);
    // split based on new line -- /\r?\n/ -- not working
/*
var stopsNear = getStopsNearMe(49.183053, -123.080188);

stopsNear.forEach(element => {
    console.log(element);
});

console.log(stopsNear.length);
*/

const foo = Math.PI + Math.SQRT2;
export { stopsNearMe, foo };