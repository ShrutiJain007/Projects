import React from 'react'

function Discover() {
    return (
        <div style={{ paddingTop: "40px", paddingLeft: "60px", paddingRight: "60px" }}>

            <div style={{ backgroundColor: " rgb(255, 32, 78)", paddingTop: "10px", paddingLeft: "20px", paddingRight: "10px", paddingBottom: "50px", borderRadius: "10px" }}>

                <h1 style={{ textAlign: "center", color: "white", fontSize: "50px", fontFamily: "poppins" }}>Discover Best Mobile Stores Near You!</h1>

                <p style={{ textAlign: "center", color: "white", fontFamily: "poppins" }}>Searching for mobile shops near you? Discover the best collection of 100+ local mobile shop dealing in <br />
                    brands like Apple, Samsung, Xiaomi & more only on Mobile Ki Dukan. Find updated store listings, offers, <br />
                    contact details, directions and customer ratings.</p>

               

                <button style={{ marginLeft: "490px", paddingLeft: "80px", paddingRight: "80px", paddingTop: "5px", paddingBottom: "5px", backgroundColor: " rgb(45, 50, 80)", color: "white", borderRadius: "5px", border: "1px solid rgb(45, 50, 80)" }}>
                    See Now</button>

            </div>

            <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "60px" }}>
                <div>
                    <span style={{ fontFamily: "poppins", fontWeight: "bold", fontSize: "20px" }}>Markals</span>&nbsp; &nbsp; &nbsp;
                    <span style={{ fontFamily: "poppins" }}>@ 2024. All rights reserved</span>
                </div>

                <div style={{ fontFamily: "poppins" }}>
                    <span>Terms</span>&nbsp; &nbsp;
                    <span>Privacy</span>&nbsp; &nbsp;
                    <span>support</span>
                </div>
            </div>


        </div>
    )
}

export default Discover