function generateQRCode() {
    var link = document.getElementById("link").value;
    var qrCode = new QRCode(document.getElementById("qr-code"), {
      text: link,
      width: 200,
      height: 200
    });
  }
  
  
  function saveQRCode() {
    var canvas = document.getElementById("qr-code").querySelector("canvas");
    var format = document.getElementById("format").value;
    var filename = "qr-code" + "." + format;
    if (format === "png") {
      canvas.toBlob(function (blob) {
        saveAs(blob, filename);
      });
    } else if (format === "jpeg") {
      canvas.toBlob(function (blob) {
        saveAs(blob, filename);
      }, "image/jpeg");
    } else if (format === "pdf") {
      var imgData = canvas.toDataURL("image/jpeg", 1.0);
      var pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save(filename);
    }
  }
  