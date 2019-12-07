module Input.InputBox exposing (viewSearchInput)


import Html exposing (Html, div, input, label, text)
import Html.Attributes exposing (type_, value, id, class, for, autofocus)
import Html.Events exposing (onInput)
import Types exposing (Msg (..), emptyHtml)


searchInputName : String
searchInputName =
    "repo-search-input"

viewSearchInput : String -> Bool -> Html Msg
viewSearchInput query isLoading =
    div [ class "input-field" ]
        [ label [ for searchInputName ] [ text "Search repositories" ]
        , input [ type_ "text"
            , autofocus True
            , value query
            , id searchInputName
            , onInput SetQuery
            ] []
        , viewLoading isLoading
        ]


viewLoading : Bool -> Html msg
viewLoading isLoading =
    case isLoading of
        True ->
            div [] [ text "Loading..." ]
        False ->
            emptyHtml
