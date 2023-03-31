<h1>JavaScript Kullanarak Bildirim Gönderme</h1>
Bu proje, web sitelerinde kullanıcılara JavaScript kullanarak bildirim gönderme özelliği hakkında bir açıklama sunar.

<h3>Bildirim Gönderme</h3>
JavaScript'de bildirim göndermek için kullanabileceğiniz bir API, Notification API'sidir. Bu API, kullanıcılara bildirim göndermek için kullanılabilen basit ve kullanışlı bir arayüzdür. Bu API sayesinde kullanıcılar, web sitenizdeki etkinlikleri veya önemli güncellemeleri kaçırmadan haberdar olabilirler.

Notification API'sini kullanarak bir bildirim göndermek için şu adımları izleyebilirsiniz:

1. Kullanıcının bildirimleri almayı kabul ettiğinden emin olun. Kullanıcıların bildirimleri almak için izin vermesi gerektiğinden, kullanıcının önceden izin verip vermediğini kontrol etmek önemlidir.
 <pre>
    <code>
 if (Notification.permission !== "granted") {
  Notification.requestPermission();
 }
   </code>
 </pre>
2. Bildirim göstermek için bir Notification nesnesi oluşturun ve title ve options parametrelerini belirtin.
 <pre>
    <code>
 const notification = new Notification("Başlık", {
  body: "Bildirim içeriği",
  icon: "path/to/icon.png"
});

   </code>
 </pre>
 title parametresi bildirimin başlığını, body parametresi bildirim içeriğini ve icon parametresi de gösterilecek ikonun yolunu belirtir.
 
3. Bildirimi tıklandığında ne olacağını belirlemek için onclick özelliğini belirtebilirsiniz: 
 <pre>
    <code>
notification.onclick = function(event) {
  event.preventDefault(); // Tarayıcı varsayılanı önlemek için
  window.open("http://www.example.com"); // Tıklamada açılacak sayfa
};

   </code>
 </pre>
 
 
Yukarıdaki adımları izleyerek, kullanıcılara JavaScript kullanarak web sitenizde bildirim gönderebilirsiniz. Ancak, kullanıcıların bildirimleri kabul etmeleri için onları ikna etmek için bir mesaj göstermeniz de iyi bir fikir olabilir. Ayrıca, kullanıcıların bildirimlerinizi kabul etmeyi tercih etmeleri durumunda, Notification.permission özelliğinin "granted" olarak ayarlanmadığından emin olun.

<h1>Projenin Kullanımı</h1>

Bu proje, JavaScript kullanarak web sitelerinde bildirim gönderme özelliğinin nasıl kullanılacağı hakkında bir açıklama sunar.

Proje dosyalarını indirin ve kullanmaya başlayın. Kodu inceleyerek veya örnekleri kullanarak bildirim gönderme özelliğini öğrenebilirsiniz.
