'use client'      //error sayfaları client tarafında çalışır 
import React from "react";
import Link from "next/link";

function Error() {
    return ( 
        <div
        style={{
            height: "100%",
            display: "flex",
            position: "relative",
            paddingTop: 60,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
        }}>
            <h1> Opps ERROR!</h1>
            <Link href="/" >
            <a style={{textDecoration:"underline", fontSize:20, marginTop: 8 , color: "white",paddingTop:10, paddingBottom:10, }}>
            Go Home </a>
            </Link> 
        </div>
      );
}

export default Error;
