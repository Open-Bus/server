"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.foo = exports.stopsNearMe = void 0;
const fs = __importStar(require("fs"));
/*
       +/- 0.025 of long from curr location
       +/- 0.008 of lat from curr location
       populate the static data like bus stops and schedules in next 30 min?
       */
function stopsNearMe(lat, lon) {
    //console.log("hi");
    var result = fs.readFileSync('static/stops.txt', { encoding: 'utf-8' });
    //arr of stops
    var stopInfo = result.split(",0,");
    var stops = [];
    //var infoEle = '';
    stopInfo.forEach(element => {
        var infoEle = element.split(",");
        //check lat and long
        if (checkLatInRange(lat, parseFloat(infoEle[4]), 0.008)) {
            if (checkLongInRange(lon, parseFloat(infoEle[5]), 0.025)) {
                stops.push(element); //add stop to arr
            }
        }
    });
    return stops;
}
exports.stopsNearMe = stopsNearMe;
function checkLatInRange(lat, lat_, no = 0.008) {
    var diff = lat - lat_;
    if ((diff < no) && (diff > (no * -1)))
        return true;
    else
        return false;
}
function checkLongInRange(lon, lon_, no = 0.025) {
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
exports.foo = foo;
