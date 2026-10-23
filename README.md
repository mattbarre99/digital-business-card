# digital-business-card
Matteo Barresi — Digital Business Card

Aggiornamento Business Card

Add file → Upload files

e sostituisci:

business-card.png

con quello nuovo.

-----------------------------------

Modificare in autonomia il testo sopra il biglietto.

Il testo è nel file index.html, nel blocco "<-- INTESTAZIONE -->"

Sono tre righe, puoi cambiare solo ciò che sta tra i tag:

| Riga          | Funzione                  | Cosa modificare             |
| ------------- | ------------------------- | --------------------------- |
| intro-eyebrow | Riga piccola in maiuscolo | Solo il testo tra > e </p>  |
| intro-title   | Titolo                    | Solo il testo tra > e </h1> |
| intro-text    | Descrizione               | Solo il testo tra > e </p>  |

-----------------------------------

Modifica i link Wallet

Apri:
wallet-config.js

e da:
const APPLE_WALLET_URL = "#";
const GOOGLE_WALLET_URL = "#";

passeremo a:
const APPLE_WALLET_URL =
  "https://IL-TUO-LINK-APPLE";
const GOOGLE_WALLET_URL =
  "https://IL-TUO-LINK-GOOGLE";
  

Salvi, aspetti il deploy e i pulsanti diventano operativi.
