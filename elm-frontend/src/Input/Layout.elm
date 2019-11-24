module Input.Layout exposing (viewSearchInput)

import Html exposing (Html, div, text)
import Html.Attributes exposing (class)
import Input.InputBox as InputBox
import Types exposing (Msg(..)
    , Sort(..)
    , Direction(..))
import Input.Filters exposing (viewSortByFilter, viewDirectionButton)


viewSearchInput : String -> Sort -> Direction -> Html Msg
viewSearchInput query sort direction =
    div [ class "row" ]
        [ div [ class "col s6" ] [ InputBox.viewSearchInput query ]
        , div [ class "col s4" ] [ viewSortByFilter sort ]
        , div [ class "col s2" ] [ viewDirectionButton direction ]
        ]
