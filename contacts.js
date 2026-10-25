(function () {
  var link = document.getElementById("addContact");
  if (!link) return;

  var ua = navigator.userAgent || "";
  if (!/Android/i.test(ua) || !/Chrome\//i.test(ua)) return;

  var vcfUrl = link.getAttribute("href");
  var e = encodeURIComponent;

  var intentUrl =
    "intent:#Intent;" +
    "action=android.intent.action.INSERT;" +
    "type=vnd.android.cursor.dir/raw_contact;" +
    "S.name=" + e("Matteo Barresi") + ";" +
    "S.company=" + e("ING Bank") + ";" +
    "S.job_title=" + e("Financial Advisor") + ";" +
    "S.phone=" + e("3427472493") + ";" +
    "S.email=" + e("matteo@gmail.comL") + ";" +
    "S.browser_fallback_url=" + e(vcfUrl) + ";" +
    "end";

  link.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = intentUrl;
  });
})();
