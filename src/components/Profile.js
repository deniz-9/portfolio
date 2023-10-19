import React from "react";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const { t } = useTranslation();
  return (
    <div className="profileContainer">
      <div className="cizgi"></div>
      <div className="profileText">
        <h1>{t("profileTitle")}</h1>
      </div>
      <div className="profile">
        <div className="profileLeft">
          <h2>{t("profileTitle")}</h2>
          <div className="profileInfo">
            <div className="profileInfoItemSol">
              <div className="profileInfoItem">
                <p>{t("birthday")}</p>
                <p>26.11.1999</p>
                <br />{" "}
              </div>

              <div className="profileInfoItem">
                <p>{t("education")}</p>
                <p>
                  {" "}
                  Sakarya Üniversitesi İşletme Fakültesi Yönetim Bilişim
                  Sistemleri Bölümü (YBS)
                </p>
                <p>Özel Atafen Anadolu Lisesi -- İzmit/Kocaeli</p>
              </div>
            </div>
            <div className="profileInfoItemSag">
              <div className="profileInfoItem">
                <p>{t("residence")}</p>
                <p>Kocaeli</p>
                <br />
              </div>

              <div className="profileInfoItem">
                <p>{t("preferredRole")}</p>
                <p>{t("frontendDeveloper")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="profileRight">
          <h2>{t("aboutMe")}</h2>
          <p>{t("aboutMeText")}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
