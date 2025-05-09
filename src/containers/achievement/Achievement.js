import React, { useContext } from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import { achievementSection, socialMediaLinks } from "../../portfolio"; // Ensure socialMediaLinks is imported
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import Button from "../../components/button/Button"; // Import Button component if not already imported

export default function Achievement() {
  const { isDark } = useContext(StyleContext);

  if (!achievementSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {achievementSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {achievementSection.subtitle}
            </p>
          </div>
          <div className="achievement-cards-div">
            {achievementSection.achievementsCards.map((card, i) => (
              <AchievementCard
                key={i}
                isDark={isDark}
                cardInfo={{
                  title: card.title,
                  description: card.subtitle,
                  image: card.image,
                  imageAlt: card.imageAlt,
                  footer: card.footerLink,
                }}
              />
            ))}
          </div>
          {/* ✅ Moved Button inside the Fade wrapper */}
          <div className="achievement-button-div">
            <Button
              text="Certifications"
              className="project-button"
              href={socialMediaLinks.linkedin}
              newTab={true}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
