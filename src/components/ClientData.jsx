import React from "react";
import Marquee from "react-marquee-slider";

const clientData = [
  {
    "commercial_name": "BUSPIRONE HYDROCHLORIDE- buspirone hydrochloride tablet",
    "document_id": 3327829,
    "language_code": "en",
    "lastUpdate": "2020-07-13 11:11:56",
    "lastUpdated": "2019-06-19",
    "leafletTypeCode": "PIL",
    "mah": "Denton Pharma, Inc. DBA Northwind Pharmaceuticals",
    "mime_type": "application/pdf",
    "nman_code": "us_8bb030db_a9ac_3a4a_e053_2a95a90aa6b7",
    "source": "NLM (National Library of Medicine)",
    "img": "https://global-mt.ru/upload/iblock/99e/nqmjgop6u1sj2eiszy08vnuh8jsqdvcv/kls_martin_group.png",
    "rating": 3.8
  },
  {
    "commercial_name": "CITALOPRAM HYDROBROMIDE- citalopram hydrobromide tablet",
    "document_id": 3217212,
    "language_code": "en",
    "lastUpdate": "2020-07-13 11:11:56",
    "lastUpdated": "2015-08-28",
    "leafletTypeCode": "PIL",
    "mah": "Blenheim Pharmacal, Inc.",
    "mime_type": "application/pdf",
    "nman_code": "us_645cbf32_4b43_4d09_9935_80bc32b6a6b7",
    "source": "NLM (National Library of Medicine)",
    "img": "https://global-mt.ru/upload/iblock/2aa/fz4tyn09v91peefu64isycitobwh7p04/erba_group.png",
    "rating": 4.8
  },
  {
    "commercial_name": "HYDROCODONE BITARTRATE AND ACETAMINOPHEN tablet",
    "document_id": 3221252,
    "language_code": "en",
    "lastUpdate": "2020-07-13 11:11:56",
    "lastUpdated": "2020-02-14",
    "leafletTypeCode": "PIL",
    "mah": "A-S Medication Solutions",
    "mime_type": "application/pdf",
    "nman_code": "us_bfeb838d_f963_490c_9dcc_c729ea779b52",
    "source": "NLM (National Library of Medicine)",
    "img": "https://global-mt.ru/upload/iblock/c5b/un71fm2pu3dd750j29wk8jkq9w1utauy/image017.png",
    "rating": 2.8
  },
  {
    "commercial_name": "AMIODARONE HYDROCHLORIDE- amiodarone hydrochloride tablet",
    "document_id": 3297792,
    "language_code": "en",
    "lastUpdate": "2020-07-13 11:11:56",
    "lastUpdated": "2019-06-11",
    "leafletTypeCode": "PIL",
    "mah": "Denton Pharma, Inc. DBA Northwind Pharmaceuticals",
    "mime_type": "application/pdf",
    "nman_code": "us_8b0f5d77_1484_3176_e053_2a95a90a9faf",
    "source": "NLM (National Library of Medicine)",
    "img": "https://global-mt.ru/upload/iblock/16c/bh3ls01gonjpzbsaf5sr8lkrjlsp4wuj/image001.png",
    "rating": 3.5
  },
  {
    "commercial_name": "LANSOPRAZOLE- lansoprazole capsule, delayed release",
    "document_id": 3215291,
    "language_code": "en",
    "lastUpdate": "2020-07-13 11:11:56",
    "lastUpdated": "2012-10-16",
    "leafletTypeCode": "PIL",
    "mah": "Rebel Distributors Corp",
    "mime_type": "application/pdf",
    "nman_code": "us_152fb727_d516_441e_a72b_33ddf1a325c1",
    "source": "NLM (National Library of Medicine)",
    "img": "https://global-mt.ru/upload/iblock/705/ubfgnzoj7x7ec0ywm5xlsnj7kljq0wje/image004.png",
    "rating": 4.2
  },
];

const ClientData = () => {
  return (
    <div className="bg-[#E5E4ED]  mt-8 w-[] px-5 py-10 lg:py-[100px]">
      <div className="mx-auto mb-10 max-w-[1400px] justify-between sm:flex md:px-5 md:pb-14 lg:px-4 lg:pb-[100px]">
        <h3 className="mb-10 text-lg font-medium leading-[120%] sm:mb-0 md:text-xl lg:text-[30px]">
          Наши клиенты
        </h3>
        <p className="text-[28px] font-medium leading-[110%] md:text-[34px] lg:text-5xl">
          БОЛЕЕ <span className="text-[#088269]">5000</span> <br /> УСПЕШНЫХ ПРОЕКТОВ
        </p>
      </div>
      <Marquee velocity={20}>
        {clientData.map((client, index) => (
          <div key={index} className="flex gap-[10px] px-[10px]">
            <div className="w-[236px] rounded-[10px] border border-[#E1DFE7] bg-[#F8F7F3] lg:w-80">
              <div className="flex h-[152px] w-full items-center justify-center rounded-t-[10px] border-b border-[#E1DFE7] bg-white lg:h-[196px]">
                <img
                  className="h-full w-full object-contain"
                  src={client.img} // Use the 'img' attribute for the image source
                  alt={client.commercial_name} // Use a relevant attribute for alt text
                />
              </div>
              <div className="px-4 py-4 lg:px-6 lg:py-5">
                <p className="text-[12px] font-medium md:text-sm md:leading-[118%] lg:text-[16px] lg:leading-[140%]">
                  {client.commercial_name} {/* Display relevant text */}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ClientData;
