export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Mosa blue',
  description: 'Shadcn table component with server side sorting, pagination, and filtering',
  url: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://test.mosablue.com',
  links: { github: 'https://github.com/' },
};
