module Input.InputBox exposing (viewSearchInput)


import Html exposing (Html, div, input, label, text)
import Html.Attributes exposing (type_, value, id, class, for)
import Html.Events exposing (onInput)

searchInputName : String
searchInputName =
    "repo-search-input"

viewSearchInput : String -> Html msg
viewSearchInput query =
    div [ class "input-field" ]
        [ label [ for searchInputName ] [ text "Search repositories" ]
        , input [ type_ "text"
            , value query
            , id searchInputName
            ] []
        ]
