import React from "react";
import HandiCraftContent from "./HandiCraftContent"; // Corrected import statement
import "./handicraft_content.css";
import Handicraft01 from "../assets/Handicraft01.jpg"; // Corrected image paths
import Handicraft02 from "../assets/Handicraft02.jpg";
import Handicraft03 from "../assets/Handicraft03.jpg";
import Handicraft04 from "../assets/Handicraft04.jpg";
import Handicraft05 from "../assets/Handicraft05.jpg";
import Handicraft06 from "../assets/Handicraft06.jpg";
import Handicraft07 from "../assets/Handicraft07.jpg";
import Handicraft08 from "../assets/Handicraft08.jpg";
import Handicraft09 from "../assets/Handicraft09.jpg";
import Handicraft10 from "../assets/Handicraft10.jpg";
import Handicraft11 from "../assets/Handicraft11.jpg";
import Handicraft12 from "../assets/Handicraft12.jpg";
import Handicraft13 from "../assets/Handicraft13.jpg";
import Handicraft14 from "../assets/Handicraft14.jpg";
import Handicraft15 from "../assets/Handicraft15.jpg";
import Back from "../assets/Back.png";

function ResinArtContentPage() {
    return (
        <div>
            <a href="/About"><img src={Back} style={{width: "100px"}} alt="back"/></a>
            <h1 style={{color: "brown"}}><center>HandiCraft</center></h1>
            <table className="content-paper-art">
                <tr>
                    <td>
                        <HandiCraftContent
                            img={Handicraft01}
                            title="Handi Craft 01"
                            description="Rs.230/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                    <td>
                        <HandiCraftContent
                            img={Handicraft02}
                            title="Handi Craft 02"
                            description="Rs.850/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                    <td>
                        <HandiCraftContent
                            img={Handicraft03}
                            title="Handi Craft 03"
                            description="Rs.920/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <HandiCraftContent
                            img={Handicraft04}
                            title="Handi Craft 04"
                            description="Rs.650/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                    <td>
                        <HandiCraftContent
                            img={Handicraft05}
                            title="Handi Craft 05"
                            description="Rs.390/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                    <td>
                        <HandiCraftContent
                            img={Handicraft06}
                            title="Handi Craft 06"
                            description="Rs.1050/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <HandiCraftContent
                            img={Handicraft07}
                            title="Handi Craft 07"
                            description="Rs.950/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                    <td>
                        <HandiCraftContent
                            img={Handicraft08}
                            title="Handi Craft 08"
                            description="Rs.320/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                    <td>
                        <HandiCraftContent
                            img={Handicraft09}
                            title="Handi Craft 09"
                            description="Rs.750/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <HandiCraftContent
                            img={Handicraft10}
                            title="Handi Craft 10"
                            description="Rs.670/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                    <td>
                        <HandiCraftContent
                            img={Handicraft11}
                            title="Handi Craft 11"
                            description="Rs.860/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                    <td>
                        <HandiCraftContent
                            img={Handicraft12}
                            title="Handi Craft 12"
                            description="Rs.550/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <HandiCraftContent
                            img={Handicraft13}
                            title="Handi Craft 13"
                            description="Rs.250/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                    <td>
                        <HandiCraftContent
                            img={Handicraft14}
                            title="Handi Craft 14"
                            description="Rs.770/="
                            buttonText="Buy"
                            style={{ width: "100px" }} 
                        />
                    </td>
                    <td>
                        <HandiCraftContent
                            img={Handicraft15}
                            title="Handi Craft 15"
                            description="Rs.750/="
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
