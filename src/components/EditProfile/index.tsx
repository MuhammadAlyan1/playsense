import { useState } from 'react';
import Navigation from './Navigation';
import { stepType } from '../../types/stepType';
import Personalization from './Personalization';
import AboutMe from './AboutMe';
import Socials from './Socials';
import Peripherals from './Peripherals';

const EditProfile = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [banner, setBanner] = useState<File | null>(null);
  const [platform, setPlatform] = useState<'pc' | 'xbox' | 'playstation'>('pc');
  const [bio, setBio] = useState('');
  const [country, setCountry] = useState('pakistan');
  const [twitchUrl, setTwitchUrl] = useState('');
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [twitterUrl, setTwitterUrl] = useState('');
  const [discordUsername, setDiscordUsername] = useState('');
  const [monitor, setMonitor] = useState('');
  const [headphones, setHeadphones] = useState('');
  const [keyboard, setKeyboard] = useState('');
  const [mouse, setMouse] = useState('');
  const [mousepad, setMousepad] = useState('');

  console.log({
    profilePicture,
    banner,
    platform,
    bio,
    country,
    twitchUrl,
    youtubeUrl,
    twitterUrl,
    discordUsername,
    monitor,
    headphones,
    keyboard,
    mouse,
    mousepad
  });

  const steps: stepType[] = [
    {
      step: 0,
      name: 'Personalization'
    },
    {
      step: 1,
      name: 'About Me'
    },
    {
      step: 2,
      name: 'Social Hub'
    },
    {
      step: 3,
      name: 'My Gear'
    }
  ];

  return (
    <section className="edit-profile">
      <Navigation steps={steps} currentStep={currentStep} />
      {currentStep === 0 && (
        <Personalization
          profilePicture={profilePicture}
          setProfilePicture={setProfilePicture}
          banner={banner}
          setBanner={setBanner}
          platform={platform}
          setPlatform={setPlatform}
        />
      )}
      {currentStep === 1 && (
        <AboutMe
          bio={bio}
          setBio={setBio}
          country={country}
          setCountry={setCountry}
        />
      )}
      {currentStep === 2 && (
        <Socials
          twitchUrl={twitchUrl}
          setTwitchUrl={setTwitchUrl}
          youtubeUrl={youtubeUrl}
          setYoutubeUrl={setYoutubeUrl}
          twitterUrl={twitterUrl}
          setTwitterUrl={setTwitterUrl}
          discordUsername={discordUsername}
          setDiscordUsername={setDiscordUsername}
        />
      )}
      {currentStep === 3 && (
        <Peripherals
          monitor={monitor}
          setMonitor={setMonitor}
          headphones={headphones}
          setHeadphones={setHeadphones}
          keyboard={keyboard}
          setKeyboard={setKeyboard}
          mouse={mouse}
          setMouse={setMouse}
          mousepad={mousepad}
          setMousepad={setMousepad}
        />
      )}

      <div className="edit-profile__buttons">
        <button
          className="edit-profile__button edit-profile__button--prev"
          disabled={currentStep <= 0}
          onClick={() => setCurrentStep((prev) => prev - 1)}
        >
          PREV
        </button>
        {currentStep < steps.length - 1 ? (
          <button
            className="edit-profile__button edit-profile__button--next"
            disabled={currentStep >= steps.length - 1}
            onClick={() => setCurrentStep((prev) => prev + 1)}
          >
            NEXT
          </button>
        ) : (
          <button className="edit-profile__button edit-profile__button--finish">
            FINISH
          </button>
        )}
      </div>
    </section>
  );
};

export default EditProfile;
