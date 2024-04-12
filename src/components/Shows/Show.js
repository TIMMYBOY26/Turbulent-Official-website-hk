import "./ShowStyles.css";
import ShowData from "./ShowData";
import show1 from "../../ShowPhoto/wanchai.jpeg";
import show2 from "../../ShowPhoto/dragon.jpeg";
import show3 from "../../ShowPhoto/tst.jpeg";


function Show() {
  return (
    <div className="show">
      <h1>Recent Shows</h1>
      <div class="showcards">
        <ShowData
          image={show3}
          redirectUrl="https://www.instagram.com/p/C4Fj0TavtCH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          heading="青年舞台@HKCC 2023/24 — 週末拉闊音樂會《Saturday Music Live》The Hong Kong Federation of Youth Groups (HKFYG) 香港青年協會 @hkfyg @hkfyg_csu"
          date="9/3/2024"
          venue="Hong Kong Cultural Centre"
          googlemap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.5810484780086!2d114.16774291154759!3d22.293854543043157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400f3b16783a7%3A0xda44b020c9d402c9!2z6aaZ5riv5paH5YyW5Lit5b-D!5e0!3m2!1szh-TW!2shk!4v1712960690207!5m2!1szh-TW!2shk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
          redirectMapUrl="https://maps.app.goo.gl/6CdTKifYCzSxa3Dm7"
          organizer="music_hotpot"
          text=""
        />

        <ShowData
          image={show2}
          redirectUrl="https://www.instagram.com/p/C3f9Q-dh4Vz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          heading="DENOSAUR 恐龍運動會"
          date="25/2/2024"
          venue="HKSC 香港兆基創意書院"
          googlemap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14762.106807935774!2d114.17673042162244!3d22.333732824106065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404072be78391fd%3A0x873032558975a24f!2z6aaZ5riv5YWG5Z-65Ym15oSP5pu46Zmi!5e0!3m2!1szh-TW!2shk!4v1712960474871!5m2!1szh-TW!2shk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
          redirectMapUrl="https://maps.app.goo.gl/dCAijnBrAghpLWJ29"
          organizer="sonicmusic.hk  denosaur.hk"
          text=""
        />
        <ShowData
          image={show1}
          redirectUrl="https://www.instagram.com/p/C2eo7dZvwSl/"
          heading="𝗦𝗵𝗮𝘇𝘇𝗮 𝗠𝘂𝘀𝗶𝗰 𝗦𝗵𝗼𝘄𝗰𝗮𝘀𝗲 #𝟭𝟯𝟯"
          date="7/2/2024"
          googlemap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.9853996736983!2d114.17156419999999!3d22.278542899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404005da39970ad%3A0xf7aad47c7594a5b6!2sTHE%20WANCH!5e0!3m2!1szh-TW!2shk!4v1712958927551!5m2!1szh-TW!2shk"
          redirectMapUrl="https://maps.app.goo.gl/Mhs1npW5rVgp5WPR6"
          organizer="theundergroundhk  wanch87"
          text="The Wanch is a historic, friendly,
              hassle-free, international and unpretentious Music Club with high
              quality service and a wide variety of free live music."
        />
      </div>
    </div>
  );
}

export default Show;
