module Results.Layout exposing (viewLayout)


import Html exposing (Html, div)
import Html.Attributes exposing (class)
import Results.Card
import Types exposing (Repo)
import List.Split exposing (chunksOfLeft)


viewLayout : List Repo -> Html msg
viewLayout repos =
    let
        cardPairs = chunksOfLeft 2 (List.map Results.Card.viewCard repos)
        rows = List.map (\cardPair -> div [ class "row" ] cardPair ) cardPairs
    in
    div [ class "row" ] rows
