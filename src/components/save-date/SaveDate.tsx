import React from "react";
import styled from "styled-components";

const SaveDate = () => {
  const light = window.location.search?.includes("light");
  const ultra = window.location.search?.includes("ultra");
  const ultraUrl = "https://forms.gle/r2SZhP5D17bHHJR99";
  const lightUrl = "https://forms.gle/r2SZhP5D17bHHJR99";
  const url = "https://forms.gle/yML4WAf9WjdSDPtu8";
  return (
    <div>
      <Title>Save the date</Title>
      <Description2>
        23 Luglio 2023{" "}
        {ultra ? (
          <>
            <br />
            Taglio della torta Ore: 22.00
          </>
        ) : (
          "Ore: 14:OO"
        )}
      </Description2>

      <Title>Location</Title>
      <Description>
        <a
          href="https://goo.gl/maps/pFnrRnopmr11JqvX9"
          target="_blank"
          rel="noreferrer"
          style={{
            textAlign: "center",
          }}
        >
          Castello Formentini <br /> Piazza Libertà, 3 <br /> 34070 <br /> San
          Floriano del Collio (GO)
        </a>
      </Description>
      {light || ultra ? (
        <>
          <Description>
            La vostra presenza sarà per noi il dono più bello. Ma se desiderate
            farci un regalo, potete aiutarci a realizzare un sogno: il nostro
            viaggio di nozze!
            <br />
          </Description>
          <Description>
            Intestatario: SANTORO LORENZO, BOER MICAELA <br />
            IBAN: IT55X0503401753000000042057
          </Description>
        </>
      ) : null}

      {light ? null : (
        <>
          <Title>Come arrivare a Trieste</Title>
          <Description>
            <b>AEREOPORTI</b>
            <ul>
              <ListItem>
                {" "}
                Napoli-Trieste Airport: Un Volo diretto (a/r) il Lun, Mer, Gio,
                Ven, Dom con orari variabili con Ryanair. Quattro voli (a/r)
                tutti i giorni con scalo a Roma con ITA Airways. L’aeroporto è
                collegato direttamente alla stazione dei treni (In 25 minuti si
                arriva in città)
              </ListItem>
              <ListItem>
                {" "}
                Napoli-Venezia: Tre Voli diretti (a/r) tutti i giorni con
                Ryanair. Un volo diretto (a/r) il Lun, Mar, Merc, Ven e Dom con
                Wizzair. Da Venezia si può arrivare a Trieste in Treno, oppure
                noleggiare un’auto in aeroporto.
              </ListItem>
            </ul>
            <b>TRENI</b>
            <ul>
              <ListItem>
                {" "}
                Trenitalia: Diverse soluzioni tutti i giorni a partire dalle ore
                5:09
              </ListItem>
              <ListItem>
                {" "}
                Italo: Una soluzione tutti i giorni con partenza alle 13:35 ed
                arrivo alle 20:56
              </ListItem>
            </ul>
            Sia per gli aerei che per i treni, potrebbero esserci nuove
            soluzioni o variare gli orari nei prossimi mesi
          </Description>

          <Title>Dove dormire a Trieste</Title>
          <Description>
            Come in tutte le città, le soluzioni per dormire sono moltissime e
            di vario tipo. Essendo in altissima stagione, il nostro consiglio è
            di prenotare il prima possibile. Per cercare di agevolarvi, abbiamo
            selezionato alcune strutture per le notti del 22 e 23 luglio, che
            trovate di seguito (vi chiediamo cortesemente di indicare al più
            presto la struttura nella quale volete alloggiare, in quanto il
            numero di camere è limitato):
            <ul>
              <ListItem>
                Hotel Roma (Via Carlo Ghega,7) che si trova a due passi dalla
                stazione dei treni e dal centro città. Il prezzo a persona è di
                44€ a notte, con prima colazione.
              </ListItem>
              <ListItem>
                Residence Le terrazze (Via Filzi, 21) anche questo vicino alla
                stazione, a due passi dal centro. Al momento hanno disponibilità
                di 10 appartamenti matrimoniali per le notti del 22 e 23 Luglio
                al prezzo complessivo di 214€. Ci sono anche alcune opzioni per
                appartamenti da 4 persone con 1 camera da letto con il divano
                letto in soggiorno al prezzo complessivo di 323€
              </ListItem>
              <ListItem>
                Per chi vuole o può pernottare solo la Domenica 23 Luglio
                (giorno del matrimonio), è possibile alloggiare presso la
                struttura della cerimonia (Castello Formentini) in camere
                matrimoniali al prezzo di 80€
              </ListItem>
            </ul>
            Per chi preferisse organizzarsi autonomamente, vi suggeriamo di
            cercare una soluzione nelle seguenti zone:
            <ul>
              <ListItem
                style={{
                  marginBottom: "5px",
                }}
              >
                Borgo Teresiano, Città Vecchia, Viale XX Settembre, San vito,
                Stazione. Restiamo a disposizione per qualsiasi consiglio!
              </ListItem>
            </ul>
          </Description>

          <Title>Transfer per la location</Title>
          <Description>
            Il giorno del matrimonio è prevista una navetta da Trieste A/R per
            il luogo del matrimonio (Castello Formentini)
          </Description>
        </>
      )}

      <Title>Un' ultima cosa</Title>
      <Description>
        {light || ultra ? "Chiediamo" : "Infine, chiediamo "} gentilmente a
        tutti, di compilare il form sottostante per confermare la partecipazione
        e segnalare eventuali intolleranze e/o esigenze alimentari particolari.
        <Button
          href={light ? (ultra ? ultraUrl : lightUrl) : url}
          as="a"
          target="_blank"
        >
          Accedi al form
        </Button>
      </Description>
    </div>
  );
};

const ListItem = styled.li`
  margin-bottom: 20px;
  line-height: 30px;
  font-size: 20px;
  text-align: left;
`;

const Title = styled.div`
  font-family: "Dancing";
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  margin: 20px auto;
  font-weight: bold;
`;

const Description = styled.div`
  font-family: "Roboto";
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  line-height: 30px;
  font-size: 20px;
  padding: 5px 20px;
  margin: 0 auto 30px;
  text-align: center;

  a {
    color: black;
  }
`;
const Description2 = styled.div`
  font-family: "Roboto";
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  line-height: 30px;
  font-size: 20px;
  padding: 5px 20px;
  margin: 0 auto 30px;
  text-align: center;

  a {
    color: black;
  }
`;

const Button = styled.a`
  background: #e8e1d7;
  color: black;
  font-size: 20px;
  border-radius: 5px;
  padding: 20px 0;
  width: 100%;
  margin: 0 auto;
  text-decoration: unset;
  cursor: pointer;
  margin-top: 20px;
  text-align: center;
`;

export default SaveDate;
