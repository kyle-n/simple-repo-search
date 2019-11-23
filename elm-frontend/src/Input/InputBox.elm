module Input.InputBox exposing (viewSearchInput)


import Html exposing (Html, div, input, label, text)
import Html.Attributes exposing (type_, value, id, class, for, autofocus)
import Html.Events exposing (onInput)
import Types exposing (Msg (..))


searchInputName : String
searchInputName =
    "repo-search-input"

viewSearchInput : String -> Html Msg
viewSearchInput query =
    div [ class "input-field" ]
        [ label [ for searchInputName ] [ text "Search repositories" ]
        , input [ type_ "text"
            , autofocus True
            , value query
            , id searchInputName
            , onInput SetQuery
            ] []
        ]
