const APPLE_WALLET_URL = "#";
const GOOGLE_WALLET_URL = "#";


function configureWalletButton(
  elementId,
  url,
  label
) {

  const button =
    document.getElementById(elementId);

  if (!button) {
    return;
  }


  if (
    url &&
    url !== "#"
  ) {

    button.href = url;

    button.target = "_blank";

    button.rel = "noopener";

    return;
  }


  button.addEventListener(
    "click",
    function(event) {

      event.preventDefault();

      alert(
        "Il collegamento per " +
        label +
        " non è ancora configurato."
      );

    }
  );

}


configureWalletButton(
  "appleWallet",
  APPLE_WALLET_URL,
  "Apple Wallet"
);


configureWalletButton(
  "googleWallet",
  GOOGLE_WALLET_URL,
  "Google Wallet"
);
