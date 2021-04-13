import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import OriginStat from "./components/OriginStat/OriginStat";
import OriginsInfo from "./components/OriginsInfo/OriginsInfo";

function App() {
  const [charName, setCharName] = useState("John The Large Proportioned");

  return (
    <div className="App">
      <header>
    <h1>Rogue Trader</h1>
    <OriginsInfo>
      <OriginStat
          title={"Character Name"}
          value={charName}
          onChange={(event) => setCharName(event.target.value)}
      />
      <OriginStat title={"Player Name"} value={"John Smallbody"}/>
    </OriginsInfo>
    <div className="origins-info">
      <div className="origins-left">
        <div className="category">
          <p><strong>Home World</strong></p>
        </div>
        <div className="blank"></div>
      </div>
      <div className="origins-right">
        <div className="category">
          <p><strong>Gender</strong></p>
        </div>
        <div className="blank"></div>
        <div className="category">
          <p><strong>Age</strong></p></div>
        <div className="blank" id="age"></div>
        <div className="category"><p><strong>Build</strong></p>
        </div>
        <div className="blank"></div>
      </div>
    </div>
    <div className="origins-info">
      <div className="origins-left">
        <div className="category">
          <p><strong>Background</strong></p>
        </div>
        <div className="blank"></div>
      </div>
      <div className="origins-right">
        <div className="category">
          <p><strong>Complexion</strong></p>
        </div>
        <div className="blank"></div>
        <div className="category">
          <p><strong>Hair</strong></p>
        </div>
        <div className="blank"></div>
      </div>
    </div>
    <div className="origins-info">
      <div className="origins-left">
        <div className="category">
          <p><strong>Career</strong></p>
        </div>
        <div className="blank"></div>
      </div>
      <div className="origins-right">
        <div className="category">
          <p><strong>Quirks</strong></p>
        </div>
        <div className="blank"></div>
      </div>
    </div>
    <div className="origins-info">
      <div className="origins-left">
        <div className="category">
          <p><strong>Elite Advances</strong></p>
        </div>
        <div className="blank"></div>
      </div>
      <div className="origins-right">
        <div className="category">
          <p><strong>Superstition</strong></p>
        </div>
        <div className="blank"></div>
      </div>
    </div>
    <div className="origins-info">
      <div className="origins-left">
        <div className="category">
          <p><strong>Vile Pleasures</strong></p>
        </div>
        <div className="blank"></div>
      </div>
      <div className="origins-right">
        <div className="category">
          <p><strong>Mementos</strong></p>
        </div>
        <div className="blank"></div>
      </div>
    </div>
    <div className="origins-info">
      <div className="origins-left">
        <div className="category"></div>
        <div className="blank"></div>
      </div>
      <div className="origins-right">
        <div className="category">
          <p><strong>Allies</strong></p>
        </div>
        <div className="blank"></div>
      </div>
    </div>
    <div className="origins-info">
      <div className="origins-left">
        <div className="blank"></div>
      </div>
      <div className="origins-right">
        <div className="category">
          <p><strong>Enemies</strong></p>
        </div>
        <div className="blank"></div>
      </div>
    </div>
  </header>
  <body>
    <h2>Characteristics</h2>
    <section className="characteristics">
        {/*an additional bubble for failed Malignancy (She Who Thirsts)*/}
        {/*first half of characteristics*/}
        <div className="xyz">
          <p>Weapon Skill (WS)</p>
          <div className="char_box">
            <div className="char_bonus"></div>
            <div className="char_units"></div>
          </div>
          <div className="advances">
            <span className="advance_circle"></span>
            <span className="advance_circle"></span>
            <span className="advance_circle"></span>
            <span className="advance_circle"></span>
            <span className="advance_circle"></span>
            <p className="advance_text">Adv.</p>
          </div>
          <div className="modifiers"></div>
        </div>
        <div className="xyz">
          <p>Ballistic Skill (BS)</p>
          <div className="char_box">
            <div className="char_bonus"></div>
            <div className="char_units"></div>
          </div>
          <div className="advances">
            <span className="advance_circle"></span>
            <span className="advance_circle"></span>
            <span className="advance_circle"></span>
            <span className="advance_circle"></span>
            <span className="advance_circle"></span>
            <p className="advance_text">Adv.</p>
          </div>
          <div className="modifiers"></div>
        </div>
        <div className="xyz">
          <p>Strength (S)</p>
          <div className="char_box">
            <div className="char_bonus"></div>
            <div className="char_units"></div>
          </div>
          <div className="advances">
            <span className="advance_circle"></span>
            <span className="advance_circle"></span>
            <span className="advance_circle"></span>
            <span className="advance_circle"></span>
            <span className="advance_circle"></span>
            <p className="advance_text">Adv.</p>
          </div>
          <div className="modifiers"></div>
        </div>
        <div className="xyz">
          <p>Toughness (T)</p>
          <div className="char_box">
            <div className="char_bonus"></div>
            <div className="char_units"></div>
          </div>
          <div className="advances">
            <span className="advance_circle"></span>
            <span className="advance_circle"></span>
            <span className="advance_circle"></span>
            <span className="advance_circle"></span>
            <span className="advance_circle"></span>
            <p className="advance_text">Adv.</p>
          </div>
          <div className="modifiers"></div>
        </div>
        <div className="xyz">
          <p>Agility (Ag)</p>
          <div className="char_box">
            <div className="char_bonus"></div>
            <div className="char_units"></div>
          </div>
          <div className="advances">
            <span className="advance_circle"></span>
            <span className="advance_circle"></span>
            <span className="advance_circle"></span>
            <span className="advance_circle"></span>
            <span className="advance_circle"></span>
            <p className="advance_text">Adv.</p>
          </div>
          <div className="modifiers"></div>
        </div>
        {/*second half of characteristics*/}
        <div className="xyz">
          <p>Intelligence (Int)</p>
          <div className="char_box">
            <div className="char_bonus"></div>
            <div className="char_units"></div>
          </div>
          <div className="advances">
            <span className="advance_circle"></span>
            <span className="advance_circle"></span>
            <span className="advance_circle"></span>
            <span className="advance_circle"></span>
            <span className="advance_circle"></span>
            <p className="advance_text">Adv.</p>
          </div>
          <div className="modifiers"></div>
        </div>
        <div className="xyz">
          <p>Perception (Per)</p>
          <div className="char_box">
            <div className="char_bonus"></div>
            <div className="char_units"></div>
          </div>
          <div className="advances">
            <span className="advance_circle"></span>
            <span className="advance_circle"></span>
            <span className="advance_circle"></span>
            <span className="advance_circle"></span>
            <span className="advance_circle"></span>
            <p className="advance_text">Adv.</p>
          </div>
          <div className="modifiers"></div>
        </div>
        <div className="xyz">
          <p>Willpower (WP)</p>
          <div className="char_box">
            <div className="char_bonus"></div>
            <div className="char_units"></div>
          </div>
          <div className="advances">
            <span className="advance_circle"></span>
            <span className="advance_circle"></span>
            <span className="advance_circle"></span>
            <span className="advance_circle"></span>
            <span className="advance_circle"></span>
            <p className="advance_text">Adv.</p>
          </div>
          <div className="modifiers"></div>
        </div>
        <div className="xyz">
          <p>Fellowship (Fel)</p>
          <div className="char_box">
            <div className="char_bonus"></div>
            <div className="char_units"></div>
          </div>
          <div className="advances">
            <span className="advance_circle"></span>
            <span className="advance_circle"></span>
            <span className="advance_circle"></span>
            <span className="advance_circle"></span>
            <span className="advance_circle"></span>
            <p className="advance_text">Adv.</p>
          </div>
          <div className="modifiers"></div>
        </div>
        {/*either solve this, or put everything on one line*/}
        <div className="xyz">
          <p>Corruption</p>
          <div className="char_box">
            <div className="char_bonus"></div>
            <div className="char_units"></div>
          </div>
          <div className="advances">
            <p>Fate</p>
          </div>
          <div id="fate_total">
            {/*<p>Total</p>*/}
          </div>
          <div id="fate_current">
            {/*<p>Current</p>*/}
          </div>
        </div>
    </section>
    <h2>Skills</h2>
    <section className="skills">
        {/*first half of skills*/}
        <p>Acrobatics (Ag)</p>
        <p>Athletics (S)</p>
        <p>Awareness (Per)</p>
        <p>Charm (Fel)</p>
        <p>Command (Fel)</p>
        <p>Commerce (Int)</p>
        {/*subskill, do not add checkboxes!*/}
        <p>Common Lore (Int)</p>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <p>Deceive (Fel)</p>
        <p>Dodge (Ag)</p>
        {/*subskill, do not add checkboxes!*/}
        <p>Forbidden Lore (Int)</p>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <p>Inquiry (Fel)</p>
        <p>Interrogation (WP)</p>
        <p>Intimidate (S)</p>
        {/*subskill, do not add checkboxes!*/}
        <p>Linguistics (Int)</p>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <p>Logic (Int)</p>
        {/*second half of skills*/}
        <p>Medicae (Int)</p>
        <p>Navigate (Stellar) (Int)</p>
        <p>Navigate (Surface) (Int)</p>
        <p>Navigate (Warp) (Int)</p>
        <p>Navigate (Webway) (Int)</p>
        <p>Operate (Aeronautica) (Ag)</p>
        <p>Operate (Personal) (Ag)</p>
        <p>Operate (Surface) (Ag)</p>
        <p>Operate (Voidship) (Ag)</p>
        <p>Parry (WS)</p>
        <p>Psyniscience (Per)</p>
        {/*subskill, do not add checkboxes!*/}
        <p>Scholastic Lore (Int)</p>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <p>Scrutiny (Int)</p>
        <p>Security (Int)</p>
        <p>Sleight of Hand (Ag)</p>
        <p>Stealth (Ag)</p>
        <p>Survival (Per)</p>
        <p>Tech-Use (Int)</p>
        <p>Trade (Int)</p>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
    </section>
    {/*these two can be combined, as in Rogue Trader sheet*/}
    <section className="experience"></section>
    <section className="fate"></section>
    <section className="pain-tokens"></section>
    {/*Dark Soul means you get half corruption on failed test
    Jaded means no Insanity/Fear from outrageous events - only Terrors From The Warp
    cannot gain malignancies, instead She Who Thirsts*/}
    <section className="corruption"></section>
    <section className="profit-factor"></section>
    <section className="talents-and-traits"></section>
    <section className="aptitudes"></section>



    {/*PAGE 2, must move to separate file because everything must fit on one page*/}
    <section className="weapons"></section>
    <section className="armour-and-defence">
      {/*include wounds, critical damage, fatigue, conditions, worn items & cybernetics/haemonculus modifications, and potentially fate/pain*/}
    </section>
    <section className="movement"></section>
    <section className="gear"></section>
    <section className="acquisitions">
      {/*Rogue Trader specific, I'm not sure what it does*/}
    </section>
    <section className="psychic-disciplines">
      {/*add a little box for Psy Rating*/}
    </section>
    <section className="psychic-powers"></section>
    <section className="special-abilities"></section>
    {/*might be neat to have a combat drugs & poisons section*/}
  </body>
    </div>
  );
}

export default App;
