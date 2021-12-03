import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorites: (favoritesMeetup) =>{},
    removeFavorites: (meetupId) =>{},
    itemIsFavorites: (meetupId) =>{}
})

export function FavoritesContextProvider(props){

    const [userFavorites, setUserFavorites] = useState([])

    function addFavoriteHandler(favoritesMeetup){
        setUserFavorites((previousFavorites) =>{
            return previousFavorites.concat(favoritesMeetup)
        })
    }
    function removeFavoritesHandler(meetupId){
        setUserFavorites(previousFavorites =>{
            return previousFavorites.filter(meetup => meetup.id !== meetupId)
        })
    }
    function itemFavoritesHandler(meetupId){
        return userFavorites.some(meetup => meetup.id === meetupId)
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorites: addFavoriteHandler,
        removeFavorite: removeFavoritesHandler,
        itemIsFavorite: itemFavoritesHandler
    }

    return <FavoritesContext.Provider value = {context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext 