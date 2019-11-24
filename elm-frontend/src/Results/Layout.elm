module Results.Layout exposing (viewLayout)

import Html exposing (Html, div)
import Html.Attributes exposing (class)
import Results.Card
import Types exposing (Repo)


viewLayout : List Repo -> Html msg
viewLayout repos =
    div [ class "row" ] (List.map Results.Card.viewCard repos)
