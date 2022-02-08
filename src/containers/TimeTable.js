import React from "react";

/**
 * @author
 * @function TimeTable
 **/

const TimeTable = (props) => {
  let active = new Date().getDay();

  return (
    <section className="dark">
      <div className="container" style={{ textAlign: "left" }}>
        <h3>Nos horraires</h3>
        <div className="opening-hours">
          <table>
            <tr className="monday fvl-d" id={active === 1 ? "activerow" : ""}>
              <td>
                <span>Lundi</span>
              </td>
              <td>8.00 - 11.30</td>
              <td>14.30 - 18.00</td>
            </tr>
            <tr className="tuesday fvl-d" id={active === 2 ? "activerow" : ""}>
              <td>
                <span>Mardi</span>
              </td>
              <td>8.00 - 11.30</td>
              <td>14.30 - 18.00</td>
            </tr>
            <tr
              className="wednesday fvl-d"
              id={active === 3 ? "activerow" : ""}
            >
              <td>
                <span>Mercredi</span>
              </td>
              <td>8.00 - 12.00</td>
            </tr>
            <tr className="thursday fvl-d" id={active === 4 ? "activerow" : ""}>
              <td>
                <span>Jeudi</span>
              </td>
              <td>8.00 - 11.30</td>
              <td>14.30 - 18.00</td>
            </tr>
            <tr className="friday fvl-d" id={active === 5 ? "activerow" : ""}>
              <td>
                <span>Vendredi</span>
              </td>
              <td>12.00 - 22.00</td>
            </tr>
            <tr className="saturday fvl-d" id={active === 6 ? "activerow" : ""}>
              <td>
                <span>Samedi</span>
              </td>
              <td>17.00 - 22.00</td>
            </tr>
            <tr className="sunday fvl-d" id={active === 0 ? "activerow" : ""}>
              <td>
                <span>Dimanche</span>
              </td>
              <td>Fermé</td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TimeTable;
