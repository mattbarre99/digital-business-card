const APPLE_WALLET_URL = "https://api.wisery.io/business-cards/521930d771501e2b7f43/pass/apple";

const GOOGLE_WALLET_URL = "https://pay.google.com/gp/v/save/eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJidXNpbmVzcy1jYXJkQGJ1c2luZXNzLWNhcmQtNDM3OTE1LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwiYXVkIjoiZ29vZ2xlIiwib3JpZ2lucyI6W10sImlhdCI6MTc4OTQ2ODM3MCwidHlwIjoic2F2ZXRvd2FsbGV0IiwicGF5bG9hZCI6eyJnZW5lcmljT2JqZWN0cyI6W3siY2xhc3NJZCI6IjMzODgwMDAwMDAwMjI4MDcxOTMuTXlTaWduYXR1cmUiLCJnZW5lcmljVHlwZSI6bnVsbCwiaGFzVXNlcnMiOm51bGwsImhleEJhY2tncm91bmRDb2xvciI6IiNGRjU0MDAiLCJpZCI6IjMzODgwMDAwMDAwMjI4MDcxOTMuNTIxOTMwZDc3MTUwMWUyYjdmNDMiLCJsaW5rZWRPYmplY3RJZHMiOm51bGwsInNtYXJ0VGFwUmVkZW1wdGlvblZhbHVlIjpudWxsLCJzdGF0ZSI6IkFDVElWRSIsImNhcmRUaXRsZSI6eyJraW5kIjpudWxsLCJkZWZhdWx0VmFsdWUiOnsia2luZCI6bnVsbCwibGFuZ3VhZ2UiOiJlbi1VUyIsInZhbHVlIjoiSU5HIEJhbmsifX0sImhlYWRlciI6eyJraW5kIjpudWxsLCJkZWZhdWx0VmFsdWUiOnsia2luZCI6bnVsbCwibGFuZ3VhZ2UiOiJlbi1VUyIsInZhbHVlIjoiTUFUVEVPIEJBUlJFU0kifX0sImJhcmNvZGUiOnsiYWx0ZXJuYXRlVGV4dCI6bnVsbCwia2luZCI6bnVsbCwicmVuZGVyRW5jb2RpbmciOm51bGwsInR5cGUiOiJRUl9DT0RFIiwidmFsdWUiOiJodHRwczovL215c2lnLmlvL1ZTUnByNGI3SzFyVyJ9LCJzdWJoZWFkZXIiOnsia2luZCI6bnVsbCwiZGVmYXVsdFZhbHVlIjp7ImtpbmQiOm51bGwsImxhbmd1YWdlIjoiZW4tVVMiLCJ2YWx1ZSI6IkZpbmFuY2lhbCBBZHdpc29yIn19LCJ0ZXh0TW9kdWxlc0RhdGEiOlt7ImJvZHkiOiIrMSAyMzQgNTY3IDg5MDAiLCJoZWFkZXIiOiJOdW1lcm8gZGkgdGVsZWZvbm8iLCJpZCI6Iml0ZW0xIn0seyJib2R5IjoiIiwiaGVhZGVyIjoiIiwiaWQiOiJpdGVtMiJ9LHsiYm9keSI6Im5hbWVAZXhhbXBsZS5jb20iLCJoZWFkZXIiOiJFbWFpbDoiLCJpZCI6Iml0ZW0zIn1dLCJsb2dvIjp7ImtpbmQiOm51bGwsInNvdXJjZVVyaSI6eyJkZXNjcmlwdGlvbiI6bnVsbCwidXJpIjoiaHR0cHM6Ly9kY2ltZy5teXNpZ25hdHVyZS5pby9pLzIvZS83LzJlNzdhYjgwLTI0M2YtNDk0MC1hMzRmLWQ5ZjZjMDhiMmNlOS5wbmcifSwiY29udGVudERlc2NyaXB0aW9uIjp7ImtpbmQiOm51bGwsImRlZmF1bHRWYWx1ZSI6eyJraW5kIjpudWxsLCJsYW5ndWFnZSI6ImVuLVVTIiwidmFsdWUiOiJHZW5lcmljIGNhcmQgbG9nbyJ9fX19XX19.tmcVmuoGUBs-Es6IXEBHXekklYphlTEdc1UUtDz0UyBIK4n5iR2OHEC2raHysC64_NRfjy0OGalQc4iANrL720_uQSxUxn9OW5Y79VC45sgycs-6o2JrkQ9kW7q81i85Pc-kRh0LJT3gukdNyVqckvXnUA7zObMY1os_eLx7j7iiJFF2zfXnJAtnRXlAVDnwQV3FEu_28MdKjEv8vby2WFf9thQ54xhJC-SxM1LLm-GYtGb3YkjqXUV5tRX0taMJBrkx0i9WHG8eJf22xmWDyIZapnBupNsPtpCz5kgoXmdMd_ELKio3k46Ld2nfs5JB8R1p-pULrgcBBjblW8qO1w";


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
