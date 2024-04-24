import React from "react";
import PaperArtContent from "./PaperArtContent";
import "./paper_art_content.css";
import PaperCraft01 from "../assets/PaperCraft01.jpg";
import PaperCraft02 from "../assets/PaperCraft02.jpg";
import PaperCraft03 from "../assets/PaperCraft03.jpg";
import PaperCraft04 from "../assets/PaperCraft04.jpg";
import PaperCraft05 from "../assets/PaperCraft05.jpg";
import PaperCraft06 from "../assets/PaperCraft06.jpg";
import PaperCraft07 from "../assets/PaperCraft07.jpg";
import PaperCraft08 from "../assets/PaperCraft08.jpg";
import PaperCraft09 from "../assets/PaperCraft09.jpg";
import PaperCraft10 from "../assets/PaperCraft10.jpg";
import PaperCraft11 from "../assets/PaperCraft11.jpg";
import PaperCraft12 from "../assets/PaperCraft12.jpg";
import PaperCraft13 from "../assets/PaperCraft13.jpg";
import PaperCraft14 from "../assets/PaperCraft14.jpg";
import PaperCraft15 from "../assets/PaperCraft15.jpg";
import Back from "../assets/Back.png"

function PaperArtContentPage() {
    return (
        <div>
            <a href="/About"><img src={Back} style={{width: "100px"}} alt="back"/></a>
            <h1 style={{color: "brown"}}><center>Paper Art</center></h1>
            <table className="content-paper-art">
                <tr>
                    <td>
                        <PaperArtContent
                            img={PaperCraft01}
                            title="Paper Art 01"
                            description="Rs.200/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                    <td>
                        <PaperArtContent
                            img={PaperCraft02}
                            title="Paper Art 02"
                            description="Rs.150/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                    <td>
                        <PaperArtContent 
                            img={PaperCraft03}
                            title="Paper Art 03"
                            description="Rs.230/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <PaperArtContent
                            img={PaperCraft04}
                            title="Paper Art 04"
                            description="Rs.290/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                    <td>
                        <PaperArtContent
                            img={PaperCraft05}
                            title="Paper Art 05"
                            description="Rs.300/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                    <td>
                        <PaperArtContent
                            img={PaperCraft06}
                            title="Paper Art 06"
                            description="Rs.120/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <PaperArtContent
                            img={PaperCraft07}
                            title="Paper Art 07"
                            description="Rs.150/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                    <td>
                        <PaperArtContent
                            img={PaperCraft08}
                            title="Paper Art 08"
                            description="Rs.320/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                    <td>
                        <PaperArtContent
                            img={PaperCraft09}
                            title="Paper Art 09"
                            description="Rs.170/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <PaperArtContent
                            img={PaperCraft10}
                            title="Paper Art 10"
                            description="Rs.270/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                    <td>
                        <PaperArtContent
                            img={PaperCraft11}
                            title="Paper Art 11"
                            description="Rs.260/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                    <td>
                        <PaperArtContent
                            img={PaperCraft12}
                            title="Paper Art 12"
                            description="Rs.220/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <PaperArtContent
                            img={PaperCraft13}
                            title="Paper Art 13"
                            description="Rs.230/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                    <td>
                        <PaperArtContent
                            img={PaperCraft14}
                            title="Paper Art 14"
                            description="Rs.340/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                    <td>
                        <PaperArtContent
                            img={PaperCraft15}
                            title="Paper Art 15"
                            description="Rs.270/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default PaperArtContentPage;
