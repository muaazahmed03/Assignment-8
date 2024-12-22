import React from "react";
import ReactDom from "react-dom/client";
import Navbar from "./Navbar";
import { Image } from "./Image";
import Cards from "./Cards";
import Accessories from "./Accessories";
import AccCard from "./AccCard";

ReactDom.createRoot(document.getElementById("root")).render(
  <div>
    <Navbar />
    <Image />
    <div id="mainDiv">
      <Cards
        new="New"
        phoneName="realme C75"
        phonePara="Dhulai Horai Hai"
        phoneImg="https://www.whatmobile.com.pk/admin/images/Realme/C75/Realme-C75-Image-1.jpg"
      />
      <Cards
        new="New"
        phoneName="realme 13+ 5G"
        phonePara="Speed to Victory"
        price="Rs.89,999"
        phoneImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8LeWVTJkD3MB_3mdyXXbH4fJ0L7DiyTRTcA&s"
      />
      <Cards
        new="New"
        phoneName="realme GT 6"
        phonePara="Power meets AI"
        price="Rs.149,999"
        phoneImg="https://images.priceoye.pk/realme-gt-6-pakistan-priceoye-ury4m.jpg"
      />
      <Cards
        new="New"
        phoneName="realme Note 60"
        phonePara="Champion Quality"
        price="Rs.26,999"
        phoneImg="https://www.moosani.pk/images/product_gallery/1729173954_BLUE.webp"
      />
      <Cards
        new="New"
        phoneName="realme C61"
        phonePara="Hard to Break"
        price="Rs.32,999"
        phoneImg="https://eezepc.com/wp-content/uploads/2024/10/realme-1-2-1024x1024.webp"
      />
      <Cards
        new="New"
        phoneName="realme C65"
        phonePara="Unbreakable Champion"
        price="Rs.49,999"
        phoneImg="https://images.priceoye.pk/realme-c65-pakistan-priceoye-2l7tg.jpg"
      />
      <Cards
        new="New"
        phoneName="realme 12"
        phonePara="Power in Every Shot"
        price="Rs.59,999"
        phoneImg="https://www.moosani.pk/images/product_gallery/1720176248_green.webp"
      />
      <Cards
        new="New"
        phoneName="realme 12+ 5G"
        phonePara="Power in Every Shot"
        price="Rs.74,999"
        phoneImg="https://friendshome.pk/cdn/shop/files/UntitledProject_16_45884618-c490-48fb-87b2-52aede80d957.jpg?v=1722249860"
      />
      <Cards
        new="New"
        phoneName="realme C63"
        phonePara="3 min Charge, 60 min T20 Match"
        price="Rs.39,999"
        phoneImg="https://www.aysonline.pk/wp-content/uploads/2024/07/lg_GgUQncPg6cVd7wm6y7xajctjAbkUDxaYTPbOR4ok.jpg"
      />
      <Cards
        new="New"
        phoneName="realme Note 50"
        phonePara="Loading-Lasting Value Beast"
        price="Rs.24,999"
        phoneImg="https://www.moosani.pk/images/product_gallery/1715772540_blue.webp"
      />
      <Cards
        new="New"
        phoneName="realme C67"
        phonePara="108MP 3x In-sensor Zoom Camera, Snapdragon 685"
        price="Rs.39,999"
        phoneImg="https://apnabaazar.pk/wp-content/uploads/2024/02/realme-c67-8gb-128gb-apna-baazar.jpg.webp"
      />
      <Cards
        new="New"
        phoneName="realme C53"
        phonePara="Champion Gold, 33W Champion Charge"
        price="Rs.39,999"
        phoneImg="https://www.aysonline.pk/wp-content/uploads/2024/05/lg_LBdPGASNmdJbF29JmZOMWRgD9td5V.jpg"
      />
      <Accessories />
      <br />
      <AccCard
        new="New"
        phoneName="realme Buds T110"
        phonePara="Listen in full colors"
        price="Rs.4,999"
        phoneImg="https://www.aysonline.pk/wp-content/uploads/2024/09/20230-71.jpg"
      />
      <AccCard
        new="New"
        phoneName="realme Buds Q"
        phonePara="Music Never Ends"
        price="Rs.7,999"
        phoneImg="https://rabisastore.pk/cdn/shop/products/realme-buds-q-black-with-official-warranty-prcie-in-Pakistan.jpg?v=1697282492&width=1445"
      />
    </div>
  </div>
);
