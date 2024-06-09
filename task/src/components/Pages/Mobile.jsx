import React from 'react';

function Mobile() {
    return (
        <div style={{backgroundColor:" rgb(45, 50, 80)", height:"650px"}}>
            <div  style={{display:"flex"}}>
                <div style={{padding:"90px", height:"200px"}}>
                    <h2 style={{ fontFamily: "sans-serif", color:"white" }}>Revolutionizing Mobile Accessory Market</h2>
                    <p style={{ fontFamily: "roboto, sans-serif", textAlign: "justify", color:"white" }}>
                        The mobile accessories market in India is largely unorganised and 
                        disjointed. Customers struggle with finding right fit and quality 
                        for their smartphones while making purchases. We at Mobile ki 
                        Dukan are revolutionizing this through technologu-enabled on-
                        wheel shops. 
                        Now mobilize your own mobile accesssories outlet With our e-cart 
                        vehicles rentals. 
                        We aim to bring Structures to a Fragmented Industry and improve 
                        customer experience with our Our all-in-one Eco-system which 
                        integrates demand mapping, inventory stacks customization, 
                        logistics tie-ups, and omni-channel enablement. Our Partners
                        focusing purely on sales and services while we harmonize everything
                        in the backend.</p>

                        <button className='register'>Register Your Business</button>

                </div>

                <div>
                    <img style={{width:"525px", height:"513px"}} src="./Picture/Auto.png" alt="" />
                </div>
            </div>
            <div style={{display:"flex", justifyContent:"space-around", backgroundColor:"white", borderRadius:"10px", marginLeft:"60px", marginRight:"60px"}}>
                <img style={{width:"144.66px", height:"63.73px", padding:"20px"}} src="./Picture/dainik.jpeg" alt="" />
                <img style={{width:"65.93px", height:"63.73px", padding:"20px"}} src="./Picture/fm.jpeg" alt="" />
                <img style={{width:"95.59px", height:"63.73px", padding:"20px"}} src="./Picture/IMC.jpeg" alt="" />
                <img style={{width:"159.32px", height:"63.73px", padding:"20px"}} src="./Picture/startup.jpeg" alt="" />
                <img style={{width:"95.59px", height:"63.73px", padding:"20px"}} src="./Picture/start.jpeg" alt="" />
            </div>
        </div>
    )
}

export default Mobile;