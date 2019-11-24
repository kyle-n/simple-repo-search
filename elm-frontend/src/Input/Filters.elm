module Input.Filters exposing (viewSortByFilter)


import Html exposing (Html, div, label, select, option, input, text)
import Html.Attributes exposing (value, class)
import Html.Events exposing (onInput)
import Types exposing ( Msg(..)
    , Sort(..)
    , sortToString
    , stringToSort)


allSortFilters : List Sort
allSortFilters =
    [ Score, Stars, Updated ]


viewSortByFilter : Sort -> Html Msg
viewSortByFilter currentSort =
    div [ class "input-field" ]
        [ select
            [ onInput (stringToSort >> SetSort)
            , value <| sortToString currentSort
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
