import Logo from '@/assets/logo.png'
import Link from 'next/link'
import classes from "./main-header.module.css"
import Image from 'next/image'
import MainHeaderBackground from './main-header-background'
import NavLink from './nav/nav-link'

const MainHeader = () => {
  return (
    <>
    <MainHeaderBackground/>
    <header className={classes.header}>
        <Link className={classes.logo} href="/">
            <Image src={Logo} alt='A food plate' priority/>
            Foodie
        </Link>

        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink href="/meals">Browse Meals</NavLink>
                </li>
                <li>
                    <NavLink href="/community">Explore Community</NavLink>
                </li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default MainHeader
