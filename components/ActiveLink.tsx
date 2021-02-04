import { useRouter } from 'next/router'
import { ReactNode } from 'react';

interface ActiveLinkProps {
  children: ReactNode;
  href: string;
}
const ActiveLink: React.FC<ActiveLinkProps> = ({ children, href }) => {
  const router = useRouter()
  const className = router.asPath === href ? 'active' : 'not-active';

  const handleClick = (e: any) => {
    e.preventDefault()

    window.innerWidth <= 648 ? router.replace(href) : router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}

export default ActiveLink;

