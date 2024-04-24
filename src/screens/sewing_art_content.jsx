import React from "react";
import SewingArttContent from "./SewingArtContent"; // Corrected import statement
import "./sewing_art_content.css";
import SewingArt01 from "../assets/SewingArt01.jpg"; 
import SewingArt02 from "../assets/SewingArt02.jpg"; 
import SewingArt03 from "../assets/SewingArt03.jpg"; 
import SewingArt04 from "../assets/SewingArt04.jpg";
import SewingArt05 from "../assets/SewingArt05.jpg"; 
import SewingArt06 from "../assets/SewingArt06.jpg";
import SewingArt07 from "../assets/SewingArt07.jpg"; 
import SewingArt08 from "../assets/SewingArt08.jpg";
import SewingArt09 from "../assets/SewingArt09.jpg"; 
import SewingArt10 from "../assets/SewingArt10.jpg";
import SewingArt11 from "../assets/SewingArt11.jpg"; 
import SewingArt12 from "../assets/SewingArt12.jpg"; 
import SewingArt13 from "../assets/SewingArt13.jpg"; 
import SewingArt14 from "../assets/SewingArt14.jpg";
import SewingArt15 from "../assets/SewingArt15.jpg";
import Back from "../assets/Back.png";

function ResinArtContentPage() {
    return (
        <div>
            <a href="/About"><img src={Back} style={{width: "100px"}} alt="back"/></a>
            <h1 style={{color: "brown"}}><center>Sewing Art</center></h1>
            <table className="content-paper-art">
                <tr>
                    <td>
                        <SewingArttContent
                            img={SewingArt01}
                            title="Sewing Art 01"
                            description="Rs.230/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                    <td>
                        <SewingArttContent
                            img={SewingArt02}
                            title="Sewing Art 02"
                            description="Rs.850/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                    <td>
                        <SewingArttContent
                            img={SewingArt03}
                            title="Sewing Art 03"
                            description="Rs.920/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <SewingArttContent
                            img={SewingArt04}
                            title="Sewing Art 04"
                            description="Rs.630/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                    <td>
                        <SewingArttContent
                            img={SewingArt05}
                            title="Sewing Art 05"
                            description="Rs.800/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                    <td>
                        <SewingArttContent
                            img={SewingArt06}
                            title="Sewing Art 06"
                            description="Rs.750/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <SewingArttContent
                            img={SewingArt07}
                            title="Sewing Art 07"
                            description="Rs.1230/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                    <td>
                        <SewingArttContent
                            img={SewingArt08}
                            title="Sewing Art 08"
                            description="Rs.1340/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                    <td>
                        <SewingArttContent
                            img={SewingArt09}
                            title="Sewing Art 09"
                            description="Rs.480/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <SewingArttContent
                            img={SewingArt10}
                            title="Sewing Art 10"
                            description="Rs.780/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                    <td>
                        <SewingArttContent
                            img={SewingArt11}
                            title="Sewing Art 11"
                            description="Rs.650/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                    <td>
                        <SewingArttContent
                            img={SewingArt12}
                            title="Sewing Art 12"
                            description="Rs.820/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <SewingArttContent
                            img={SewingArt13}
                            title="Sewing Art 13"
                            description="Rs.1230/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                    <td>
                        <SewingArttContent
                            img={SewingArt14}
                            title="Sewing Art 14"
                            description="Rs.800/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                    <td>
                        <SewingArttContent
                            img={SewingArt15}
                            title="Sewing Art 15"
                            description="Rs.820/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default ResinArtContentPage;
