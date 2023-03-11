import { useIntl } from 'umi';
import GEO from '/src/assets/imgs/geo1.png';
import GEO_LOGO from '/src/assets/imgs/geo.png';

export async function getInitialState(): Promise<{
  name: string;
  avatar: string;
}> {
  return {
    name: 'Hi',
    avatar: GEO,
  };
}

export const layout = () => {
  /* eslint-disable-next-line */
  const intl = useIntl();
  const msg: string = intl.formatMessage({
    id: 'title',
  });
  return {
    fixSiderbar: true,
    fixedHeader: true,
    layout: 'mix',
    navTheme: 'light',
    breakpoint: false,
    headerTheme: 'light',
    contentWidth: 'Fluid',
    defaultCollapsed: true,
    title: msg,
    logo: GEO_LOGO,
    menu: {
      locale: true,
    },
    appList: [
      {
        icon: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
        title: 'Github',
        desc: 'Github Repo',
        url: 'https://github.com/claudezss',
        target: '_blank',
      },
      {
        icon: 'https://brand.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg',
        title: 'Linkedin',
        desc: 'Linkedin',
        url: 'https://www.linkedin.com/in/yan-zhang-a21428113/',
        target: '_blank',
      },
      {
        icon: 'https://orcid.org/assets/vectors/orcid.logo.svg',
        title: 'ORCID',
        desc: 'Publications',
        url: 'https://orcid.org/0000-0001-9867-4924',
        target: '_blank',
      },
      {
        icon: 'https://s1.hdslb.com/bfs/static/jinkela/space/assets/icon-auth.png',
        title: 'Bilibili',
        desc: 'Videos',
        url: 'https://space.bilibili.com/6151386',
        target: '_blank',
      },
    ],
  };
};
