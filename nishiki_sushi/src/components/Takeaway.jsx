import React, { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import { IoIosSearch } from "react-icons/io";
import { BsBasket3Fill } from "react-icons/bs";
import { TiArrowUnsorted } from "react-icons/ti";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import useWindowDimensions from "./screenResize_hook";
import MobileNav from "./MobileNavBar";

let sushiData;
await fetchSushiData();
async function fetchSushiData() {
  const restSushi = await fetch(
    "https://kea21s-6eb0.restdb.io/rest/nishiki-sushi-products?fetchchildren=true",
    { headers: { "x-apikey": "606d606af55350043100752e" } }
  );
  const dataSushi = await restSushi.json();
  sushiData = dataSushi;
  /* console.log(sushiData); */
}

console.log(sushiData);

function Takeaway() {
  const [searchTerm, setsearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const [visible, setVisible] = useState(true);
  const screenSize = useWindowDimensions();

  const onChangeSearch = () => {
    setVisible(!visible);
  };

  return (
    <>
      <img
        className="hero_img hide_when_off_phone"
        src="../../img/hero_img/takeaway_hero_mobile.png"
        alt="takeaway"
      />

      <div className="takeaway_container">
        {screenSize.width > 799 && <BurgerMenu page={"takeaway"} />}
        {screenSize.width < 799 && <MobileNav page={"takeaway"} />}
        <img
          src="../icons/logo.svg"
          alt="The logo icon."
          className="header_logo"
        />
        <img
          className="hero_img hide_when_on_phone"
          src="../../img/hero_img/takeaway_hero.png"
          alt="takeaway"
        />
        <div className="takeaway_headline">
          <h1>
            <b>Take</b>Away
          </h1>
          <div className={`hidden ${visible ? "hidden" : "show"} sorter_pris`}>
            <p>
              Sorter Pris <TiArrowUnsorted className="hw20_icon" />
            </p>
          </div>
        </div>
        <div className="search_container">
          <IoIosSearch className="hw20_icon" />
          <input
            type="text"
            placeholder="Søg efter sushi eller ingredienser"
            onChange={(event) => {
              setsearchTerm(event.target.value);
              if (searchTerm.length < 1) {
                onChangeSearch();
              }
            }}
          ></input>
        </div>
        <div className={`hidden ${visible ? "show" : ""} kategorier_container`}>
          <h2>Kategorier</h2>
          <div className="kategorier">
            <div
              className="kategorie manedens_tilbud"
              onClick={() => {
                setFilterTerm("Månedsens tilbud");
                if (visible === true) {
                  setVisible(!visible);
                }
              }}
            >
              <img
                src="../../img/kategorier_billeder/manedenstilbud.png"
                alt="månedens_tilbud"
              />
              <h3>Månedens tilbud</h3>
            </div>
            <div
              className="kategorie sushi_menu"
              onClick={() => {
                setFilterTerm("Sushi menu");
              }}
            >
              <img
                src="../../img/kategorier_billeder/sushimenu.png"
                alt="sushi_menu"
              />
              <h3>Sushi Menu</h3>
            </div>
            <div
              className="kategorie forret"
              onClick={() => {
                setFilterTerm("Forret");
              }}
            >
              <img
                src="../../img/kategorier_billeder/forret.png"
                alt="forret"
              />
              <h3>Forret</h3>
            </div>
            <div
              className="kategorie yakitori_sticks"
              onClick={() => {
                setFilterTerm("Yakitori Sticks");
              }}
            >
              <img
                src="../../img/kategorier_billeder/yakitori_sticks.png"
                alt="yakitori_sticks"
              />
              <h3>Yakitori Sticks</h3>
            </div>
            <div
              className="kategorie nigiri"
              onClick={() => {
                setFilterTerm("Nigiri");
              }}
            >
              <img
                src="../../img/kategorier_billeder/nigiri.png"
                alt="nigiri"
              />
              <h3>Nigiri 2stk</h3>
            </div>
            <div
              className="kategorie hosomaki"
              onClick={() => {
                setFilterTerm("Hosomaki");
              }}
            >
              <img
                src="../../img/kategorier_billeder/hosomaki.png"
                alt="hosomaki"
              />
              <h3>Hosomaki 8stk</h3>
            </div>
            <div
              className="kategorie futomaki"
              onClick={() => {
                setFilterTerm("Futomaki");
              }}
            >
              <img
                src="../../img/kategorier_billeder/futomaki.png"
                alt="futomaki"
              />
              <h3>Futomaki 5stk</h3>
            </div>
            <div
              className="kategorie sashimi"
              onClick={() => {
                setFilterTerm("Sashimi");
              }}
            >
              <img
                src="../../img/kategorier_billeder/sashimi.png"
                alt="sashimi"
              />
              <h3>Sashimi</h3>
            </div>
            <div
              className="kategorie rispapir"
              onClick={() => {
                setFilterTerm("Rispapir");
              }}
            >
              <img
                src="../../img/kategorier_billeder/rispapir.png"
                alt="rispapir"
              />
              <h3>Rispapir 6stk</h3>
            </div>
            <div
              className="kategorie uramaki"
              onClick={() => {
                setFilterTerm("Uramaki");
              }}
            >
              <img
                src="../../img/kategorier_billeder/uramaki.png"
                alt="uramaki"
              />
              <h3>Uramaki 8stk</h3>
            </div>
            <div
              className="kategorie kaburimaki"
              onClick={() => {
                setFilterTerm("Kaburimaki");
              }}
            >
              <img
                src="../../img/kategorier_billeder/kaburimaki.png"
                alt="kaburimaki"
              />
              <h3>Kaburimaki 8stk</h3>
            </div>
            <div
              className="kategorie dip"
              onClick={() => {
                setFilterTerm("Dip");
              }}
            >
              <img src="../../img/kategorier_billeder/dip.png" alt="dip" />
              <h3>Dip</h3>
            </div>
          </div>
        </div>
        <h2 className={`hidden ${visible ? "hidden" : "show"}`}>
          {} Resultater for "{searchTerm}"
        </h2>
        <div className="result_container">
          {sushiData
            .filter((val) => {
              if (searchTerm === "") {
                if (visible === false) {
                  setVisible(!visible);
                }
                return null;
              } else if (
                val.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              } else if (
                val.ingrediant_list
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return val;
              } else if (searchTerm === "alle") {
                return val;
              }
            })
            .map((val, key) => {
              return (
                <>
                  <div className="item">
                    <div className="in_basket_number_container">
                      <p className="in_basket_number">0</p>
                    </div>
                    <img
                      src={
                        "https://rikkeblom.com/nishiki_sushi-images/" +
                        val.img_filename
                      }
                      alt="sushi_img"
                    />

                    <h4 key={val.name}>
                      {val.name + " "}
                      {val.pieces_count}
                    </h4>

                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        flexDirection: "row",
                        gap: "5px",
                        width: "inherit",
                      }}
                    >
                      {val.ingrediants.map((ingVal) => {
                        return (
                          <p
                            style={{ width: "max-content", margin: "0" }}
                            key={ingVal.name}
                          >
                            {ingVal.name},
                          </p>
                        );
                      })}
                    </div>
                    <br />
                    <div style={{ display: "inline-flex" }}>
                      <p className="remove_1rem">Pris:</p>
                      <p className="discount remove_1rem" key={val.discount}>
                        {val.discount}kr
                      </p>
                      <p className="remove_1rem" key={val.price}>
                        {val.price}kr
                      </p>
                    </div>

                    <div className="basket_icons">
                      <div className="remove_from_basket">
                        <BsBasket3Fill className="hw40_icon" />
                      </div>
                      <div className="add_to_basket">
                        <BsBasket3Fill className="hw40_icon" />
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
        <div
          className={`hidden ${
            visible ? "show" : ""
          } chosen_kategorie_container`}
        >
          <button className="secondaryBtn">
            <MdOutlineKeyboardBackspace className="hw20_icon" />
            Kategorier
          </button>
          <div className="search_container">
            <IoIosSearch className="hw20_icon" />
            <input
              type="text"
              placeholder="Søg efter sushi eller ingredienser"
            ></input>
          </div>
          <h2>Name of Kategorie </h2>
          <div className="result_container">
            {sushiData
              .filter((val) => {
                if (val.category.includes(filterTerm)) {
                  return val;
                }
              })

              .map((val, key) => {
                return (
                  <>
                    <div className="item">
                      <div className="in_basket_number_container">
                        <p className="in_basket_number">0</p>
                      </div>
                      <img
                        src={
                          "https://rikkeblom.com/nishiki_sushi-images/" +
                          val.img_filename
                        }
                        alt="sushi_img"
                      />

                      <h4 key={val.name}>
                        {val.name + " "}
                        {val.pieces_count}
                      </h4>

                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          flexDirection: "row",
                          gap: "5px",
                          width: "inherit",
                        }}
                      >
                        {val.ingrediants.map((ingVal) => {
                          return (
                            <p
                              style={{ width: "max-content", margin: "0" }}
                              key={ingVal.name}
                            >
                              {ingVal.name},
                            </p>
                          );
                        })}
                      </div>
                      <br />
                      <div style={{ display: "inline-flex" }}>
                        <p className="remove_1rem">Pris:</p>
                        <p className="discount remove_1rem" key={val.discount}>
                          {val.discount}kr
                        </p>
                        <p className="remove_1rem" key={val.price}>
                          {val.price}kr
                        </p>
                      </div>

                      <div className="basket_icons">
                        <div className="remove_from_basket">
                          <BsBasket3Fill className="hw40_icon" />
                        </div>
                        <div className="add_to_basket">
                          <BsBasket3Fill className="hw40_icon" />
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Takeaway;
