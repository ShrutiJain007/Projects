import React from 'react'
function Cards() {
    return (
        <div >
            {/* featured stores  */}
            <div style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)", width: "300px", fontFamily: "sans-serif", marginBottom: "70px" }}>
                <img style={{ width: "300px", height: "200px" }} src="./Picture/photo.png" alt="" />
                <div style={{ padding: "10px" }}>
                    <h3>Rajesh Mobile Pal Road</h3>
                    <img style={{ width: "15px", height: "15px" }} src="https://cdn-icons-png.flaticon.com/128/3177/3177361.png" alt="" />
                    <span>Rajesh Mobile Pal R...</span>
                    <p>Contact Now +91 -70732-xxxxx </p>
                </div>
            </div>


        </div>

    )
}

export default Cards