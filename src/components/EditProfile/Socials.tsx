import React from 'react';
import TwitchIcon from '../../assets/icons/socials/twitch.svg?react';
import YoutubeIcon from '../../assets/icons/socials/youtube.svg?react';
import TwitterIcon from '../../assets/icons/socials/twitter.svg?react';
import DiscordIcon from '../../assets/icons/socials/discord.svg?react';
import IconTextField from '../ui/IconTextField';

type SocialsPropType = {
  twitchUrl: string;
  setTwitchUrl: (twitchUrl: string) => void;
  youtubeUrl: string;
  setYoutubeUrl: (youtubeUrl: string) => void;
  twitterUrl: string;
  setTwitterUrl: (twitterUrl: string) => void;
  discordUsername: string;
  setDiscordUsername: (discordUsername: string) => void;
};

const Socials: React.FC<SocialsPropType> = ({
  twitchUrl,
  setTwitchUrl,
  youtubeUrl,
  setYoutubeUrl,
  twitterUrl,
  setTwitterUrl,
  discordUsername,
  setDiscordUsername
}) => {
  return (
    <div className="socials">
      <h2 className="socials__heading">Socials</h2>
      <IconTextField
        Icon={TwitchIcon}
        isRequired={false}
        placeholder="Link to Twitch profile"
        value={twitchUrl}
        setValue={setTwitchUrl}
      />
      <IconTextField
        Icon={YoutubeIcon}
        isRequired={false}
        placeholder="Link to Youtube profile"
        value={youtubeUrl}
        setValue={setYoutubeUrl}
      />
      <IconTextField
        Icon={TwitterIcon}
        isRequired={false}
        placeholder="Link to Twitter profile"
        value={twitterUrl}
        setValue={setTwitterUrl}
      />
      <IconTextField
        Icon={DiscordIcon}
        isRequired={false}
        placeholder="Discord username"
        value={discordUsername}
        setValue={setDiscordUsername}
      />
    </div>
  );
};

export default Socials;
