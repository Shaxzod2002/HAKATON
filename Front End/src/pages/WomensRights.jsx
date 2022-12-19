import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";

const WomensRights = () => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const getPages = async () => {
      const response = await axios.get("http://127.0.0.1:8000/moddalar/");
      setPages(response.data);
    };
    getPages();
  }, []);
  console.log(pages);
  return (
    <div>
      <Navbar />
      <section className="womens-rights w-full min-h-[100vh] bg-black flex justify-between items-center flex-wrap gap-3 p-3 flex-col">
        <header>
          <div className="bg-theme">
            <div className="w-1/2 min-h-[120vh] flex justify-center flex-col gap-4 pl-[100px]">
              <h1 className="text-[#EEA73D] text-5xl font-bold">
                Konstitutsiya xotin-qizlarni qanday himoya qiladi?
              </h1>
              <p className="text-white text-3xl">
                Mamlakatimiz aholisining qariyb 50 foizini xotin-qizlar tashkil
                etadi. Lekin ular o'z huquqlaridan habardormi?
              </p>
            </div>
          </div>
        </header>
        <div className="w-full min-h-[100vh] flex justify-between items-center flex-wrap gap-3 p-10">
          <p className="text-xl text-white/80">
            Ayollar haqida koʻp ulugʻ soʻzlar aytilgan va aytiladi. Ammo hayotda
            opa-singillarimiz shu ulugʻ soʻzlardagi kabi eʼzoz koʻrmoqdami?
            Konstitutsiyamizni sinchiklab oʻqisangiz, ayollar qadr-qimmati,
            huquqlari himoyasi boʻyicha juda insoniy meʼyorlar belgilangan.
            Bugun turmushda ular roʻyobga chiqmoqdami?..
          </p>
          <p className="text-xl text-white/80">
            Konstitutsiyamiz qabul qilingan kun arafasida bu kabi savollar
            haqida chuqur oʻylash ayni muddao boʻladi.
          </p>
          <p className="text-xl text-white/80">
            Chunki, hozirgi davrda xotin-qizlarning huquq va erkinliklari,
            qonuniy manfaatlarini himoya qilish yana-da dolzarb ahamiyat kasb
            etmoqda. Ayniqsa, ayollarning ijtimoiy-iqtisodiy va siyosiy-huquqiy
            faolligini oshirish davr talabiga aylanmoqda.
          </p>
          <p className="text-xl text-white/80">
            Mamlakatimiz aholisining qariyb 50 foizini xotin-qizlar tashkil
            etadi. Ayollarning barcha sohalardagi samarali mehnati, ayniqsa,
            farzandlar tarbiyasi, oila hayotidagi ulkan xizmatlarini hech narsa
            bilan oʻlchab, qiyoslab boʻlmaydi.
          </p>
          <p className="text-xl text-white/80">
            Oʻzbekiston Respublikasi Konstitutsiyasi 46-moddasida xotin-qizlar
            va erkaklar teng huquqli ekanliklari mustahkamlab qoʻyilgan,
            davlatimiz Xotin-qizlarni kamsitishning barcha shakllariga barham
            berish toʻgʻrisidagi, Xotin-qizlarning siyosiy huquqlari
            toʻgʻrisidagi, Bir xil qiymatga ega boʻlgan mehnat uchun erkaklar va
            xotin-qizlarni teng ragʻbatlantirish toʻgʻrisidagi konvensiyalarga
            qoʻshilgan.
          </p>
          <p className="text-xl text-white/80">
            Oʻtgan toʻrt yilda yurtimizda ayollar huquqlari himoyasini tubdan
            kuchaytirishga doir 15 dan ortiq meʼyoriy-huquqiy hujjat qabul
            qilingan va ijroga qaratilgan. Xususan, oʻtgan yili ikkita muhim
            hujjat – “Xotin-qizlar va erkaklar uchun teng huquq hamda
            imkoniyatlar kafolatlari toʻgʻrisida”gi hamda “Xotin-qizlarni tazyiq
            va zoʻravonlikdan himoya qilish toʻgʻrisida”gi qonunlar qabul
            qilindi.
          </p>
          <p className="text-xl text-white/80">
            Prezidentimiz qabul qilgan bir qator farmon va qarorlar davlat
            tashkilotlariga ayollar huquqlari bilan bogʻliq vazifalarni
            belgilab, ularning masʼuliyatini oshirdi. “Xotin-qizlarning mehnat
            huquqlari kafolatlarini yana-da kuchaytirish va tadbirkorlik
            faoliyatini qoʻllab-quvvatlashga oid chora-tadbirlar toʻgʻrisida”gi
            qaror ana shunday muhim hujjatlardan biri.
          </p>
          <p className="text-xl text-white/80">
            Oliy Majlis Senatida Xotin-qizlar va gender tenglik masalalari
            qoʻmitasi tashkil etildi. Alohida Gender tenglikni taʼminlash
            masalalari boʻyicha komissiya tashkil etilib, u xotin-qizlar va
            erkaklar uchun teng huquq hamda imkoniyatlarni taʼminlash sohasidagi
            ishlarning holati toʻgʻrisida har yili Oʻzbekiston Respublikasi Oliy
            Majlisiga axborot taqdim etishi belgilab qoʻyildi.
          </p>
          <p className="text-xl text-white/80">
            Endilikda davlat organlarida xotin-qizlar va erkaklar uchun teng
            huquq hamda imkoniyatlarni taʼminlash masalalari boʻyicha vakolatli
            mansabdor shaxs belgilanadi. Vakolatli shaxsning majburiyatlarini
            bajarish davlat organi rahbarining oʻrinbosarlaridan biri zimmasiga
            yuklatiladi.
          </p>
          <p className="text-xl text-white/80">
            Qonun ijodkorligiga “normativ-huquqiy hujjatlar va ularning
            loyihalarini gender-huquqiy ekspertizasi”, degan yangi institut
            kirib keldi.
          </p>
          <p className="text-xl text-white/80">
            “Xotin-qizlar va erkaklar uchun teng huquq hamda imkoniyatlar
            kafolatlari toʻgʻrisida”gi qonunda davlat xotin-qizlar va erkaklarga
            shaxsiy, siyosiy, iqtisodiy, ijtimoiy va madaniy huquqlarni amalga
            oshirish chogʻida teng huquqlilikni, jamiyat hamda davlat ishlarini
            boshqarishda, saylov jarayonida teng ishtirok etishni kafolatlashi
            mustahkamlab qoʻyildi.
          </p>
          <p className="text-xl text-white/80">
            Respublika boʻyicha turli korxonalarda ishlayotgan rahbar ayollar
            2017-yili 44,2 foizni tashkil etgan boʻlsa, 2019-yilda 45,3 foizga
            yetgan.
          </p>
          <p className="text-xl text-white/80">
            Vazirlar Mahkamasining “2030-yilgacha boʻlgan davrda barqaror
            rivojlanish sohasidagi milliy maqsad va vazifalarni amalga oshirish
            chora-tadbirlari toʻgʻrisida”gi qarorida Oʻzbekiston Barqaror
            rivojlanishning Beshinchi maqsadi gender tenglikni taʼminlash,
            barcha xotin-qizlarning huquq va imkoniyatlarini kengaytirish
            belgilangan. Unga koʻra, 2030-yilga borib barcha xotin-qizlarga
            nisbatan kamsitishlarning har qanday shakliga barham berish,
            siyosiy, iqtisodiy va ijtimoiy hayotda qarorlar qabul qilishning
            barcha darajalarida ayollarning toʻliq va samarali ishtirokini,
            yetakchilik qilish uchun teng imkoniyatlarni taʼminlash zarur.
          </p>
          <p className="text-xl text-white/80">
            Xulosa oʻrnida aytish kerakki, Konstitutsiyamizda belgilangan
            ayollarning haq-huquqlarini roʻyobga chiqarish, ularning
            qadr-qimmatini oshirish boʻyicha yuqoridan quyigacha amaliy tizim
            yaratildi. Mana shu yangi tizim samarali ishlashi uchun hammamiz
            birgalikda harakat qilishimiz zarur.
          </p>
          <div>
            <h2 className="text-2xl font-semibold text-[#EEA73D]">
              Mavjuda HASANOVA,
            </h2>
            <h2 className="text-2xl font-semibold text-[#EEA73D]">
              OʻzXDP fraksiyasi aʼzosi
            </h2>
            <h2 className="text-2xl font-semibold text-[#EEA73D]">
              Oliy Majlis Qonunchilik palatasi deputati,
            </h2>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default WomensRights;
