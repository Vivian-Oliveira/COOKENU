import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'


const RecipeDetailPage = () => {
    useProtectedPage()
    return (
        <div>
            <h1>RecipeDetailPage</h1>
        </div>
    )
}

export default RecipeDetailPage
