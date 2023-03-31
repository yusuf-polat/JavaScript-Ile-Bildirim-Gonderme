function gonder() {
  // Bildirim iznini kontrol edin ve kullanıcıdan izin isteyin
  if (Notification.permission !== "granted") {
    Notification.requestPermission();
  }

  // Bildirimi göstermek için bir Notification nesnesi oluşturun
  const notification = new Notification("Başlık", {
    body: "Bildirim içeriği",
    icon: "jsicon.png",
  });
  // Bildirimi tıklandığında bir sayfaya yönlendirmek için onclick özelliğini belirleyin
  notification.onclick = function (event) {
    event.preventDefault(); // Tarayıcı varsayılanı önlemek için
    window.open("https://github.com/yusuf652"); // Tıklamada açılacak sayfa
  };
}
