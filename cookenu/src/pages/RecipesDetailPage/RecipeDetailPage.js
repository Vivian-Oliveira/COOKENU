import React from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/urls'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { ScreenContainer, RecipeContainer, RecipeImage } from './styled'
import Typography from '@material-ui/core/Typography'
import Loading from '../../components/Load/Loading'

const RecipeDetailPage = () => {
    useProtectedPage()
    const params = useParams()
    const recipe = useRequestData([], `${BASE_URL}/recipe/${params.id}`)[0] //pra pegar o primeiro item da array, pois a api esta retornando os dados dentro de um array.
    console.log(recipe)
    return (
        <ScreenContainer>
            {recipe ?
                <RecipeContainer>
                    <RecipeImage src={recipe.image} />
                    <Typography gutterBottom align={'center'} variant={'h5'} color={'primary'}>{recipe.title}</Typography>
                    <Typography align={'center'}>{recipe.description}</Typography>

                </RecipeContainer>
                :
                <Loading />
            }
        </ScreenContainer>
    )
}

export default RecipeDetailPage
