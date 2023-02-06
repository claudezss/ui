import { useIntl } from 'umi';

export async function getInitialState(): Promise<{
  name: string;
  avatar: string;
}> {
  return {
    name: 'Hi',
    avatar: 'https://www.svgrepo.com/show/33660/astronaut.svg',
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
    logo: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/08003a6a-b3ee-4cab-8440-bba1b7f3d21e/d482lwp-ebf27c1c-d477-4051-967e-f58b3ee2e793.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMDgwMDNhNmEtYjNlZS00Y2FiLTg0NDAtYmJhMWI3ZjNkMjFlXC9kNDgybHdwLWViZjI3YzFjLWQ0NzctNDA1MS05NjdlLWY1OGIzZWUyZTc5My5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.4CcRv_kNEffB9ToIyltl4Afw7RWPcLuq37D5cd8qaSg',
    menu: {
      locale: true,
    },
  };
};
