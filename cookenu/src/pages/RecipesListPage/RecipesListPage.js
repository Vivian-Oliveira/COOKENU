import React from 'react'
import  useProtectedPage  from '../../hooks/useProtectedPage'
const RecipesListPage = () => {
    useProtectedPage()
    return (
        <div>
            <h1>RecipesListPage</h1>
        </div>
    )
}

export default RecipesListPage
