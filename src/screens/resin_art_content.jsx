import React from "react";
import ResinArtContent from "./ResinArtContent";
import "./resin_art_content.css";
import ResinArt01 from "../assets/ResinArt01.jpg";
import ResinArt02 from "../assets/ResinArt02.jpg";
import ResinArt03 from "../assets/ResinArt03.jpg";
import ResinArt04 from "../assets/ResinArt04.jpg";
import ResinArt05 from "../assets/ResinArt05.jpg";
import ResinArt06 from "../assets/ResinArt06.jpg";
import ResinArt07 from "../assets/ResinArt07.jpg";
import ResinArt08 from "../assets/ResinArt08.jpg";
import ResinArt09 from "../assets/ResinArt09.jpg";
import ResinArt10 from "../assets/ResinArt10.jpg";
import ResinArt11 from "../assets/ResinArt11.jpg";
import ResinArt12 from "../assets/ResinArt12.jpg";
import ResinArt13 from "../assets/ResinArt13.jpg";
import ResinArt14 from "../assets/ResinArt14.jpg";
import ResinArt15 from "../assets/ResinArt15.jpg";
import Back from "../assets/Back.png";

function ResinArtContentPage() {
    return (
        <div>
            <a href="/About"><img src={Back} style={{width: "100px"}} alt="back"/></a>
            <h1 style={{color: "brown"}}><center>Resin Art</center></h1>
            <table className="content-paper-art">
                <tr>
                    <td>
                        <ResinArtContent
                            img={ResinArt01}
                            title="Resin Art 01"
                            description="Rs.2000/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                    <td>
                        <ResinArtContent
                            img={ResinArt02}
                            title="Resin Art 02"
                            description="Rs.1750/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                    <td>
                    <ResinArtContent
                            img={ResinArt03}
                            title="Resin Art 03"
                            description="Rs.2130/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                    <ResinArtContent
                            img={ResinArt04}
                            title="Resin Art 04"
                            description="Rs.2950/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                    <td>
                    <ResinArtContent
                            img={ResinArt05}
                            title="Resin Art 05"
                            description="Rs.3050/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                    <td>
                    <ResinArtContent
                            img={ResinArt06}
                            title="Resin Art 06"
                            description="Rs.1820/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                    <ResinArtContent
                            img={ResinArt07}
                            title="Resin Art 07"
                            description="Rs.1950/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                    <td>
                    <ResinArtContent
                            img={ResinArt08}
                            title="Resin Art 08"
                            description="Rs.2320/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                    <td>
                    <ResinArtContent
                            img={ResinArt09}
                            title="Resin Art 09"
                            description="Rs.1750/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <ResinArtContent
                            img={ResinArt10}
                            title="Resin Art 10"    
                            description="Rs.2170/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                    <td>
                        <ResinArtContent
                            img={ResinArt11}
                            title="Resin Art 11"
                            description="Rs.260/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                    <td>
                        <ResinArtContent
                            img={ResinArt12}
                            title="Resin Art 12"
                            description="Rs.2250/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <ResinArtContent
                            img={ResinArt13}
                            title="Resin Art 13"
                            description="Rs.2350/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                    <td>
                        <ResinArtContent
                            img={ResinArt14}
                            title="Resin Art 14"
                            description="Rs.3140/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                    <td>
                        <ResinArtContent
                            img={ResinArt15}
                            title="Resin Art 15"
                            description="Rs.2750/="
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
