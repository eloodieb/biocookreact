// Components/DisplayRecipes.js
import React from 'react'
// Permet d'importer les components natifs de app mobile
import { View, TextInput, Button, Text } from 'react-native'

import { FlatList } from 'react-native'

import recipes from '../Helpers/recipeData'

import RecipeItem from '../Components/RecipeItem'
//React.Component implémente une méthode render. 
//C'est cette méthode qui va définir ce que notre component va rendre à l'écran.
//Lorsque l'on crée un component custom, on doit obligatoirement réimplémenter cette méthode et retourner (return) les éléments graphiques, sans quoi notre component ne rendra rien et ne fonctionnera pas. 

class DisplayRecipes extends React.Component {
    render() {
        return (
            // Ici on rend à l'écran les éléments graphiques de notre component custom DisplayRecipes et on utilise le langage JSX
            <View style={{ flex: 1 }}>
                <View style={{ flex: 4, marginTop: 45 }}>
                    <Text style={styles.searchInput}>Bienvenue sur Biocook</Text>
                    <TextInput placeholder='Titre de la recette' />
                    <Button title='Rechercher' onPress={() => { }} />

                    {/* Une FlatList doit obligatoirement implémenter deux propriétés :
                    data : qui correspond aux données affichées dans la liste.
                    renderItem : qui correspond au rendu des données de la liste.
                    Dans le  keyExtractor, vous devez spécifier la propriété de votre item qui va servir de key. Assurez-vous que votre key soit toujours unique.*/}
                    <FlatList
                        data={recipes}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <RecipeItem />}
                    />
                </View >

                <View style={{ flex: 0.5, backgroundColor: '#014204' }}>
                </View>
            </View>
        )
    }
}

const styles = {
    searchInput: {
        fontSize: 25,
        marginTop: 23,
        marginBottom: 23,
        textAlign: 'center'
    }
}

// On exporte toujours par défaut les components pour pouvoir les utiliser ailleurs
export default DisplayRecipes