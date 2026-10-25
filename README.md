# digital-business-card

### Aggiornamento Business Card

Add file → Upload files

e sostituisci: "business-card.png" con quella nuova.

-----------------------------------

### Modificare il testo sopra il biglietto.

Apri: 
index.html

nel blocco "<-- INTESTAZIONE -->"

Sono tre righe, puoi cambiare solo ciò che sta tra i tag:

| Riga          | Funzione                  | Cosa modificare             |
| ------------- | ------------------------- | --------------------------- |
| intro-eyebrow | Riga piccola in maiuscolo | Solo il testo tra > e </p>  |
| intro-title   | Titolo                    | Solo il testo tra > e </h1> |
| intro-text    | Descrizione               | Solo il testo tra > e </p>  |

-----------------------------------

### Modifica i link Wallet

Apri:
wallet-config.js

e da:

-  const APPLE_WALLET_URL = " # ";

-  const GOOGLE_WALLET_URL = " # ";

passeremo a:

-  const APPLE_WALLET_URL = "https://IL-TUO-LINK-APPLE";

-  const GOOGLE_WALLET_URL = "https://IL-TUO-LINK-GOOGLE";

  -----------------------------------

### Modifica i dati della rubrica

Apri:
matteo-barresi.vcf

e modifica la voce che ti interssa.

Per modificare l'immagine in "PHOTO" e "LOGO" usa file .PNG e convertili in Base64 tramite questo tool: https://base64.guru/converter/encode/image/png
