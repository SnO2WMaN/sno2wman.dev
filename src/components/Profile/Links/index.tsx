import React from 'react'
import styled from 'styled-components'

import IconAnnict from '../../../assets/annict.svg'
import IconBookmeter from '../../../assets/bookmeter.svg'
import IconKofi from '../../../assets/ko-fi.svg'
import IconKyash from '../../../assets/kyash.svg'
import IconPixiv from '../../../assets/pixiv.svg'
import IconQiita from '../../../assets/qiita.svg'
import brandcolors from '../../../json/brandcolors.json'
import SocialLink from './SocialLink'
import {
  faBitcoin,
  faCodepen,
  faDiscord,
  faGithub,
  faKeybase,
  faNpm,
  faPatreon,
  faPaypal,
  faSoundcloud,
  faSpotify,
  faSteamSquare,
  faTwitch,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Color from 'color'

type ContainerProps = {}
type Props = { className: string } & ContainerProps

const socials: {
  [key in string]: { href: string; icon: any; disable?: true }
} = {
  'twitter': {
    href: 'https://twitter.com/SnO2WMaN',
    icon: <FontAwesomeIcon icon={faTwitter} />,
  },
  'github': {
    href: 'https://github.com/SnO2WMaN',
    icon: <FontAwesomeIcon icon={faGithub} />,
  },
  'spotify': {
    href: 'https://open.spotify.com/user/sno2wman',
    icon: <FontAwesomeIcon icon={faSpotify} />,
  },
  'pixiv': {
    href: 'https://www.pixiv.net/member.php?id=31358190',
    icon: <IconPixiv />,
  },
  'soundcloud': {
    href: 'https://soundcloud.com/sno2wman',
    icon: <FontAwesomeIcon icon={faSoundcloud} />,
  },
  'discord': {
    href: 'discord:SnO2WMaN#9459',
    icon: <FontAwesomeIcon icon={faDiscord} />,
  },
  'patreon': {
    href: 'https://www.patreon.com/SnO2WMaN',
    icon: <FontAwesomeIcon icon={faPatreon} />,
  },
  'annict': {
    href: 'https://annict.jp/@SnO2WMaN',
    icon: <IconAnnict />,
  },
  'ko-fi': {
    href: 'https://ko-fi.com/sno2wman',
    icon: <IconKofi />,
  },
  'npm': {
    icon: <FontAwesomeIcon icon={faNpm} />,
    href: 'https://www.npmjs.com/~sno2wman',
  },
  'steam': {
    icon: <FontAwesomeIcon icon={faSteamSquare} />,
    href: 'https://steamcommunity.com/id/SnO2WMaN',
  },
  'keybase': {
    icon: <FontAwesomeIcon icon={faKeybase} />,
    href: 'https://keybase.io/sno2wman',
  },
  'bookmeter': {
    href: 'https://bookmeter.com/users/1011664',
    icon: <IconBookmeter />,
  },
  'bitcoin': {
    href: 'bitcoin:13EKexdZYnjKaQQAVSrbtwegAN9iAeLBiG',
    icon: <FontAwesomeIcon icon={faBitcoin} />,
    disable: true,
  },
  'qiita': {
    href: 'https://qiita.com/SnO2WMaN',
    icon: <IconQiita />,
  },
  'paypal': {
    href: 'https://www.twitch.tv/sno2wman',
    icon: <FontAwesomeIcon icon={faPaypal} />,
    disable: true,
  },
  'twitch': {
    href: 'https://www.twitch.tv/sno2wman',
    icon: <FontAwesomeIcon icon={faTwitch} />,
    disable: true,
  },
  'youtube': {
    href: 'https://www.youtube.com/channel/UCz_DWmdSbXtBpi1qw3Gg5YQ',
    icon: <FontAwesomeIcon icon={faYoutube} />,
    disable: true,
  },
  'kyash': {
    href: 'kyash://qr/u/3548793821849286552',
    icon: <IconKyash />,
    disable: true,
  },
  'codepen': {
    href: 'https://codepen.io/SnO2WMaN',
    icon: <FontAwesomeIcon icon={faCodepen} />,
    disable: true,
  },
}
const columns = Math.ceil(
  Math.sqrt(Object.values(socials).filter(({ disable }) => !disable).length)
)

const Component: React.FC<Props> = ({ className }) => (
  <section className={className}>
    <ul className="links">
      {Object.entries(socials)
        .sort(
          ({ 0: a }, { 0: b }) =>
            ((Color(brandcolors[a]).hue() + 30) % 360) -
            ((Color(brandcolors[b]).hue() + 30) % 360)
        )
        .filter(({ 1: { disable } }) => !disable)
        .map(({ 0: key, 1: { icon, href } }, i, a) => (
          <SocialLink
            key={key}
            color={brandcolors[key]}
            href={href}
            row={(i % columns) / (columns - 1)}
            line={
              Math.floor(i / columns) / (Math.floor(a.length / columns) - 1)
            }
          >
            {icon}
          </SocialLink>
        ))}
    </ul>
  </section>
)

const StyledComponent = styled(Component)`
  width: 100%;
  height: 512px;
  background-color: hsl(225, 12.5%, 90%);
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.125) inset;
  display: flex;
  align-items: center;
  justify-content: center;
  > .links {
    display: grid;
    grid-template-columns: repeat(${columns}, 1fr);
    grid-gap: 24px;
  }
`

const Container: React.FC<ContainerProps> = properties => {
  return <StyledComponent {...properties} />
}

export default Container