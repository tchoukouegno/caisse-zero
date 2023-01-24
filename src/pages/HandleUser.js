/***
 * page qui permet d ajouter un utilisateur par l administarteur
 */
import "../css/acess.css";
import "../css/handleuser.css";
import "../css/compteZero.css";
import { Footer } from "../components/Footer.js";
import { EmailButton } from "../components/EmailButton";
import { ImgLogos } from "../components/ImgLogos.js";
import { NavLink } from "react-router-dom";
import "../css/home.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function HandleUser() {
  const init = {
    td1: "",
    td2: "",
    td3: "",
    td4: "",
    td5: "",
    td6: "",
    td7: "",
    td8: "",
  };
  const [form, setForm] = useState(init);
  const handleChang = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(form);
  };
  let loginid = JSON.parse(localStorage.getItem("firstinscription"));
  let raisonsocial = JSON.parse(localStorage.getItem("raisonsociale"));
  const contenairimg = {
    width: "100%",
    height: "250px",
    objectFit: "cover",
  };
  const contenairlogo = {
    position: "absolute",
    right: "20px",
    top: "55px",
    width: "150px",
    height: "150px",
    objectFit: "cover",
    boxShadow: " 1px 13px 24px -22px rgba(0,0,0,0.9)",
    borderRadius: "50%",
  };
  const footernav = {
    display: "flex",
    flexDirection: "column",
    gap: "50px",
    background: "orange",
    height: "150px",
    padding: "50px",
    transform: "translate3d(0,130px,0)",
  };

  const initValues = { emailinvitation: "" };
  const [formValues, setFormValues] = useState(initValues);
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const roleInvite = [
    { t1: form.td1 },
    { t1: form.td2 },
    { t1: form.td3 },
    { t1: form.td4 },
    { t1: form.td5 },
    { t1: form.td6 },
    { t1: form.td7 },
    { t1: form.td8 },
  ];
  window.localStorage.setItem(
    "roleInvite",
    JSON.stringify({
      role: roleInvite,
    })
  );
  const handSubmit = (e) => {
    e.preventDefault();
    const firstinscription = JSON.parse(
      localStorage.getItem("firstinscription")
    );
    console.log(formValues.emailconfirm);
    console.log(firstinscription.token);

    const tdInput = document.querySelectorAll(".inputTd");

    // tdInput.forEach((tdinput) => {
    //   console.log(tdinput);
    //   if (!tdinput.value) {
    //     return alert("veuillez remplir tous les roles de l 'invité");
    // } else {
    axios
      .post("https://caisse0.ubix-group.com/public/index.php/api/invit", {
        email: formValues.emailinvitation,
        token: firstinscription.token,
        id: firstinscription.id,
        admin: form.td1,
        compta: form.td2,
        stock: form.td3,
        com: form.td4,
        paie: form.td5,
        immos: form.td6,
        budget: form.td7,
        rap: form.td8,
      })
      .then(function (response) {
        console.log(response);
        console.log(response.data.email);
        if (response.data.msg === "Email envoyer") {
          return (
            alert("invitation envoye"),
            window.localStorage.setItem(
              "Email",
              JSON.stringify({
                email: response.data.email,
                admin: response.data.admin,
                compta: response.data.compta,
                stock: response.data.stock,
                com: response.data.com,
                paie: response.data.paie,
                immos: response.data.immos,
                budget: response.data.budget,
                rap: response.data.rap,
              })
            )
          );
        }
      })
      .catch(function (error) {
        if (error.response.statusText === "") {
          alert("mauvais email entrer un @ et un .");
        }
        console.log(error);
      });
  };

  return (
    <div className="contenair">
      <ImgLogos contenairimg={contenairimg} contenairlogo={contenairlogo} />
      <div className="handleuser">
        <div className="sous-handleuser">
          <h1 className="sous-handleuserh1">AJOUTER UN AUTRE UTILISATEUR</h1>
          <EmailButton
            email={loginid.email}
            entreprise={raisonsocial.raison_social}
          />
        </div>
        <div className="invitationuser">
          <span className="invitationuserspan">
            Mail de l’utilisateur à inviter
          </span>
          <form onSubmit={handSubmit}>
            <input
              type="text"
              name="emailinvitation"
              value={formValues.emailinvitation}
              onChange={handleChanges}
              className="invitationuserbutton"
            />
            <button className="sendinvitationuser">
              Inviter l’utilisateur
            </button>
          </form>
        </div>

        <h2>Détails des autorisations données</h2>
        <h2>
          veuillez remplir tous les roles de l'inviter dans les cases vides
          avant de valider le bouton inviter l utilisateur
        </h2>
        <table>
          <thead>
            <tr>
              <th>CZ</th>
              <th>Mail</th>
              <th>Admin</th>
              <th>Compta</th>
              <th>Stock </th>
              <th>Com</th>
              <th>Paie</th>
              <th>Immos</th>
              <th>Budget</th>
              <th>Rap</th>
            </tr>
          </thead>
          <tr>
            <td data-label="CZ">{raisonsocial.raison_social}</td>
            <td className="tdemail" data-label="Mail">
              {loginid.email}
            </td>
            <td data-label="Admin">Oui/Non</td>
            <td data-label="Compta">Non/Visual/M odif</td>
            <td data-label="Stock">Non/Vi sual/M odif</td>
            <td data-label="Com">Non/Vi sual/M odif</td>
            <td data-label="Paie">Non/Vi sual/M odif</td>
            <td data-label="Immos">Non/Vi sual/M odif</td>
            <td data-label="Budget">Non/Vi sual/M odif</td>
            <td data-label="Rap">Non/Vi sual/M odif</td>
          </tr>
          <tr>
            <td data-label="CZ">{raisonsocial.raison_social}</td>
            <td className="tdemail" data-label="Mail">
              {formValues.emailinvitation}
            </td>
            <td className="td" data-label="Admin">
              <input
                type="text"
                className="inputTd"
                name="td1"
                value={form.td1}
                onChange={handleChang}
              />
            </td>
            <td className="td" data-label="Compta">
              <input
                type="text"
                className="inputTd"
                name="td2"
                value={form.td2}
                onChange={handleChang}
              />
            </td>
            <td className="td" data-label="Stock">
              <input
                type="text"
                className="inputTd"
                name="td3"
                value={form.td3}
                onChange={handleChang}
              />
            </td>
            <td className="td" data-label="Com">
              <input
                type="text"
                className="inputTd"
                name="td4"
                value={form.td4}
                onChange={handleChang}
              />
            </td>
            <td className="td" data-label="Paie">
              <input
                type="text"
                className="inputTd"
                name="td5"
                value={form.td5}
                onChange={handleChang}
              />
            </td>
            <td className="td" data-label="Immos">
              <input
                type="text"
                className="inputTd"
                name="td6"
                value={form.td6}
                onChange={handleChang}
              />
            </td>
            <td className="td" data-label="Budget">
              <input
                type="text"
                className="inputTd"
                name="td7"
                value={form.td7}
                onChange={handleChang}
              />
            </td>
            <td className="td" data-label="Rap">
              <input
                type="text"
                className="inputTd"
                name="td8"
                value={form.td8}
                onChange={handleChang}
              />
            </td>
          </tr>
        </table>
        <NavLink to="/MenuAplication" className="buttontable">
          suivant
        </NavLink>
      </div>
      <Footer Footernav={footernav} />
    </div>
  );
}
