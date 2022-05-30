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
//import { faBus } from "@fortawesome/free-solid-svg-icons";
const htt = __importStar(require("https"));
//curl --request POST --header "Content-Type: application/json" --data '{"Latitude": 49.287718, "Longitude": -123.023214 }' localhost:3003/stopsNearMe
function getStopsNearMe() {
    const data = JSON.stringify({
        Latitude: 49.287718,
        Longitude: -123.023214
    });
    const options = {
        hostname: `localhost`,
        port: 3003,
        path: `stopsNearMe`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length,
        },
    };
    const req = htt.request(options, res => {
        console.log(res.statusCode);
    });
    req.on('error', error => {
        console.error(error);
    });
    req.end();
}
function initMap() {
    navigator.geolocation.getCurrentPosition(showPosition);
    getStopsNearMe();
}
function showPosition(position) {
    const center = { lat: position.coords.latitude, lng: position.coords.longitude };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center,
    });
    /*
      const trafficLayer = new google.maps.TrafficLayer();
      trafficLayer.setMap(map);
    
      const transitLayer = new google.maps.TransitLayer();
      transitLayer.setMap(map);*/
    const faBus_ = "M288 0C422.4 0 512 35.2 512 80V128C529.7 128 544 142.3 544 160V224C544 241.7 529.7 256 512 256L512 416C512 433.7 497.7 448 480 448V480C480 497.7 465.7 512 448 512H416C398.3 512 384 497.7 384 480V448H192V480C192 497.7 177.7 512 160 512H128C110.3 512 96 497.7 96 480V448C78.33 448 64 433.7 64 416L64 256C46.33 256 32 241.7 32 224V160C32 142.3 46.33 128 64 128V80C64 35.2 153.6 0 288 0zM128 256C128 273.7 142.3 288 160 288H272V128H160C142.3 128 128 142.3 128 160V256zM304 288H416C433.7 288 448 273.7 448 256V160C448 142.3 433.7 128 416 128H304V288zM144 400C161.7 400 176 385.7 176 368C176 350.3 161.7 336 144 336C126.3 336 112 350.3 112 368C112 385.7 126.3 400 144 400zM432 400C449.7 400 464 385.7 464 368C464 350.3 449.7 336 432 336C414.3 336 400 350.3 400 368C400 385.7 414.3 400 432 400zM368 64H208C199.2 64 192 71.16 192 80C192 88.84 199.2 96 208 96H368C376.8 96 384 88.84 384 80C384 71.16 376.8 64 368 64z";
    const faBus_0 = 576;
    const faBus_1 = 512;
    //console.log(faBus.icon[1])
    // use a FontAwesome svg
    new google.maps.Marker({
        position: { lat: position.coords.latitude + 0.003, lng: position.coords.longitude + 0.007 },
        map,
        icon: {
            //path: faBus.icon[4] as string,
            path: faBus_,
            fillColor: "#0000ff",
            fillOpacity: 1,
            anchor: new google.maps.Point(
            //faBus.icon[0] / 2, // width
            //faBus.icon[1] // height
            faBus_0 / 2, // width
            faBus_1 // height
            ),
            strokeWeight: 1,
            strokeColor: "#ffffff",
            scale: 0.035,
        },
        title: "FontAwesome SVG Marker",
    });
    const contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
        '<div id="bodyContent">' +
        "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
        "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
        "south west of the nearest large town, Alice Springs; 450&#160;km " +
        "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
        "Heritage Site.</p>" +
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
        "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
        "(last visited June 22, 2009).</p>" +
        "</div>" +
        "</div>";
    //info win on marker
    const infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 200,
    });
    // use a Material Icon as font
    const marker = new google.maps.Marker({
        //position: { lat: 36.6163, lng: -100.6 },
        position: { lat: position.coords.latitude + 0.003, lng: position.coords.longitude + 0.002 },
        map,
        label: {
            text: "\ue530",
            fontFamily: "Material Icons",
            color: "#ffffff",
            fontSize: "12px",
        },
        title: "Stop# 123678",
    });
    marker.addListener("click", () => {
        infowindow.open({
            anchor: marker,
            map,
            shouldFocus: false,
        });
    });
    //console.log(foo);
    /*
        var stopsNear = stopsNearMe(49.183053, -123.080188);
    
        stopsNear.forEach(element => {
        console.log(element);
    });
    
    console.log(stopsNear.length);*/
    //getInfo();
}
window.initMap = initMap;
