module Input.Filters exposing (viewSortByFilter, viewDirectionButton)


import Html exposing (Html, div, select, option, text, i, button)
import Html.Attributes exposing (value, class)
import Html.Events exposing (onInput, onClick)
import Types exposing ( Msg(..)
    , Sort(..)
    , sortToString
    , stringToSort
    , Direction(..)
    , directionToIconName)


allSortFilters : List Sort
allSortFilters =
    [ Score, Stars, Updated ]


viewSortByFilter : Sort -> Html Msg
viewSortByFilter sort =
    div [ class "input-field" ]
        [ select
            [ onInput (stringToSort >> SetSort)
            , value <| sortToString sort
            , class "browser-default"
            ]
            (List.map viewSortFilterOption allSortFilters)
        ]


viewSortFilterOption : Sort -> Html msg
viewSortFilterOption sort =
    let
        sortString = sortToString sort
    in
    option [ value sortString ]
        [ text sortString ]


viewDirectionButton : Direction -> Html Msg
viewDirectionButton direction =
    div [ class "input-field" ]
        [ button [ class "waves-effect"
            , class "waves-light"
            , class "btn"
            , onClick ToggleDirection
            ]
            [ i [ class "material-icons" ]
                [ text <| directionToIconName direction ]
            ]
        ]
