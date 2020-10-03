import React, { createContext, useState } from 'react';

const UserContext = createContext();

const initialUser = { id: 1, name: 'Miguel', favoriteMovies: [1,2]}

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(initialUser)

    const login = () => {
        setUser(initialUser);
    }

    const logout = () => {
        setUser(null);
    }

    const toggleFavoriteMovieToUser = (movieId) => {

        const isFavorite = user.favoriteMovies.includes(movieId);
        const favoriteMovies = isFavorite
            ? user.favoriteMovies.filter(favMovId => favMovId !== movieId) // Delete
            : [...user.favoriteMovies, movieId] // Add

        setUser({
            ...user,
            favoriteMovies
        })
    }

    const data = { user, login, logout, toggleFavoriteMovieToUser }

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}

export { UserProvider }
export default UserContext;