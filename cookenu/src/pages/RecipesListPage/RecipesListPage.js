import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import RecipeCard from '../../components/RecipeCard/RecipeCard'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import { RecipeListContainer, AddRecipeButton } from './styled'
import{ Add } from '@material-ui/icons'
import { goToAddRecipes } from '../../routes/coordinator'
import { useHistory } from 'react-router'

const RecipesListPage = () => {
    useProtectedPage()
    const history = useHistory()
    const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)

    const onClickCard = () => {

    }

    const recipesCards = recipes.map((recipe) => {
        return (
            <RecipeCard
                key={recipe.recipe_id}
                title={recipe.title}
                image={recipe.image}
                onClick={onClickCard}
            />
        )
    })
    return (
        <RecipeListContainer>
            {recipesCards}
            <AddRecipeButton
                color={"primary"}
                onClick={() => goToAddRecipes(history)}
            >
                <Add />
            </AddRecipeButton>
        </RecipeListContainer>
    )
}

export default RecipesListPage
