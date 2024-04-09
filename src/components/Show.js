import "./ShowStyles.css";
import ShowData from "./ShowData";
import show1 from "../journey/wanchai.jpeg";
import show2 from "../journey/tst.jpeg";
import show3 from "../journey/show3.jpeg";

function Show() {
  return (
    <div className="show">
      <h1>Recent Shows</h1>
      <p>Check out our recent shows.</p>
      <div className="showcards">
        <ShowData
          image={show1}
          heading="Show in The Wanch"
          text="The Wanch is a historic, friendly,
        hassle-free, international and unpretentious Music Club with high
        quality service and a wide variety of free live music."
        />

        <ShowData
          image={show2}
          heading="Show in Hong Kong Cultural Centre"
          text="The Wanch is a historic, friendly,
        hassle-free, international and unpretentious Music Club with high
        quality service and a wide variety of free live music."
        />

        <ShowData
          image={show3}
          heading="Show in HKSC"
          text="The Wanch is a historic, friendly,
        hassle-free, international and unpretentious Music Club with high
        quality service and a wide variety of free live music."
        />
      </div>
    </div>
  );
}

export default Show;
