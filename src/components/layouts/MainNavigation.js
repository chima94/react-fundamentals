import React from 'react'
import {Link} from 'react-router-dom'
import classes from './MainNavigation.module.css'
import { useContext } from 'react'
import FavoritesContext from '../../store/favorites-context'

function MainNavigation() {
    const favouriteCtx = useContext(FavoritesContext)

    return (
        <header className={classes.header}>
            <div className = {classes.logo}>React Meetup</div>
            <nav>
                <ul>
                    <li>
                        <Link to ='/'>All meetups</Link>
                    </li>
                    <li>
                        <Link to ='/new-meetup'>New meetups</Link>
                    </li>
                    <li>
                        <Link to ='/favourites'>
                            Favourites
                            <span className = {classes.badge}>{favouriteCtx.totalFavorites}</span>
                            </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation
