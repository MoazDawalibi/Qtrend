'use client'
import React, { useEffect, useState } from 'react'

import { ReactInternetSpeedMeter } from 'react-internet-meter'
import { toast } from 'react-toastify';
// import 'react-internet-speed-meter/dist/index.css'

const CheckInternetComponent = () => {
    var showResults = function showResults(startTime, endTime) {
        var duration = (endTime - startTime) / 1000;
        var bitsLoaded = "4200" * 8;
        var speedBps = (bitsLoaded / duration).toFixed(2);
        var speedKbps = (speedBps / 1024).toFixed(2);
        var speedMbps = (speedKbps / 1024).toFixed(2);


        if(speedMbps < 1){
            toast.warn("Your Connect Is Too Slow. The Website May Take A long Time ", {
                position: toast.POSITION.BOTTOM_CENTER,
                toastClassName: 'custom-toast', // Add a custom class for the toast element
                style: {
                  zIndex: "99999999999999999999", // Set the desired z-index
                },
              });
        }
        console.log(speedMbps);
      };

    var MeasureConnectionSpeed = function MeasureConnectionSpeed() {
        var startTime, endTime;
        var download = new Image();
        startTime = new Date().getTime();
        var cacheBuster = '?nnn=' + startTime;
        download.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s" + cacheBuster;
    
        download.onload = function (d) {
          endTime = new Date().getTime();
          console.log(startTime, endTime);
          showResults(startTime , endTime)
        };


      };

    useEffect(()=>{
        MeasureConnectionSpeed()
    },[])
 


    return ""
}

export default CheckInternetComponent
