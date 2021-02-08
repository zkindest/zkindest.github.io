import { useRouter } from 'next/router'
import { ReactNode } from 'react';

interface ActiveLinkProps {
  children: ReactNode;
  href: string;
}
const ActiveLink: React.FC<ActiveLinkProps> = ({ children, href }) => {
  const router = useRouter();
  let className;
  if (href.startsWith('/articles/')) {
    className = router.asPath.startsWith('/articles/') && href.startsWith('/articles/') ? 'active' : 'not-active';
  }
  else {
    className = router.asPath === href ? 'active' : 'not-active';
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}

export default ActiveLink;

