import React from 'react';
import './Card.css'; // Import the CSS file for the card component
import PaperCraft from "../assets/PaperCraft.jpg"; 
import ResinArt from "../assets/Resin.jpg";
import HandiCraft from "../assets/HandiCraft.jpg";
import SewingCraft from "../assets/SewingCraft.jpg";

function Card() {
  return (
    <div>
        <table>
            <tr>
                <td style={{ width: '50%' }}>
                    <div className="card">
                        <img src={PaperCraft} alt="PaperCraft Artwork" /> 
                        <div className="card-content">
                            <h2>Paper Art</h2>
                            <p>Paper art is a creative and versatile form of artistic expression that involves manipulating paper to create intricate and visually stunning designs. </p>
                            <a href="/paper_art_content" className="see-more-button"><button>See More</button></a>
                        </div>
                    </div>
                </td>
                <td style={{ width: '50%' }}>
                    <div className="card">
                        <img src={ResinArt} alt="Resin Artwork" /> 
                        <div className="card-content">
                            <h2>Resin Art</h2>
                            <p>Resin art is a captivating form of artistic expression that involves using epoxy resin as the primary medium to create stunning and unique works of art.</p>
                            <a href="/resin_art_content" className="see-more-button"><button>See More</button></a>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td style={{ width: '50%' }}>
                    <div className="card">
                        <img src={HandiCraft} alt="HandiCraft" /> 
                        <div className="card-content">
                            <h2>Handicraft</h2>
                            <p>HandiCraft as a place where traditional craftsmanship is celebrated alongside creative innovation. It highlights the fusion of heritage and contemporary artistry, inviting customers to explore a world of handmade treasures that blend time-honored techniques with modern design sensibilities.</p>
                            <a href="/handicraft_content" className="see-more-button"><button>See More</button></a>
                        </div>
                    </div>
                </td>
                <td style={{ width: '50%' }}>
                    <div className="card">
                        <img src={SewingCraft} alt="Sewing Artwork" /> 
                        <div className="card-content">
                            <h2>Sewing Craft</h2>
                            <p>Sewing Craft as a means of creating not just practical items, but also memories and emotional connections. It emphasizes the dual purpose of sewing—combining functionality with aesthetics—and suggests the personal and meaningful nature of handmade creations.</p>
                            <a href="/sewing_art_content" className="see-more-button"><button>See More</button></a>
                        </div>
                    </div>
                </td>
            </tr>
        </table>
    </div>
  );
}

export default Card;
