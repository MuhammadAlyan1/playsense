import React from 'react';

type AboutPropsType = {
  bio: string;
  roles: Array<string>;
  country: string;
  createdAt: string;
};

const About: React.FC<AboutPropsType> = ({
  bio,
  roles,
  country,
  createdAt
}) => {
  return (
    <section className="about">
      <h2 className="about__heading">Bio</h2>
      <p className="about__bio">{bio}</p>
      <h2 className="about__heading">{roles.length <= 1 ? 'Role' : 'Roles'}</h2>
      <ul className="about__roles-container">
        {roles.map((role) => {
          return (
            <li
              key={role}
              className={`about__role about__role--${role
                .split(' ')
                .join('-')}`}
            >
              {role}
            </li>
          );
        })}
      </ul>
      <h2 className="about__heading">Country</h2>
      <p className="about__country">{country}</p>
      <h2 className="about__heading">Member Since</h2>
      <p className="about__created-at">
        {new Date(createdAt).toLocaleString('en-us', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </p>
    </section>
  );
};

export default About;
